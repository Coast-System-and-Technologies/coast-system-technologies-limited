import Link from "next/link";
import { SITE } from "@/content/site";
import { NAV, type NavLink } from "@/content/nav";
import { Separator } from "@/components/ui/separator";

function FooterSection({
  title,
  links,
}: {
  title: string;
  links: NavLink[];
}) {
  return (
    <div>
      <div className="text-sm font-medium text-foreground">{title}</div>
      <div className="mt-3 space-y-2 text-sm">
        {links.map((x) => (
          <Link
            key={x.href}
            href={x.href}
            className="block text-muted-foreground hover:text-[color:var(--primary)] transition"
          >
            {x.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  const serviceLinks = NAV.dropdowns.services as unknown as NavLink[];
  const companyLinks = NAV.dropdowns.companies as unknown as NavLink[];
  const insightLinks = NAV.dropdowns.insights as unknown as NavLink[];

  return (
    <footer className="border-t border-border bg-background">
      <div className="cstl-container py-14">
        {/* Top seal divider */}
        <div className="h-px w-full cstl-seal-line opacity-70" />

        <div className="mt-10 grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <div className="font-heading text-lg text-[color:var(--primary)]">
              {SITE.name}
            </div>
            <div className="text-sm text-muted-foreground">
              {SITE.positioningLine}
            </div>
            <div className="text-xs text-muted-foreground tracking-wider">
              {SITE.signature}
            </div>

            <div className="pt-3 text-sm space-y-1">
              <a
                className="block text-muted-foreground hover:text-[color:var(--primary)] transition"
                href={`mailto:${SITE.contact.email}`}
              >
                {SITE.contact.email}
              </a>
              <a
                className="block text-muted-foreground hover:text-[color:var(--primary)] transition"
                href={`tel:${SITE.contact.phoneTel}`}
              >
                {SITE.contact.phoneDisplay}
              </a>

              <div className="pt-2 text-xs text-muted-foreground">
                RC: {SITE.trust.rc}
              </div>
            </div>

            <div className="pt-2">
              <a
                href={SITE.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted-foreground hover:text-[color:var(--primary)] transition"
              >
                Facebook
              </a>
            </div>
          </div>

          <FooterSection title="Services" links={serviceLinks} />
          <FooterSection title="Our Companies" links={companyLinks} />
          <FooterSection title="Insights" links={insightLinks} />
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} {SITE.shortName}. All rights reserved.
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-[color:var(--primary)] transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[color:var(--primary)] transition">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-[color:var(--primary)] transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
