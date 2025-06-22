// import Image from "next/image";
// import Link from "next/link";

import FeaturedCase from "@/components/HomePage/FeaturedCase";
import FinalCTA from "@/components/HomePage/FinalCTA";
import HeroSection from "@/components/HomePage/HeroSection";
import PackagesPreview from "@/components/HomePage/PackagesReview";
import WhatWeDo from "@/components/HomePage/WhatWeDo";
import WhyCoast from "@/components/HomePage/WhyCoast";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[--background] text-[--foreground]">
      <HeroSection />
      <WhatWeDo />
      <PackagesPreview />
      <WhyCoast />
      <FeaturedCase />
      <FinalCTA />
    </main>
  );
}
