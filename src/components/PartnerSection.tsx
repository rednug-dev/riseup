"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const partners = [
  { href: '/', src: '/rd-right.png', alt: 'RednUG Dev' },
  { href: '/', src: '/krimo-right.png', alt: 'Kriminalomsorgen' },
  { href: '/', src: '/ok-right.png', alt: 'Oslo Kommune' },
];

const PartnersSection: React.FC = () => (
  <section className="py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-20 text-center">
        <span className="text-indigo-600 font-medium block mb-4">
          VÅRE SAMARBEIDSPARTNERE
        </span>
        <h1 className="text-4xl font-bold text-gray-900">
          Vi samarbeider med de beste
        </h1>
      </div>
      <div className="flex flex-wrap justify-center content-start gap-3">
        {partners.map(({ href, src, alt }, idx) => (
          <MotionLink
            key={idx}
            href={href}
            className="flex justify-center items-center border border-gray-200 shadow-sm w-48 h-32 rounded-2xl bg-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <Image
              src={src}
              alt={alt}
              width={128}
              height={64}
              className="object-contain"
              priority={true}
            />
          </MotionLink>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
