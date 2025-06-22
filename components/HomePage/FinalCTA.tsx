"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-[#002D5C] text-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-extrabold uppercase mb-6">
            Ready to Build?
          </h2>
          <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto">
            Let's bring structure to your startup, shield your vision, and
            unlock growth with legal-tech precision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Link
              href="/start-project"
              className="bg-white text-[#002D5C] px-6 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 hover:scale-105"
            >
              Start a Project
            </Link>
            <Link
              href="/trademark"
              className="bg-blue-600 text-white px-6 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 hover:scale-105"
            >
              File Trademark
            </Link>
            <Link
              href="/packages"
              className="bg-transparent border-2 border-white text-white px-6 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors duration-200 hover:scale-105"
            >
              See Packages
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="flex items-center justify-center space-x-3">
              <Image
                src="/icons/email.png"
                alt="opened email icon"
                width={80}
                height={80}
                className="w-6 h-6"
              />
              <Link
                href="mailto:executive.office@coastsystemtechnologies.com.ng"
                className="hover:text-blue-300 transition-colors duration-200"
              >
                executive.office@coastsystemtechnologies.com.ng
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Image
                src="/icons/phone.png"
                alt="phone icon"
                width={80}
                height={80}
                className="w-6 h-6"
              />
              <Link
                href="tel:+2349136860226"
                className="hover:text-blue-300 transition-colors duration-200"
              >
                +234 913 686 0226
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Image
                src="/icons/whatsapp.png"
                alt="whatsapp icon"
                width={80}
                height={80}
                className="w-6 h-6"
              />
              <Link
                href="https://wa.me/2349136860226"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors duration-200"
              >
                WhatsApp Chat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
