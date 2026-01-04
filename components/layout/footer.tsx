import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import { SITE } from "@/content/site";
import { NAV, type NavLink } from "@/content/nav";

function FooterSection({
  title,
  links,
}: {
  title: string;
  links: NavLink[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-5">
        {title}
      </h3>
      <nav className="space-y-3">
        {links.map((x) => (
          <Link
            key={x.href}
            href={x.href}
            className="block text-sm text-white/70 hover:text-white transition-colors duration-200"
          >
            {x.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default function Footer() {
  const serviceLinks = NAV.dropdowns.services as unknown as NavLink[];
  const companyLinks = NAV.dropdowns.companies as unknown as NavLink[];
  const insightLinks = NAV.dropdowns.insights as unknown as NavLink[];

  return (
    <footer className="bg-[color:var(--footer-bg)] text-white">
      <div className="cstl-container">
        {/* Top section: Brand and Navigation */}
        <div className="py-12 sm:py-14 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-2 space-y-6">
              <Image
                src="/assets/brand/logos/cstl-logo-dark.png"
                alt={SITE.name}
                width={200}
                height={60}
                className="h-auto w-auto"
                priority
              />
              <p className="font-heading text-xl lg:text-2xl text-white leading-relaxed max-w-md">
                {SITE.positioningLine}
              </p>
              <p className="text-sm text-white/60 tracking-wider">
                {SITE.signature}
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <FooterSection title="Services" links={serviceLinks} />
            </div>

            <div>
              <FooterSection title="Companies" links={companyLinks} />
            </div>

            <div>
              <FooterSection title="Insights" links={insightLinks} />
            </div>
          </div>
        </div>

        {/* Middle section: Contact and Social */}
        <div className="border-t border-white/10 py-8 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-5">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors duration-200 group"
                >
                  <Mail className="w-5 h-5 text-[color:var(--accent)] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="break-all">{SITE.contact.email}</span>
                </a>
                <a
                  href={`tel:${SITE.contact.phoneTel}`}
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors duration-200 group"
                >
                  <Phone className="w-5 h-5 text-[color:var(--accent)] flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{SITE.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-5">
                Follow Us
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href={SITE.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 group"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section: Copyright and Legal */}
        <div className="border-t border-white/10 py-6 lg:py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-white/60">
            <div>
              © {new Date().getFullYear()} {SITE.name}. All Rights Reserved.
            </div>
            <nav className="flex flex-wrap items-center gap-6">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors duration-200"
              >
                Terms & Condition
              </Link>
              <Link
                href="/cookies"
                className="hover:text-white transition-colors duration-200"
              >
                Cookies
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
