export default function WhyWeAreDifferent() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-extrabold uppercase text-gray-900 mb-8">
          Why We’re Different
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Coast System isn’t just a corporate consultant — we’re a strategic
          partner in protecting your vision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-b border-gray-300 divide-y md:divide-y-0 md:divide-x divide-gray-300">
          <div className="p-6 text-left">
            <h3 className="text-xl font-bold text-primary mb-3">
              Coast System
            </h3>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Founder-first governance clauses</li>
              <li>Custom Articles of Association</li>
              <li>Internal governance playbooks</li>
              <li>Legal-tech tools & automation</li>
              <li>Confidentiality-first documentation systems</li>
            </ul>
          </div>
          <div className="p-6 text-left">
            <h3 className="text-xl font-bold text-gray-700 mb-3">
              Traditional Consultant
            </h3>
            <ul className="space-y-3 text-gray-500 list-disc list-inside">
              <li>Generic templates and filings</li>
              <li>No founder-protection clauses</li>
              <li>Limited internal structuring support</li>
              <li>Manual contract workflows</li>
              <li>No strategic IP integration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
