"use client";

import React, { useState } from 'react';
import { Menu, X, Home, Info, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-transparent w-full">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/">
            <img
              src="/riseup-logo.png"
              alt="RiseUp logo"
              className="h-10 w-auto"
            />
          </a>
        </div>

        {/* Navigation links centered */}
        <div className="hidden md:flex flex-1 justify-center space-x-12 md:space-x-20 lg:space-x-30 xl:space-x-40 2xl:space-x-50">
          <a href="/" className="flex items-center text-black hover:text-gray-700 space-x-1">
            <Home className="h-5 w-5" />
            <span>Hjem</span>
          </a>
          <a href="/om-oss" className="flex items-center text-black hover:text-gray-700 space-x-1">
            <Info className="h-5 w-5" />
            <span>Om oss</span>
          </a>
          <a href="/prosjekter" className="flex items-center text-black hover:text-gray-700 space-x-1">
            <Phone className="h-5 w-5" />
            <span>Prosjekter</span>
          </a>
        </div>

        {/* CTA Button on right */}
        <div className="hidden md:flex flex-shrink-0">
          <Button>
            Kontakt oss
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-black focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="md:hidden bg-transparent">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="/" className="flex items-center text-black hover:text-gray-700 space-x-1">
              <Home className="h-5 w-5" />
              <span>Hjem</span>
            </a>
            <a href="/om-oss" className="flex items-center text-black hover:text-gray-700 space-x-1">
              <Info className="h-5 w-5" />
              <span>Om oss</span>
            </a>
            <a href="/prosjekter" className="flex items-center text-black hover:text-gray-700 space-x-1">
              <Phone className="h-5 w-5" />
              <span>Prosjekter</span>
            </a>
            <Button className="w-full">
              Kontakt oss
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
