"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="w-full bg-blue-800 text-white pt-56 pb-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <motion.h1
          className="text-4xl md:text-5xl font-serif font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Guardians of Vision. Partners in Legacy.
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          At Coast System and Technologies Ltd, we don’t just offer services —
          we build the legal and strategic infrastructure behind generational
          ventures.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary hover:bg-blue-700 hover:shadow-md hover:shadow-gray-800 transition-all duration-300 hover:scale-105"
          >
            Start a Project
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-[#002D5C] bg-white hover:bg-gray-100 hover:shadow-md hover:shadow-gray-800 transition-all duration-300 hover:scale-105"
          >
            Book a Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
