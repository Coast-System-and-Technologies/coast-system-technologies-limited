import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-[--primary-accent] text-white py-20 px-6 md:px-12 lg:px-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-extrabold uppercase text-blue-400 mb-8">
          Ready to Build Your Legacy?
        </h2>
        <p className="text-lg md:text-xl mb-10 text-white/90">
          Let’s help you protect your ownership, structure your business for
          growth, and document your vision with precision.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/start-project"
            className="bg-white text-[#002D5C] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 hover:scale-105"
          >
            Start a Project
          </Link>
          <Link
            href="/trademark"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 hover:scale-105"
          >
            Explore Trademark Filing
          </Link>
          <Link
            href="/packages"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-200 hover:scale-105"
          >
            See Packages
          </Link>
        </div>
      </div>
    </section>
  );
}
