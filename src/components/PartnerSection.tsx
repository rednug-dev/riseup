"use client";

import React from 'react';

const partners = [
  { src: '/rd-right.png', alt: 'RednUG Dev' },
  { src: '/krimo-right.png', alt: 'Kriminalomsorgen' },
  { src: '/ok-right.png', alt: 'Oslo Kommune' },
];

const PartnersSection: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-20 text-center">
        <span className="text-indigo-600 font-medium block mb-4">VÅRE SAMARBEIDSPARTNERE</span>
        <h1 className="text-4xl font-bold text-gray-900">Vi samarbeider med de beste</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-[12px]">
        {partners.map(({ src, alt }, idx) => (
          <a
            key={idx}
            href="#"
            className="flex justify-center items-center border border-gray-200 shadow-sm w-48 h-32 rounded-2xl"
          >
            <img
              src={src}
              alt={alt}
              className="h-16 w-32 object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
