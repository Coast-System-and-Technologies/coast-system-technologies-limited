"use client";

import React from "react";
import Image from "next/image";

const FeaturedCase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold uppercase text-gray-900 mb-4">
              Featured Success Story
            </h2>
            <p className="text-lg text-gray-600">
              How we helped a visionary founder build a resilient company
              structure
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <div className="relative w-48 h-48 mx-auto">
                  <Image
                    src="/assets/founder-quote.jpg"
                    alt="Founder Quote"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <blockquote className="text-xl md:text-2xl font-serif italic text-gray-900 mb-6">
                  {'"'}Legacy isn{"'"}t just what we leave behind — it{"'"}s
                  what we build with intention. At Coast System, we help
                  founders own the future they envision.{'"'}
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">
                      Toluwalope Coast
                    </p>
                    <p className="text-gray-600">Founder & MD</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">RC: 8449588</p>
                    <p className="text-sm text-gray-500">
                      Registered Consultant
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCase;
