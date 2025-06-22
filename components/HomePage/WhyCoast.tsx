"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

const differentiators = [
  "Founder-First Control Structures",
  "Legal-Tech Document Automation",
  "Smart Holding Company Design",
  "Compliance-First Approach",
  "Strategic Growth Framework",
  "IP Protection Strategy",
];

const WhyCoast = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold uppercase text-gray-900 mb-6">
              Why Our Articles of Association Are Different
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We understand that your company's foundation is more than just
              legal documents. It's about protecting your vision, enabling
              growth, and ensuring founder control while maintaining compliance.
            </p>
            <div className="space-y-4">
              {differentiators.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="space-y-6">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Founder Control
                </h3>
                <p className="text-gray-600">
                  Maintain strategic control while enabling growth through smart
                  governance structures.
                </p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Legal-Tech Integration
                </h3>
                <p className="text-gray-600">
                  Automated document generation and management for efficient
                  compliance.
                </p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Holding Structure
                </h3>
                <p className="text-gray-600">
                  Optimized multi-entity structures for scalable business
                  operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCoast;
