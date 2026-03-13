"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const AVAILABLE_DAYS = [
  { id: "day1", label: "Tuesday",   date: "March 17, 2026" },
  { id: "day2", label: "Wednesday", date: "March 18, 2026" },
];

const SLOTS_30 = [
  "2:00 PM", "2:30 PM",  
  "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM",
  "6:00 PM",
];

const SLOTS_15 = [
  "3:00 PM", "3:15 PM", "3:30 PM", "3:45 PM",
  "4:00 PM", "4:15 PM", "4:30 PM", "4:45 PM",
  "5:00 PM", "5:15 PM", "5:30 PM", "5:45 PM",
  "6:00 PM",
];

const DESIGN_TYPES = [
  {
    id: "detailed",
    label: "Detailed Design",
    sub: "Both hands · Complex patterns",
    emoji: "🌿",
    slot: "30 min slots",
    slots: SLOTS_30,
    color: "border-mauve-600 bg-mauve-50",
    price: "$25",
  },
  {
    id: "simple",
    label: "Simple Design",
    sub: "Small · Light patterns",
    emoji: "✨",
    slot: "15 min slots",
    slots: SLOTS_15,
    color: "border-mauve-600 bg-mauve-50",
    price: "$15",
  },
];

type Booking = { dayId: string; time: string; name: string };
type Step = 1 | 2 | 3 | 4 | 5 | 6;

const LS_KEY    = "mehandi_bookings";
const ADMIN_PIN = "450820"; // change this to whatever PIN you want

function getInitials(name: string) {
  return name.trim().split(/\s+/).map(w => w[0]?.toUpperCase() ?? "").join("").slice(0, 2) || "?";
}

export default function MehandiBookingPage() {
  const [step, setStep]                 = useState<Step>(1);
  const [designType, setDesignType]     = useState<string | null>(null);
  const [selectedDay, setSelectedDay]   = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName]                 = useState("");
  const [paid, setPaid]                 = useState(false);
  const [bookings, setBookings]         = useState<Booking[]>([]);
  const [adminOpen, setAdminOpen]       = useState(false);
  const [adminPin, setAdminPin]         = useState("");
  const [adminUnlocked, setAdminUnlocked] = useState(false);
  const [adminError, setAdminError]     = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LS_KEY);
      if (stored) setBookings(JSON.parse(stored));
    } catch {}
  }, []);

  const typeObj = DESIGN_TYPES.find(d => d.id === designType);
  const dayObj  = AVAILABLE_DAYS.find(d => d.id === selectedDay);
  const slots   = typeObj?.slots ?? [];

  const bookedSlot = (dayId: string, time: string) =>
    bookings.find(b => b.dayId === dayId && b.time === time);

  const deleteBooking = (index: number) => {
    const updated = bookings.filter((_, i) => i !== index);
    setBookings(updated);
    try { localStorage.setItem(LS_KEY, JSON.stringify(updated)); } catch {}
  };

  const tryAdminLogin = () => {
    if (adminPin === ADMIN_PIN) {
      setAdminUnlocked(true);
      setAdminError(false);
    } else {
      setAdminError(true);
      setAdminPin("");
    }
  };

  const canProceed = () => {
    if (step === 1) return !!designType;
    if (step === 2) return !!selectedDay;
    if (step === 3) return !!selectedTime && name.trim().length >= 1;
    if (step === 4) return paid;
    return false;
  };

  const next = () => {
    if (step === 4) {
      const newBooking: Booking = { dayId: selectedDay!, time: selectedTime!, name: name.trim() };
      const updated = [...bookings, newBooking];
      setBookings(updated);
      try { localStorage.setItem(LS_KEY, JSON.stringify(updated)); } catch {}
    }
    setStep(s => (s + 1) as Step);
  };
  const back = () => {
    if (step === 4) setPaid(false);
    if (step === 3) setSelectedTime(null);
    if (step === 2) setSelectedDay(null);
    setStep(s => (s - 1) as Step);
  };

  const reset = () => {
    setStep(1);
    setDesignType(null);
    setSelectedDay(null);
    setSelectedTime(null);
    setName("");
    setPaid(false);
  };

  const STEPS = ["Design Type", "Date", "Time Slot", "Payment", "Done"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-mauve-50 via-white to-mauve-50">

      {/* Header */}
      <header className="relative py-10 px-6 bg-gradient-to-br from-mauve-800 via-mauve-700 to-mauve-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />
        </div>
        <div className="max-w-2xl mx-auto relative z-10 text-center">
          <Link href="/" className="inline-block text-mauve-300 hover:text-white text-xs mb-3 tracking-wide transition-colors">
            ← Back to Hijab Shop
          </Link>
          <p className="text-mauve-300 text-sm mb-1 tracking-widest uppercase">Softly Covered</p>
          <h1 className="text-white font-bold text-3xl sm:text-4xl drop-shadow-lg">🌿 Mehandi Booking</h1>
          <p className="text-mauve-200 mt-2 text-sm">Pick your design type, a day &amp; a time slot</p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-10">

        {/* Already Booked Panel */}
        {bookings.length > 0 && step < 5 && (
          <div className="bg-white border-2 border-mauve-200 rounded-2xl p-5 mb-6 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-mauve-700 font-bold text-sm">📋 Already Booked</h3>
              <button
                onClick={() => { setAdminOpen(o => !o); setAdminPin(""); setAdminError(false); }}
                className="text-xs text-mauve-400 hover:text-mauve-700 font-semibold transition-colors"
              >
                {adminOpen ? "Close" : "🔐 Admin"}
              </button>
            </div>

            {/* Admin PIN gate */}
            {adminOpen && !adminUnlocked && (
              <div className="mb-4 bg-mauve-50 border border-mauve-200 rounded-xl p-4">
                <p className="text-xs font-semibold text-mauve-700 mb-2">Enter admin PIN to manage bookings</p>
                <div className="flex gap-2">
                  <input
                    type="password"
                    value={adminPin}
                    onChange={e => { setAdminPin(e.target.value); setAdminError(false); }}
                    onKeyDown={e => e.key === "Enter" && tryAdminLogin()}
                    placeholder="PIN"
                    maxLength={8}
                    className="flex-1 rounded-lg border-2 border-mauve-200 px-3 py-2 text-sm focus:outline-none focus:border-mauve-500"
                  />
                  <button
                    onClick={tryAdminLogin}
                    className="px-4 py-2 bg-mauve-700 text-white text-sm font-semibold rounded-lg hover:bg-mauve-800 transition-colors"
                  >
                    Unlock
                  </button>
                </div>
                {adminError && <p className="text-red-500 text-xs mt-1">Incorrect PIN. Try again.</p>}
              </div>
            )}

            {/* Admin unlocked — bookings with delete */}
            {adminOpen && adminUnlocked && (
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-green-600 font-semibold">✓ Admin unlocked</p>
                  <button
                    onClick={() => { setAdminUnlocked(false); setAdminOpen(false); }}
                    className="text-xs text-mauve-400 hover:text-mauve-600"
                  >
                    Lock
                  </button>
                </div>
                {bookings.length === 0 ? (
                  <p className="text-xs text-mauve-400">No bookings yet.</p>
                ) : (
                  <div className="space-y-2">
                    {bookings.map((b, i) => {
                      const d = AVAILABLE_DAYS.find(x => x.id === b.dayId);
                      return (
                        <div key={i} className="flex items-center justify-between bg-mauve-50 border border-mauve-200 rounded-xl px-3 py-2">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-mauve-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                              {getInitials(b.name)}
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-mauve-800">{b.name} · {b.time}</p>
                              <p className="text-xs text-mauve-400">{d?.label} · {d?.date}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => deleteBooking(i)}
                            className="text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg p-1.5 transition-colors text-xs font-bold"
                            title="Delete booking"
                          >
                            ✕
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* Public view — initials only */}
            {!adminUnlocked && (
              <div className="flex flex-wrap gap-2">
                {bookings.map((b, i) => {
                  const d = AVAILABLE_DAYS.find(x => x.id === b.dayId);
                  return (
                    <div key={i} className="flex items-center gap-2 bg-mauve-50 border border-mauve-200 rounded-xl px-3 py-2">
                      <div className="w-7 h-7 rounded-full bg-mauve-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                        {getInitials(b.name)}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-mauve-800">{b.time}</p>
                        <p className="text-xs text-mauve-400">{d?.label} · {d?.date}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Progress Bar */}
        {step < 5 && step > 0 && (
          <div className="mb-10">
            <div className="flex items-center justify-between relative">
              <div className="absolute top-4 left-0 right-0 h-0.5 bg-mauve-200 z-0" />
              <div
                className="absolute top-4 left-0 h-0.5 bg-mauve-600 z-0 transition-all duration-500"
                style={{ width: `${((step - 1) / (STEPS.length - 1)) * 100}%` }}
              />
              {STEPS.map((label, i) => {
                const num     = i + 1;
                const done    = step > num;
                const current = step === num;
                return (
                  <div key={label} className="flex flex-col items-center z-10 gap-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300
                      ${done    ? "bg-mauve-600 border-mauve-600 text-white" : ""}
                      ${current ? "bg-white border-mauve-600 text-mauve-700 shadow-md scale-110" : ""}
                      ${!done && !current ? "bg-white border-mauve-300 text-mauve-400" : ""}
                    `}>
                      {done ? "✓" : num}
                    </div>
                    <span className={`text-xs hidden sm:block ${current ? "text-mauve-700 font-semibold" : "text-mauve-400"}`}>
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── STEP 1: Design Type ─────────────────────────────────────────── */}
        {step === 1 && (
          <section>
            <h2 className="text-xl font-bold text-mauve-800 mb-1">What kind of design?</h2>
            <p className="text-mauve-500 text-sm mb-6">This helps us set the right time slots for you.</p>

            <div className="grid gap-4 sm:grid-cols-2">
              {DESIGN_TYPES.map(type => (
                <button
                  key={type.id}
                  onClick={() => setDesignType(type.id)}
                  className={`rounded-2xl border-2 p-6 text-left transition-all duration-200 shadow-sm hover:shadow-md
                    ${designType === type.id
                      ? "border-mauve-600 bg-mauve-50 shadow-lg"
                      : "border-mauve-200 bg-white hover:border-mauve-400"
                    }`}
                >
                  <span className="text-4xl">{type.emoji}</span>
                  <p className="font-bold text-mauve-800 text-lg mt-3">{type.label}</p>
                  <p className="text-mauve-500 text-sm mt-1">{type.sub}</p>
                  <div className="mt-4 inline-block bg-mauve-100 text-mauve-700 text-xs font-semibold px-3 py-1 rounded-full">
                    🕐 {type.slot}
                  </div>
                  {designType === type.id && (
                    <p className="text-mauve-600 text-xs font-semibold mt-3">✓ Selected</p>
                  )}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* ── STEP 2: Pick a Day ──────────────────────────────────────────── */}
        {step === 2 && (
          <section>
            <h2 className="text-xl font-bold text-mauve-800 mb-1">📅 Choose a Day</h2>
            <p className="text-mauve-500 text-sm mb-6">We're available on the following days:</p>

            <div className="grid gap-4 sm:grid-cols-2">
              {AVAILABLE_DAYS.map(day => (
                <button
                  key={day.id}
                  onClick={() => setSelectedDay(day.id)}
                  className={`rounded-2xl border-2 p-5 text-left transition-all duration-200 shadow-sm hover:shadow-md
                    ${selectedDay === day.id
                      ? "border-mauve-600 bg-mauve-50 shadow-lg"
                      : "border-mauve-200 bg-white hover:border-mauve-400"
                    }`}
                >
                  <p className="text-2xl mb-2">📅</p>
                  <p className="font-bold text-mauve-800 text-lg">{day.label}</p>
                  <p className="text-mauve-500 text-sm">{day.date}</p>
                  {selectedDay === day.id && (
                    <p className="text-mauve-600 text-xs font-semibold mt-3">✓ Selected</p>
                  )}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* ── STEP 3: Name + Time Slot ─────────────────────────────────────── */}
        {step === 3 && (
          <section>
            {/* Name / Initials */}
            <div className="mb-7">
              <label className="block text-sm font-bold text-mauve-700 mb-1">
                Your Name or Initials
              </label>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="e.g. Aisha or A.K."
                maxLength={30}
                className="w-full rounded-xl border-2 border-mauve-200 px-4 py-3 text-sm focus:outline-none focus:border-mauve-500 transition-colors"
              />
            </div>

            <h2 className="text-xl font-bold text-mauve-800 mb-1">⏰ Choose a Time Slot</h2>
            <p className="text-mauve-500 text-sm mb-1">{dayObj?.label}, {dayObj?.date}</p>
            <p className="text-xs text-mauve-400 mb-6">{typeObj?.emoji} {typeObj?.label} · {typeObj?.slot}</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {slots.map(slot => {
                const taken = bookedSlot(selectedDay!, slot);
                const isSelected = selectedTime === slot;
                return (
                  <button
                    key={slot}
                    onClick={() => !taken && setSelectedTime(slot)}
                    disabled={!!taken}
                    className={`rounded-xl border-2 py-3 px-2 font-semibold text-xs transition-all duration-200 flex flex-col items-center gap-1
                      ${taken
                        ? "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed"
                        : isSelected
                          ? "border-mauve-600 bg-mauve-600 text-white shadow-md"
                          : "border-mauve-200 bg-white text-mauve-700 hover:border-mauve-400 hover:bg-mauve-50"
                      }`}
                  >
                    <span>{slot}</span>
                    {taken && (
                      <span className="text-[10px] font-bold bg-gray-200 text-gray-500 rounded-full px-1.5">
                        {getInitials(taken.name)}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-mauve-400 mt-3">Greyed slots are already taken.</p>
          </section>
        )}

        {/* ── STEP 4: Payment ─────────────────────────────────────────────── */}
        {step === 4 && (
          <section>
            <h2 className="text-xl font-bold text-mauve-800 mb-1">💸 Payment</h2>
            <p className="text-mauve-500 text-sm mb-6">Almost done! Please send payment to confirm your slot.</p>

            {/* Cost card */}
            <div className="bg-mauve-700 text-white rounded-2xl p-6 mb-6 flex items-center justify-between shadow-lg">
              <div>
                <p className="text-mauve-200 text-xs uppercase tracking-wide mb-1">Amount Due</p>
                <p className="text-4xl font-bold">{typeObj?.price}</p>
                <p className="text-mauve-200 text-sm mt-1">{typeObj?.emoji} {typeObj?.label}</p>
              </div>
              <div className="text-5xl">💳</div>
            </div>

            {/* Interac instructions */}
            <div className="bg-white border-2 border-mauve-200 rounded-2xl p-5 mb-6">
              <p className="text-mauve-700 font-bold text-sm mb-3">Send via Interac e-Transfer</p>
              <div className="flex items-center justify-between bg-mauve-50 rounded-xl px-4 py-3">
                <span className="text-mauve-500 text-sm">Interac address</span>
                <span className="font-bold text-mauve-900 text-base tracking-wide">far@123</span>
              </div>
              <p className="text-xs text-mauve-400 mt-3">
                📝 In the message/note field, please include your name: <span className="font-semibold text-mauve-700">{name}</span>
              </p>
            </div>

            {/* Confirmation checkbox */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={paid}
                onChange={e => setPaid(e.target.checked)}
                className="mt-1 w-4 h-4 accent-mauve-700 cursor-pointer"
              />
              <span className="text-sm text-mauve-700 group-hover:text-mauve-900 transition-colors">
                I have or I will sent the payment of <span className="font-bold">{typeObj?.price}</span> to <span className="font-bold">far@123</span> Inshallah
              </span>
            </label>
          </section>
        )}

        {/* ── STEP 5: Confirmation ────────────────────────────────────────── */}
        {step === 5 && (
          <div className="text-center py-4">
            <div className="text-6xl mb-4">🌿</div>
            <h2 className="text-2xl font-bold text-mauve-800 mb-2">Your Slot is Reserved!</h2>
            <p className="text-mauve-500 text-sm mb-8">Payment received · Slot confirmed. Jazakallah Khair 🤍</p>

            <div className="bg-white border-2 border-mauve-200 rounded-3xl p-6 shadow-lg inline-block text-left min-w-[260px] mb-8">
              <h3 className="text-mauve-700 font-bold text-sm mb-4 border-b border-mauve-100 pb-2 uppercase tracking-wide">
                📋 Booking Summary
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between gap-8">
                  <span className="text-mauve-400">Name</span>
                  <span className="font-semibold text-mauve-800">{name}</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span className="text-mauve-400">Design</span>
                  <span className="font-semibold text-mauve-800">{typeObj?.emoji} {typeObj?.label}</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span className="text-mauve-400">Day</span>
                  <span className="font-semibold text-mauve-800">{dayObj?.label}</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span className="text-mauve-400">Date</span>
                  <span className="font-semibold text-mauve-800">{dayObj?.date}</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span className="text-mauve-400">Time</span>
                  <span className="font-semibold text-mauve-800">{selectedTime}</span>
                </div>
                <div className="flex justify-between gap-8 pt-2 border-t border-mauve-100">
                  <span className="text-mauve-400">Paid</span>
                  <span className="font-bold text-green-600">{typeObj?.price} ✓</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={reset}
                className="px-6 py-3 rounded-xl bg-mauve-700 text-white font-semibold hover:bg-mauve-800 transition-colors text-sm"
              >
                Back to Mehandi Design
              </button>
              <Link
                href="/"
                className="px-6 py-3 rounded-xl border-2 border-mauve-300 text-mauve-700 font-semibold hover:bg-mauve-50 transition-colors text-sm text-center"
              >
                ← Back to Hijab Shop
              </Link>
            </div>
          </div>
        )}

        {/* Nav Buttons */}
        {step < 5 && (
          <div className={`mt-8 flex ${step > 1 ? "justify-between" : "justify-end"}`}>
            {step > 1 && (
              <button
                onClick={back}
                className="px-6 py-3 rounded-xl border-2 border-mauve-300 text-mauve-700 font-semibold hover:bg-mauve-50 transition-colors text-sm"
              >
                ← Back
              </button>
            )}
            <button
              onClick={next}
              disabled={!canProceed()}
              className={`px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-200
                ${canProceed()
                  ? "bg-mauve-700 text-white hover:bg-mauve-800 shadow-md hover:shadow-lg"
                  : "bg-mauve-200 text-mauve-400 cursor-not-allowed"
                }`}
            >
              {step === 4 ? "Confirm Booking ✓" : "Continue →"}
            </button>
          </div>
        )}

      </main>
    </div>
  );
}
