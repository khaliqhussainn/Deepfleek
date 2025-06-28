"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Services items for dropdown
  const servicesItems = [
    { name: "AI Development", href: "/services/ai-development" },
    { name: "Machine Learning", href: "/services/machine-learning" },
    { name: "Data Analytics", href: "/services/data-analytics" },
    { name: "Cloud Solutions", href: "/services/cloud-solutions" },
    { name: "Software Development", href: "/services/software-development" },
    { name: "Cybersecurity", href: "/services/cybersecurity" },
    {
      name: "Digital Transformation",
      href: "/services/digital-transformation",
    },
    { name: "IT Consulting", href: "/services/it-consulting" },
    { name: "System Integration", href: "/services/system-integration" },
    { name: "Technical Support", href: "/services/technical-support" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when clicking on a link
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileServicesOpen(false);
  };

  // Handle services dropdown toggle with prevent default
  const handleServicesDropdownToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  // Toggle mobile services
  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-blue-500/20"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
          >
            DeepFleek
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-cyan-400 transition-all duration-300 font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-cyan-400 transition-all duration-300 font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/product"
              className="text-white hover:text-cyan-400 transition-all duration-300 font-medium relative group"
            >
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/research"
              className="text-white hover:text-cyan-400 transition-all duration-300 font-medium relative group"
            >
              Research
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <Link
                href="/service"
                className="text-white hover:text-cyan-400 transition-all duration-300 font-medium relative group flex items-center space-x-1"
              >
                <span>Services</span>
                <button
                  onClick={handleServicesDropdownToggle}
                  className="ml-1 p-1 hover:bg-blue-800/30 rounded transition-all duration-200"
                  aria-label="Toggle services dropdown"
                >
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isServicesDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-cyan-400 transition-all duration-300 p-2 rounded-lg hover:bg-blue-800/30"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6 transform rotate-180 transition-transform duration-300"
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
              <svg
                className="w-6 h-6 transition-transform duration-300"
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

        {/* Desktop Services Dropdown - Full Width Horizontal */}
        <div
          className={`hidden md:block absolute left-0 right-0 top-full mt-0 transition-all duration-300 transform origin-top ${
            isServicesDropdownOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="bg-gradient-to-br from-slate-800/95 to-blue-900/95 backdrop-blur-xl shadow-2xl border-b border-blue-500/20">
            <div className="container mx-auto px-6 py-6">
              <div className="grid grid-cols-5 gap-4">
                {servicesItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block px-4 py-4 text-white hover:text-cyan-400 hover:bg-blue-800/40 rounded-lg transition-all duration-200 group text-center"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    <div className="flex flex-row items-center space-x-2">
                      <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:text-blue-500 transition-all duration-200" />
                      <span className="font-medium text-sm">{item.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 mt-6"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-gradient-to-br from-slate-800/95 to-blue-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-blue-500/20 p-6 space-y-4">
            <Link
              href="/"
              className="block text-white hover:text-cyan-400 transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-blue-800/40 transform hover:translate-x-1"
              onClick={handleMobileLinkClick}
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                <span>Home</span>
              </div>
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-cyan-400 transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-blue-800/40 transform hover:translate-x-1"
              onClick={handleMobileLinkClick}
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                <span>About</span>
              </div>
            </Link>
            <Link
              href="/product"
              className="block text-white hover:text-cyan-400 transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-blue-800/40 transform hover:translate-x-1"
              onClick={handleMobileLinkClick}
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                <span>Products</span>
              </div>
            </Link>
            <Link
              href="/research"
              className="block text-white hover:text-cyan-400 transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-blue-800/40 transform hover:translate-x-1"
              onClick={handleMobileLinkClick}
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                <span>Research</span>
              </div>
            </Link>

            {/* Mobile Services - Direct Link with Dropdown */}
            <div>
              <Link
                href="/service"
                className="w-full text-left text-white hover:text-cyan-400 transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-blue-800/40 flex items-center justify-between group"
                onClick={handleMobileLinkClick}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                  <span>Services</span>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleMobileServices();
                  }}
                  className="p-3 hover:bg-blue-800/30 rounded transition-all duration-200"
                  aria-label="Toggle services dropdown "
                >
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  {/* <span className="">
                    services submenu
                  </span> */}
                </button>
              </Link>

              {/* Mobile Services Submenu - Scrollable */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isMobileServicesOpen
                    ? "max-h-60 opacity-100 mt-2"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <div className="ml-4 border-l-2 border-blue-500/30 pl-4 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500/50 scrollbar-track-transparent">
                  <div className="space-y-2 pr-2">
                    {servicesItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block text-gray-300 hover:text-cyan-400 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-blue-800/30 text-sm transform hover:translate-x-1"
                        onClick={handleMobileLinkClick}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="block text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-xl font-medium hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
