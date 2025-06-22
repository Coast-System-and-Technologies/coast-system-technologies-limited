"use client";

import { Shield, Scale, Building2, Users } from "lucide-react";
import React from "react";

const services = [
  {
    icon: <Shield size={70} className="w-12 h-12 text-blue-600" />,
    title: "Founder Governance",
    description:
      "Custom Articles of Association, Founder's Veto, Equity Controls, and Dual-Class Voting structures.",
  },
  {
    icon: <Scale size={70} className="w-12 h-12 text-blue-600" />,
    title: "Legal & IP Structures",
    description:
      "Trademark Registration, NDAs, Contracts, Shareholder Agreements, and IP Protection strategies.",
  },
  {
    icon: <Building2 size={70} className="w-12 h-12 text-blue-600" />,
    title: "Venture Incorporation",
    description:
      "Incorporation & Holding Structures, SOPs, Risk Playbooks, and Investment-Ready Documentation.",
  },
  {
    icon: <Users size={70} className="w-12 h-12 text-blue-600" />,
    title: "Outsourcing & Talent Advisory",
    description:
      "Strategic hiring, operational outsourcing, and contract-based workforce management solutions.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-extrabold uppercase text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for founders and ventures, from legal
            frameworks to strategic growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white flex items-center gap-6 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <div>
                <h4 className="text-xl font-extrabold text-gray-900 mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
