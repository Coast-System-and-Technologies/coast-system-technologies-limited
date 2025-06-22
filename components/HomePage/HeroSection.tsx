"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center bg-gradient-to-br from-[#002d5d] to-[#000617] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/assets/global-business-network.avif"
          alt="Background Pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 relative z-10 flex flex-col items-center justify-center text-center">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl pt-16 lg:pt-20 font-serif text-white font-bold leading-tight mb-3 animate-fade-in"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Guardians of Vision.
          <br />
          Partners in Legacy.
        </motion.h1>

        <h2 className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl animate-fade-in-delay">
          We help founders and ventures structure smarter — from legal
          frameworks to IP protections, and from governance blueprints to
          strategic growth.
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2 mt-4">
          <Link
            href="/start-project"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary hover:bg-blue-700 hover:shadow-md hover:shadow-gray-800 transition-all duration-300 hover:scale-105"
          >
            Start a Project
          </Link>
          <Link
            href="/packages"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-[#002D5C] bg-white hover:bg-gray-100 hover:shadow-md hover:shadow-gray-800 transition-all duration-300 hover:scale-105"
          >
            Explore Packages
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
