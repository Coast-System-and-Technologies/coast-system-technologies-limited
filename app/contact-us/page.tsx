"use client";

import ContactForm from "@/components/Contact/ContactForm";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="w-full bg-blue-800 text-white pt-56 pb-20 px-6 md:px-12 lg:px-20 h-[80vh]">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <motion.h1
            className="text-4xl md:text-5xl font-serif font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let’s build something lasting together.
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Whether you’re a founder, partner, or visionary team—we’re ready to
            support your growth, governance, and innovation journey.
          </motion.p>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Disclaimer */}
      <footer className="bg-gray-100 text-sm text-gray-600 py-6 px-6 md:px-20 text-center">
        This communication channel is protected. All data submitted is
        confidential and governed by our{" "}
        <Link href="/terms" className="text-[--primary] underline">
          Terms of Use
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="text-[--primary] underline">
          Privacy Policy
        </Link>
        .
      </footer>
    </main>
  );
}
