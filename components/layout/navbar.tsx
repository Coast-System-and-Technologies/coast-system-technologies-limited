"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight, X, ChevronDown } from "lucide-react";

import { SITE } from "@/content/site";
import { NAV, type NavLink } from "@/content/nav";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import ModeToggle from "@/components/theme/mode-toggle";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

function DropdownGrid({ items }: { items: NavLink[] }) {
  return (
    <div className="grid gap-3 p-6 md:w-[500px]">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group relative rounded-lg border border-border/50 bg-card p-5 transition-all duration-200 hover:border-[color:var(--accent)]/30 hover:bg-accent/5 hover:shadow-md"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 space-y-1.5">
              <div className="font-semibold text-foreground transition-colors group-hover:text-[color:var(--primary)]">
                {item.label}
              </div>
              {item.description ? (
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </div>
              ) : null}
            </div>
            <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--accent)]" />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile accordion state (only one open at a time)
  const [open, setOpen] = React.useState<
    "services" | "companies" | "insights" | "company" | null
  >(null);

  function toggle(key: typeof open) {
    setOpen((prev) => (prev === key ? null : key));
  }

  function MobileSection({
    k,
    title,
    items,
  }: {
    k: NonNullable<typeof open>;
    title: string;
    items: NavLink[];
  }) {
    const isOpen = open === k;

    return (
      <div className="border-b border-border/60 py-2">
        <button
          type="button"
          onClick={() => toggle(k)}
          className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-semibold text-foreground hover:bg-muted/40"
          aria-expanded={isOpen}
        >
          <span className="uppercase tracking-wide">{title}</span>
          <ChevronDown
            className={[
              "h-4 w-4 text-muted-foreground transition-transform",
              isOpen ? "rotate-180" : "rotate-0",
            ].join(" ")}
          />
        </button>

        <div
          className={[
            "grid transition-[grid-template-rows] duration-200 ease-out",
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          ].join(" ")}
        >
          <div className="overflow-hidden">
            <nav className="space-y-1 px-2 pb-3">
              {items.map((x) => (
                <SheetClose asChild key={x.href}>
                  <Link
                    href={x.href}
                    className={[
                      "flex items-start justify-between gap-3 rounded-xl px-3 py-3 text-sm transition-colors",
                      isActive(pathname, x.href)
                        ? "bg-muted/60 text-[color:var(--primary)] font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/30",
                    ].join(" ")}
                  >
                    <span>{x.label}</span>
                    <span className="text-xs text-muted-foreground">
                      {x.description ? "→" : ""}
                    </span>
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </div>
        </div>
      </div>
    );
  }

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-all duration-300",
        isScrolled
          ? "border-border/80 bg-background/95 backdrop-blur-md shadow-sm"
          : "border-border/50 bg-background/80 backdrop-blur-sm",
      ].join(" ")}
    >
      <div className="cstl-container">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <Image
              src="/LOGO.png"
              alt={SITE.shortName}
              width={180}
              height={60}
              className="h-10 w-auto lg:h-12"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {/* Services */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 bg-transparent px-4 text-sm font-medium hover:bg-muted/50 data-[state=open]:bg-muted/50 data-[state=open]:text-[color:var(--primary)]">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <DropdownGrid items={NAV.dropdowns.services as unknown as NavLink[]} />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Companies */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 bg-transparent px-4 text-sm font-medium hover:bg-muted/50 data-[state=open]:bg-muted/50 data-[state=open]:text-[color:var(--primary)]">
                    Companies
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <DropdownGrid items={NAV.dropdowns.companies as unknown as NavLink[]} />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Insights */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 bg-transparent px-4 text-sm font-medium hover:bg-muted/50 data-[state=open]:bg-muted/50 data-[state=open]:text-[color:var(--primary)]">
                    Insights
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <DropdownGrid items={NAV.dropdowns.insights as unknown as NavLink[]} />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Top-level links */}
                {NAV.primary.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={[
                            "h-9 rounded-md px-4 text-sm font-medium transition-all duration-200",
                            active
                              ? "bg-muted/50 text-[color:var(--primary)]"
                              : "text-foreground hover:bg-muted/50",
                          ].join(" ")}
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Theme + CTA */}
            <div className="ml-2 flex items-center gap-2">
              <ModeToggle />
              <Button
                asChild
                className="h-9 bg-[color:var(--primary)] text-white shadow-sm transition-all duration-200 hover:bg-[color:var(--primary)]/90 hover:shadow-md"
              >
                <Link href={NAV.ctas.start.href}>{NAV.ctas.start.label}</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <ModeToggle />

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[85vw] sm:w-[400px]">
                <div className="flex h-full flex-col">
                  {/* Mobile Header */}
                  <div className="mb-6 flex items-center justify-between">
                    <Image
                      src="/LOGO.png"
                      alt={SITE.shortName}
                      width={150}
                      height={50}
                      className="h-10 w-auto"
                    />
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="Close menu">
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </div>

                  <Separator className="mb-4" />

                  {/* Mobile Navigation (Accordion) */}
                  <div className="flex-1 overflow-y-auto">
                    <div className="space-y-2">
                      <MobileSection
                        k="services"
                        title="Services"
                        items={NAV.dropdowns.services as unknown as NavLink[]}
                      />
                      <MobileSection
                        k="companies"
                        title="Companies"
                        items={NAV.dropdowns.companies as unknown as NavLink[]}
                      />
                      <MobileSection
                        k="insights"
                        title="Insights"
                        items={NAV.dropdowns.insights as unknown as NavLink[]}
                      />
                      <MobileSection
                        k="company"
                        title="Company"
                        items={NAV.primary as unknown as NavLink[]}
                      />
                    </div>
                  </div>

                  {/* Mobile Footer */}
                  <div className="mt-6 space-y-4 border-t pt-6">
                    <SheetClose asChild>
                      <Button
                        asChild
                        className="h-10 w-full bg-[color:var(--primary)] text-white transition-all duration-200 hover:bg-[color:var(--primary)]/90"
                      >
                        <Link href={NAV.ctas.start.href}>{NAV.ctas.start.label}</Link>
                      </Button>
                    </SheetClose>

                    <div className="text-center text-xs text-muted-foreground">RC: {SITE.trust.rc}</div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Subtle seal line under the nav */}
      <div className="h-px w-full cstl-seal-line opacity-50" />
    </header>
  );
}
