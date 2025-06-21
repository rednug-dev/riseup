"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import PartnerSection from "@/components/PartnerSection"
import ContactSection from "@/components/Contact";


export default function Page() {
  return (
    <>
      <Navbar />
      <PartnerSection />
      <ContactSection />
    </>
  );
}
