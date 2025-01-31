'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaShoppingCart, FaHeart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                width={150}  // Adjust logo width as necessary
                height={40}   // Adjust logo height as necessary
                className="h-10 w-auto cursor-pointer"
                src="/logo.png"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex flex-1 justify-center space-x-8">
            {['Home', 'Shop', 'Blog', 'Contact'].map((menu) => (
              <Link
                key={menu}
                href={menu === 'Home' ? '/' : `/${menu.toLowerCase()}`}
                className="text-gray-900 hover:text-yellow-500 px-3 py-2 text-sm font-medium"
              >
                {menu}
              </Link>
            ))}
          </div>

          {/* Icons for Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            {[FaSearch, FaHeart, FaUser].map((Icon, index) => (
              <button
                key={index}
                className="p-1 rounded-full text-black hover:text-gray-500 focus:outline-none"
              >
                <Icon className="h-6 w-6" />
              </button>
            ))}
            {/* Cart Link */}
            <Link href="/cart">
              <button
                className="p-1 rounded-full text-black hover:text-gray-500 focus:outline-none"
              >
                <FaShoppingCart className="h-6 w-6" />
              </button>
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 p-2 rounded-md focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-2 px-2 pb-3 pt-2">
              {['Home', 'Shop', 'Blog', 'Contact'].map((menu) => (
                <Link
                  key={menu}
                  href={menu === 'Home' ? '/' : `/${menu.toLowerCase()}`}
                  className="block text-gray-900 hover:text-yellow-500 px-3 py-2 text-base font-medium"
                >
                  {menu}
                </Link>
              ))}
              {/* Mobile Cart Link */}
              <Link href="/cart">
                <button className="block text-gray-900 hover:text-yellow-500 px-3 py-2 text-base font-medium">
                  Cart
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
