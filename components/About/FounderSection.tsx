import Image from "next/image";
import Link from "next/link";

export default function FounderSection() {
  return (
    <section className="bg-blue-800 text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Founder Image */}
        <div className="w-full h-[360px] relative rounded-2xl overflow-hidden shadow-lg border border-[--secondary]">
          <Image
            src="/images/founder.jpg" // Replace with actual image path
            alt="Toluwalope Coast - Founder"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
            priority
          />
        </div>

        {/* Founder Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-extrabold uppercase text-blue-100 mb-12">
            Meet the Founder
          </h2>
          <p className="text-lg text-gray-100 mb-6 leading-relaxed">
            Toluwalope Coast is a legal innovation strategist, systems thinker,
            and founder of multiple ventures across tech, media, and finance.
            His work blends spiritual alignment, business rigor, and visionary
            foresight — making Coast System the trusted shield behind some of
            the most promising ventures in Nigeria and beyond.
          </p>
          <blockquote className="italic border-l-4 pl-4">
            “The right structure doesn’t slow you down — it sets you free.”
          </blockquote>
          <div className="mt-12">
            <Link
              href="https://www.linkedin.com/in/toluwalopecoast" // Replace with actual link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 bg-white hover:shadow-md hover:shadow-gray-400 p-4 text-sm"
            >
              View full profile on LinkedIn →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
