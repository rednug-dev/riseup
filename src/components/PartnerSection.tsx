"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const partners = [
  { href: '/', src: '/rd-right.png', alt: 'RednUG Dev' },
  { href: '/', src: '/krimo-right.png', alt: 'Kriminalomsorgen' },
  { href: '/', src: '/ok-right.png', alt: 'Oslo Kommune' },
];

const PartnersSection: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-20 text-center">
        <span className="text-indigo-600 font-medium block mb-4">VÅRE SAMARBEIDSPARTNERE</span>
        <h1 className="text-4xl font-bold text-gray-900">Vi samarbeider med de beste</h1>
      </div>
      <div className="flex flex-wrap justify-center content-start gap-[12px]">
        {partners.map(({ href, src, alt }, idx) => (
          <Link
            key={idx}
            href={href}
            className="flex justify-center items-center border border-gray-200 shadow-sm w-48 h-32 rounded-2xl"
          >
            <Image
              src={src}
              alt={alt}
              width={128}
              height={64}
              className="object-contain"
            />
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
