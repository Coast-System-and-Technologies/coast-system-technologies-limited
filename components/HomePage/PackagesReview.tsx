"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const packages = [
  {
    title: "Startup Shield Package",
    description:
      "Comprehensive legal and governance framework for early-stage startups.",
    features: [
      "Custom Articles of Association",
      "Founder Rights Protection",
      "Basic IP Strategy",
      "Initial Compliance Setup",
    ],
    price: "From ₦250,000",
    cta: "Get Started",
  },
  {
    title: "IP & Trademark Launch Kit",
    description:
      "Complete intellectual property protection and brand security solution.",
    features: [
      "Trademark Registration",
      "Brand Protection Strategy",
      "IP Portfolio Management",
      "Licensing Framework",
    ],
    price: "From ₦180,000",
    cta: "Secure Your IP",
  },
  {
    title: "Strategic Retainer Plan",
    description: "Ongoing legal and strategic support for growing ventures.",
    features: [
      "Monthly Legal Advisory",
      "Contract Review & Drafting",
      "Compliance Monitoring",
      "Strategic Growth Support",
    ],
    price: "From ₦150,000/month",
    cta: "Learn More",
  },
];

const PackagesPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-extrabold uppercase text-gray-900 mb-4">
            Our Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored solutions for every stage of your venture{"'"}s growth
            journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {pkg.title}
              </h3>
              <p className="text-gray-600 mb-6">{pkg.description}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="text-blue-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-xl font-bold text-gray-900 mb-6">
                {pkg.price}
              </div>
              <Link
                href="/packages"
                className="inline-flex items-center justify-center w-full px-6 py-4 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 hover:scale-105"
              >
                {pkg.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/packages"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            View All Packages
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PackagesPreview;
