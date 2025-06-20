"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Home, Info, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-transparent w-full">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="inline-block">
            <Image
              src="/riseup-logo.png"
              alt="RiseUp logo"
              width={160}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Navigation links centered */}
        <div className="hidden md:flex flex-1 justify-center space-x-12 md:space-x-20 lg:space-x-30 xl:space-x-40 2xl:space-x-50">
          <Link href="/" className="flex items-center text-black hover:text-gray-700 space-x-1">
            <Home className="h-5 w-5" />
            <span>Hjem</span>
          </Link>
          <Link href="/om-oss" className="flex items-center text-black hover:text-gray-700 space-x-1">
            <Info className="h-5 w-5" />
            <span>Om oss</span>
          </Link>
          <Link href="/prosjekter" className="flex items-center text-black hover:text-gray-700 space-x-1">
            <Phone className="h-5 w-5" />
            <span>Prosjekter</span>
          </Link>
        </div>

        {/* CTA Button on right */}
        <div className="hidden md:flex flex-shrink-0">
          <Button asChild>
            <Link href="/kontakt-oss">Kontakt oss</Link>
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
            <Link href="/" className="flex items-center text-black hover:text-gray-700 space-x-1">
              <Home className="h-5 w-5" />
              <span>Hjem</span>
            </Link>
            <Link href="/om-oss" className="flex items-center text-black hover:text-gray-700 space-x-1">
              <Info className="h-5 w-5" />
              <span>Om oss</span>
            </Link>
            <Link href="/prosjekter" className="flex items-center text-black hover:text-gray-700 space-x-1">
              <Phone className="h-5 w-5" />
              <span>Prosjekter</span>
            </Link>
            <Button asChild className="w-full">
              <Link href="/kontakt-oss">Kontakt oss</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
