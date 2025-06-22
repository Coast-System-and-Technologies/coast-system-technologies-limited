import {
  ShieldCheck,
  BadgeCheck,
  FileText,
  LockKeyhole,
  UserCheck,
} from "lucide-react";

const badges = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-[--primary-accent]" />,
    label: "CAC Registered Consultant",
    detail: "RC: 8449588",
  },
  {
    icon: <LockKeyhole className="h-6 w-6 text-[--primary-accent]" />,
    label: "NDPR-Aligned",
    detail: "Compliant with Nigeria Data Protection Regulation",
  },
  {
    icon: <BadgeCheck className="h-6 w-6 text-[--primary-accent]" />,
    label: "FIRS Tax Compliant",
    detail: "All regulatory filings up to date",
  },
  {
    icon: <FileText className="h-6 w-6 text-[--primary-accent]" />,
    label: "Trademark Filing Agent",
    detail: "In progress with NIPO",
  },
  {
    icon: <UserCheck className="h-6 w-6 text-[--primary-accent]" />,
    label: "Founder-Embedded Structures",
    detail: "Custom governance + protection frameworks",
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-extrabold uppercase text-gray-900 mb-8 text-center">
          Regulatory Credentials & Trust Badges
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-start text-center">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="bg-white border border-blue-500 text-primary p-4 rounded-full shadow-md group-hover:shadow-lg transition">
                {badge.icon}
              </div>
              <p className="mt-3 font-semibold text-sm text-primary">
                {badge.label}
              </p>
              <p className="text-xs text-gray-600 mt-1">{badge.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
