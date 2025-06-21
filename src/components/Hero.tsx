// components/Hero.tsx
'use client'

import React from 'react'
import Image from 'next/image'

const HeroSection: React.FC = () => (
  <section className="h-screen w-full bg-gray-100 flex items-center justify-between px-8">
    {/* Venstre side – heading */}
    <h1 className="text-7xl font-extrabold text-gray-900">RiseUp</h1>

    {/* Høyre side – bildet */}
    <div className="max-w-[45vw] ml-8 rounded-3xl overflow-hidden">
      <Image
        src="/heroex.png"     // legg filen i /public
        alt="Hero illustration"
        width={1200}
        height={800}
        className="object-cover w-full h-auto"
        priority
      />
    </div>
  </section>
)

export default HeroSection
