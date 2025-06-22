"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-deep-blue-950/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/home"
            className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
          >
            DeepFleek
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-white hover:text-blue-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-blue-400 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-blue-400 transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-blue-400 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-blue-400 transition-colors p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              // Close icon (X)
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-64 opacity-100 mt-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-deep-blue-900/95 backdrop-blur-md rounded-lg shadow-lg p-4 space-y-3">
            <Link
              href="/"
              className="block text-white hover:text-blue-400 transition-colors font-medium py-2 px-4 rounded hover:bg-blue-800/30"
              onClick={handleMobileLinkClick}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-blue-400 transition-colors font-medium py-2 px-4 rounded hover:bg-blue-800/30"
              onClick={handleMobileLinkClick}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-white hover:text-blue-400 transition-colors font-medium py-2 px-4 rounded hover:bg-blue-800/30"
              onClick={handleMobileLinkClick}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-blue-400 transition-colors font-medium py-2 px-4 rounded hover:bg-blue-800/30"
              onClick={handleMobileLinkClick}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}