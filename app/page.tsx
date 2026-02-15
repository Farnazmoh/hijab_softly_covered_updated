"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-mauve-50 via-white to-mauve-50">
      {/* Simple Header */}
      <header className="relative py-12 px-6 bg-gradient-to-br from-mauve-800 via-mauve-700 to-mauve-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center justify-between">
            {/* Left side - Logo */}
            <div className="relative bg-white rounded-3xl p-5 shadow-2xl border-4 border-mauve-400">
              <Image 
                src="/Grey Minimal Monogram Initials Logo.png" 
                alt="Softly Covered Logo"
                width={140}
                height={140}
                className="object-contain"
              />
            </div>
            {/* Right side - Text */}
            <div className="flex-1 text-right ml-8">
              <h1 className="text-white font-bold text-4xl drop-shadow-lg mb-2">
                ✨ Softly Covered ✨
              </h1>
              <p className="text-mauve-100 text-xl drop-shadow-lg">
                Premium Quality Hijabs & Abayas
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* About */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12 border-2 border-mauve-200">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-80 md:h-auto relative">
                <Image 
                  src="/images/products/hijab_img_public/mainpic.jpeg" 
                  alt="Our Collection"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-10 flex flex-col justify-center bg-gradient-to-br from-mauve-50 to-white">
                <h3 className="text-4xl font-serif font-bold text-mauve-900 mb-6">About Our Collection</h3>
                <p className="text-mauve-700 text-xl mb-5 leading-relaxed">
                  Every product is crafted with premium fabrics for superior comfort and elegance. 
                  our products are finest materials and traditional craftsmanship to deliver 
                  authentic quality in every piece.
                </p>
                <p className="text-mauve-700 text-xl leading-relaxed">
                  Combining modesty, comfort, and style for the modern Muslim woman. ✨
                </p>
              </div>
            </div>
          </div>

          {/* Special Offers Banner */}
          <div className="bg-gradient-to-r from-mauve-700 via-mauve-600 to-mauve-700 rounded-3xl shadow-2xl p-8 mb-12 text-white text-center relative overflow-hidden border-2 border-mauve-400">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15)_0%,transparent_60%)]"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-mauve-300 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-mauve-400 rounded-full blur-3xl opacity-20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">🎉 Special Bulk Discounts! 🎉</h3>
              <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 text-lg md:text-xl font-semibold">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 border-2 border-white/40 hover:bg-white/25 transition-all">
                  <p className="text-2xl font-bold mb-1">10% OFF</p>
                  <p>Buy 2 Items</p>
                </div>
                <div className="bg-white/30 backdrop-blur-sm rounded-2xl px-6 py-4 border-2 border-white/50 hover:bg-white/35 transition-all transform scale-105">
                  <p className="text-2xl font-bold mb-1">15% OFF</p>
                  <p>Buy 3+ Items</p>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="mb-12">
            <h3 className="text-4xl font-serif font-bold text-mauve-900 mb-8 text-center">Our Beautiful Collection</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  name: "Embroidered Hijab", 
                  desc: "Beautiful embroidered hijab with elegant design", 
                  price: "$19.99", 
                  images: ["/images/products/hijab_img_public/empbro_hijab2.mp4", "/images/products/hijab_img_public/embro_hijab1.jpeg"] 
                },
                { 
                  name: "Embroidered Sleeve Abaya", 
                  desc: "Beautiful abaya featuring embroidered sleeves", 
                  price: "$84.99", 
                  images: ["/images/products/hijab_img_public/embroid_sleve1.mp4"] 
                },
                { 
                  name: "Embroidered Abaya", 
                  desc: "Stunning abaya with intricate embroidery details", 
                  price: "$79.99", 
                  images: ["/images/products/hijab_img_public/embro_1.jpg", "/images/products/hijab_img_public/embro_2.jpg", "/images/products/hijab_img_public/embro_3.jpg", "/images/products/hijab_img_public/embro_4.mp4", "/images/products/hijab_img_public/embro_5.jpg"] 
                },
                { 
                  name: "Green Print Abaya", 
                  desc: "Stylish green printed abaya with modern pattern", 
                  price: "$74.99", 
                  images: ["/images/products/hijab_img_public/green_print.mp4"] 
                },
                { 
                  name: "Maroon Print Abaya", 
                  desc: "Rich maroon printed abaya with elegant design", 
                  price: "$74.99", 
                  images: ["/images/products/hijab_img_public/maroon_print.mp4"] 
                },
                { 
                  name: "Rust Print Abaya", 
                  desc: "Warm rust-colored printed abaya with unique pattern", 
                  price: "$74.99", 
                  images: ["/images/products/hijab_img_public/rust_print1.mp4", "/images/products/hijab_img_public/rust_print2.jpg", "/images/products/hijab_img_public/rust_print3.jpg", "/images/products/hijab_img_public/rust_print4.jpg"] 
                },
                { 
                  name: "Silk Print Abaya", 
                  desc: "Luxurious silk printed abaya with premium finish", 
                  price: "$84.99", 
                  images: ["/images/products/hijab_img_public/silk_print_1.jpg", "/images/products/hijab_img_public/silk_print_2.jpg", "/images/products/hijab_img_public/silk_print_3.jpg", "/images/products/hijab_img_public/silk_print_4.jpg", "/images/products/hijab_img_public/silk_print_5.jpg", "/images/products/hijab_img_public/silk_print_6.mp4"] 
                },
                { 
                  name: "Teal Print Abaya", 
                  desc: "Beautiful teal printed abaya with contemporary style", 
                  price: "$74.99", 
                  images: ["/images/products/hijab_img_public/teel_print_1.mp4", "/images/products/hijab_img_public/teel_print_2.jpg", "/images/products/hijab_img_public/teel_print_3.jpg", "/images/products/hijab_img_public/teel_print_4.jpg", "/images/products/hijab_img_public/teel_print_5.jpg"] 
                },
                { 
                  name: "Dubai Style Abaya", 
                  desc: "Elegant Dubai-style abaya with refined design", 
                  price: "$89.99", 
                  images: ["/images/products/hijab_img_public/dubai_style_a1.mp4", "/images/products/hijab_img_public/dubai_style_b1.mp4"] 
                },
                { 
                  name: "Net Abaya", 
                  desc: "Delicate net fabric abaya with graceful appearance", 
                  price: "$89.99", 
                  images: ["/images/products/hijab_img_public/net_1.mp4", "/images/products/hijab_img_public/net_2.jpg", "/images/products/hijab_img_public/net_3.jpg", "/images/products/hijab_img_public/net_4.jpg", "/images/products/hijab_img_public/net_5.jpg"] 
                },
                { 
                  name: "Side Pattern Abaya", 
                  desc: "Modern abaya with decorative side pattern detail", 
                  price: "$79.99", 
                  images: ["/images/products/hijab_img_public/side_pattern1.mp4"] 
                },
                { 
                  name: "Sued Abaya", 
                  desc: "Graceful flowing abaya with elegant sway", 
                  price: "$79.99", 
                  images: ["/images/products/hijab_img_public/swayed_1.mp4", "/images/products/hijab_img_public/swayed_2.jpg", "/images/products/hijab_img_public/swayed_3.jpg", "/images/products/hijab_img_public/swayed_4.jpg"] 
                },
                { 
                  name: "Reversible Abaya (Black/Brown)", 
                  desc: "Versatile reversible abaya - black on one side, brown on the other", 
                  price: "$94.99", 
                  images: ["/images/products/hijab_img_public/Reversable_abhaya_a1MOV.mp4", "/images/products/hijab_img_public/reversable_abhaya_b1(black-inbrown-out.jpg", "/images/products/hijab_img_public/reversable_abhaya_b2(black-inbrown-out).jpg", "/images/products/hijab_img_public/reversable_abhaya_b3(black-inbrown-out).mp4", "/images/products/hijab_img_public/reversable_abhaya_b4(brown-inblack-out)(brown_in.mp4"] 
                },
                { 
                  name: "Reversible Abaya (Black/Green)", 
                  desc: "Two abayas in one - beautiful black and green reversible design", 
                  price: "$94.99", 
                  images: ["/images/products/hijab_img_public/reversable_green1.mp4", "/images/products/hijab_img_public/reversable_green1(black-out-green-in)).jpg", "/images/products/hijab_img_public/reversable_green2.jpg", "/images/products/hijab_img_public/reversable_green2(black-out-green-in)).jpg", "/images/products/hijab_img_public/reversable_green3(black-out-green-in).jpg", "/images/products/hijab_img_public/reversable_green3(green-out-black-in).jpg", "/images/products/hijab_img_public/reversable_green4(black-out-green-in).jpg", "/images/products/hijab_img_public/reversable_green5(black-out-green-in).mp4"] 
                },
                { 
                  name: "Side Pleated Abaya", 
                  desc: "Premium Quality flowy side pleated abaya", 
                  price: "$94.99", 
                  images: ["/images/products/hijab_img_public/Reversable_abhaya_a1MOV.mp4"] 
                }
              ].map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-mauve-800 to-mauve-900 rounded-3xl shadow-2xl p-10 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-mauve-400 rounded-full blur-3xl opacity-20"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-serif font-bold mb-4">Get in Touch</h3>
              <p className="text-mauve-100 text-xl mb-6">
                Ready to order? Contact us today! 📦
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border-2 border-white/20">
                <p className="text-2xl font-bold mb-3">💰 Volume Discounts Available!</p>
                <div className="flex justify-center gap-8 text-lg">
                  <p>✨ 10% off on 2 items</p>
                  <p>✨ 15% off on 3+ items</p>
                </div>
              </div>
              <div className="space-y-3 text-xl">
                <p className="font-medium">Markham</p>
                <p className="font-medium">✉️ info@softlycovered.com</p>
              </div>
              <a href="tel:4378184742" className="inline-block mt-8 bg-gradient-to-r from-pink-400 to-mauve-600 hover:from-pink-500 hover:to-mauve-700 text-white px-10 py-5 rounded-full text-xl font-bold transition-all shadow-xl hover:shadow-2xl transform hover:scale-105">
                📞 Call 
              </a>
              <a href="tel:4378184742" className="inline-block mt-8 bg-gradient-to-r from-pink-400 to-mauve-600 hover:from-pink-500 hover:to-mauve-700 text-white px-10 py-5 rounded-full text-xl font-bold transition-all shadow-xl hover:shadow-2xl transform hover:scale-105">
                🛒 Place an Order
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-mauve-700">
        <p className="text-lg">✨ &copy; 2026 Modest Elegance. All rights reserved. ✨</p>
      </footer>
    </div>
  );
}

function ProductCard({ product }: { product: { name: string; desc: string; price: string; images: string[] } }) {
  // Sort videos first, then images
  const sortedImages = [...product.images].sort((a, b) => {
    const aIsVideo = a.endsWith('.mp4') || a.endsWith('.webm') || a.endsWith('.mov');
    const bIsVideo = b.endsWith('.mp4') || b.endsWith('.webm') || b.endsWith('.mov');
    if (aIsVideo === bIsVideo) return 0;
    return aIsVideo ? -1 : 1;
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % sortedImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + sortedImages.length) % sortedImages.length);
  };

  const currentMedia = sortedImages[currentImageIndex];
  const isVideo = currentMedia.endsWith('.mp4') || currentMedia.endsWith('.webm') || currentMedia.endsWith('.mov');

  return (
    <>
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-mauve-400">
        <div className="h-96 relative overflow-hidden group bg-gradient-to-br from-mauve-100 to-mauve-50 cursor-pointer" onClick={() => setIsModalOpen(true)}>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 z-10 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3 shadow-xl">
              <span className="text-2xl">🔍</span>
            </div>
          </div>
          {isVideo ? (
            <video 
              src={currentMedia}
              className="w-full h-full object-cover"
              autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <Image 
            src={currentMedia} 
            alt={product.name}
            fill
            className="object-cover hover:scale-110 transition-transform duration-300"
          />
        )}
        {product.images.length > 1 && (
          <>
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-mauve-900 rounded-full p-3 shadow-xl hover:scale-110 transition-all font-bold text-xl z-10"
            >
              ←
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-mauve-900 rounded-full p-3 shadow-xl hover:scale-110 transition-all font-bold text-xl z-10"
            >
              →
            </button>
            <div className="absolute top-3 right-3 bg-mauve-900/80 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              📸 {currentImageIndex + 1}/{sortedImages.length}
            </div>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-mauve-900/70 px-3 py-2 rounded-full z-10 backdrop-blur-sm">
              {sortedImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentImageIndex ? 'bg-pink-400 w-8' : 'bg-white/70'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-6 bg-gradient-to-b from-white to-mauve-50">
        <h4 className="text-2xl font-serif font-bold text-mauve-900 mb-2">{product.name}</h4>
        <p className="text-mauve-600 text-lg mb-3">{product.desc}</p>
        <p className="text-pink-600 text-xl font-bold">{product.price}</p>
      </div>
    </div>

      {/* Full Screen Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/30 rounded-full p-3 text-2xl font-bold z-50"
          >
            ✕
          </button>
          
          <div className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {isVideo ? (
              <video 
                src={currentMedia}
                className="max-w-full max-h-[90vh] object-contain"
                controls
                autoPlay
                loop
              />
            ) : (
              <Image 
                src={currentMedia} 
                alt={product.name}
                width={1200}
                height={1200}
                className="max-w-full max-h-[90vh] object-contain"
              />
            )}
            
            {sortedImages.length > 1 && (
              <>
                <button 
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-mauve-900 rounded-full p-4 shadow-xl hover:scale-110 transition-all font-bold text-2xl"
                >
                  ←
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-mauve-900 rounded-full p-4 shadow-xl hover:scale-110 transition-all font-bold text-2xl"
                >
                  →
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-mauve-900/80 text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                  {currentImageIndex + 1} / {sortedImages.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
