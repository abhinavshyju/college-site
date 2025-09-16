"use client";

import type React from "react";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: "", label: "Home" },
    { id: "about", label: "About Institution" },
    { id: "administration", label: "Administration" },
    { id: "academics", label: "Academics" },
    { id: "admissions", label: "Admissions & Fee" },
    // { id: "student-life", label: "Student Life" },
    // { id: "alumni", label: "Alumni" },
    { id: "information", label: "Information" },
    { id: "gallery", label: "Picture Gallery" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-lg  z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200 py-3">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91-495-2244567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@casthamarassery.ac.in</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-xs font-medium">
              <span className="text-blue-600">IHRD Kerala</span>
              <span className="text-gray-400">|</span>
              <span className="text-blue-600">Calicut University</span>
            </div>
          </div>
        </div>

        <div className="py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/assets/images/logo.png"
                alt="College of Applied Science, Thamassery Logo"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />
              <div className="flex-1">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 leading-tight">
                  College of Applied Science, Thamassery
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground mt-1">
                  Affiliated to the Calicut University
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          <nav className="hidden lg:flex   p-2">
            <div className="flex flex-wrap gap-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => (window.location.href = `/${item.id}`)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    activeSection === item.id ? "text-blue-600" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-2 max-h-96 overflow-y-auto">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => (window.location.href = `/${item.id}`)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
