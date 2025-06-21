"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send form to your API endpoint
    console.log('Submitting', form);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-24">

          {/* Form */}
          <div className="flex items-center lg:mb-0 mb-10">
            <div className="w-full">
              <h4 className="text-indigo-600 text-base font-medium leading-6 mb-4 text-center lg:text-left">
                Kontakt oss
              </h4>
              <h2 className="text-gray-900 font-manrope text-4xl font-semibold leading-10 mb-9 text-center lg:text-left">
                Ta kontakt med oss
              </h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Navn"
                  className="w-full h-14 bg-white shadow-sm text-gray-600 placeholder-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4"
                />
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="E-post"
                  className="w-full h-14 bg-white shadow-sm text-gray-600 placeholder-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4"
                />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Telefon"
                  className="w-full h-14 bg-white shadow-sm text-gray-600 placeholder-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Melding"
                  className="w-full h-48 bg-white shadow-sm resize-none text-gray-600 placeholder-gray-400 text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none px-4 py-4"
                />
                <Button type="submit" className="w-full h-12 rounded-full">
                  Send
                </Button>
              </form>
            </div>
          </div>

          {/* Info Box */}
          <div className="lg:max-w-xl w-full h-[600px] flex items-center justify-center bg-cover bg-no-repeat"
               style={{ backgroundImage: `` }}>
            <div className="lg:w-96 w-auto h-auto bg-white shadow-xl lg:p-6 p-4">
              <Image src="/riseup-logo.png" alt="RiseUp logo" width={164} height={33} className="mb-6 mx-auto" priority />

              <div className="space-y-6 mb-6">
                <a href="tel:+4706011911" className="flex items-center">
                  <Phone className="h-6 w-6" />
                  <span className="ml-5 text-base font-normal leading-6">+47 123 45 678</span>
                </a>
                <a href="mailto:info@info.no" className="flex items-center">
                  <Mail className="h-6 w-6" />
                  <span className="ml-5 text-base font-normal leading-6">info@info.no</span>
                </a>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6" />
                  <span className="ml-5 text-base font-normal leading-6">Lørenveien 2, 0585 Oslo</span>
                </div>
              </div>

              <div className="flex items-center justify-center border-t border-gray-100 pt-6 space-x-6">
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
