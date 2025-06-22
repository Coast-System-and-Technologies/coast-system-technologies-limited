import { ShieldCheck, Scale, Users, Lock } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity with Precision",
    description:
      "We operate with honesty, backed by accuracy, delivering trustable systems for growth.",
  },
  {
    icon: Scale,
    title: "Structure that Scales",
    description:
      "No shortcuts — every governance and IP system we implement is built to evolve with you.",
  },
  {
    icon: Users,
    title: "Founder-First Approach",
    description:
      "Our work prioritizes long-term founder influence, not just operational efficiency.",
  },
  {
    icon: Lock,
    title: "Confidentiality & Trust",
    description:
      "Your documents, data, and legacy are handled with absolute discretion and care.",
  },
];

export default function MissionValues() {
  return (
    <section className="bg-white py-20 lg:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-extrabold uppercase text-gray-900 mb-4">
          Our Mission & Core Values
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          We exist to empower visionary businesses with the legal, governance,
          and strategic foundations they need to grow, protect, and last.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-[--gray-warm] text-left bg-gray-50"
            >
              <val.icon size={45} className="text-primary mb-4" />
              <h3 className="font-semibold text-gray-900 text-xl mb-2">
                {val.title}
              </h3>
              <p className="text-gray-700 text-sm">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
