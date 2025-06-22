"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description:
      "Coast System officially registered as a Corporate Consultant (RC: 8449588).",
  },
  {
    year: "2021",
    title: "Founder-Focused Articles",
    description:
      "Developed custom governance frameworks prioritizing founder control.",
  },
  {
    year: "2022",
    title: "Trademark Agent (NIPO)",
    description:
      "Began processing filings for Nigerian and international startups.",
  },
  {
    year: "2023",
    title: "20+ Ventures Supported",
    description:
      "Delivered legal-tech & structuring support to a wide range of clients.",
  },
  {
    year: "2024",
    title: "Legal-Tech Integrations",
    description:
      "Launched internal documentation tools and IP automation systems.",
  },
];

export default function MilestonesBanner() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-extrabold uppercase text-gray-900 mb-4">
            From Vision to Structure — Our Evolution
          </h2>
          <div className="hidden md:flex space-x-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-white shadow hover:shadow-md"
            >
              <ChevronLeft className="h-5 w-5 text-[--primary-accent]" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-white shadow hover:shadow-md"
            >
              <ChevronRight className="h-5 w-5 text-[--primary-accent]" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
        >
          {milestones.map((item, index) => (
            <div
              key={index}
              className="min-w-[260px] max-w-sm snap-start shrink-0 bg-white border border-[--gray-warm] rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-primary font-bold text-xl mb-2">
                {item.year}
              </h3>
              <h4 className="font-semibold text-lg text-gray-900 mb-1">
                {item.title}
              </h4>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
