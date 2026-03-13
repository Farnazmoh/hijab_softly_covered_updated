'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X, Heart } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Modest Elegance</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Shop
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary font-medium transition-colors">
              About
            </Link>
            <Link href="/mehandi-booking" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Mehandi Booking
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-primary transition-colors">
              <Heart className="w-6 h-6" />
            </button>
            <button className="text-gray-700 hover:text-primary transition-colors relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-gray-700 hover:text-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block text-gray-700 hover:text-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/mehandi-booking"
              className="block text-gray-700 hover:text-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Mehandi Booking
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
