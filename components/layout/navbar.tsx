"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight, X } from "lucide-react";

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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <div className="flex h-16 lg:h-20 items-center justify-between gap-4">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
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
          <nav className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {/* Services */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 px-4 text-sm font-medium bg-transparent hover:bg-muted/50 data-[state=open]:bg-muted/50 data-[state=open]:text-[color:var(--primary)]">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <DropdownGrid items={NAV.dropdowns.services as unknown as NavLink[]} />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Companies */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 px-4 text-sm font-medium bg-transparent hover:bg-muted/50 data-[state=open]:bg-muted/50 data-[state=open]:text-[color:var(--primary)]">
                    Companies
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <DropdownGrid items={NAV.dropdowns.companies as unknown as NavLink[]} />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Insights */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 px-4 text-sm font-medium bg-transparent hover:bg-muted/50 data-[state=open]:bg-muted/50 data-[state=open]:text-[color:var(--primary)]">
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
                            "h-9 px-4 text-sm font-medium rounded-md transition-all duration-200",
                            active
                              ? "text-[color:var(--primary)] bg-muted/50"
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

            {/* CTA */}
            <Button
              asChild
              className="ml-2 h-9 bg-[color:var(--primary)] text-white hover:bg-[color:var(--primary)]/90 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <Link href={NAV.ctas.start.href}>{NAV.ctas.start.label}</Link>
            </Button>
          </nav>

          {/* Mobile */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[85vw] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between mb-6">
                    <Image
                      src="/LOGO.png"
                      alt={SITE.shortName}
                      width={150}
                      height={50}
                      className="h-10 w-auto"
                    />
                    <SheetClose asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        aria-label="Close menu"
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </div>

                  <Separator className="mb-6" />

                  {/* Mobile Navigation */}
                  <div className="flex-1 overflow-y-auto space-y-8">
                    {/* Services */}
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                        Services
                      </h3>
                      <nav className="space-y-2">
                        {(NAV.dropdowns.services as unknown as NavLink[]).map((x) => (
                          <Link
                            key={x.href}
                            href={x.href}
                            className={[
                              "block py-2 text-sm rounded-md transition-colors duration-200",
                              isActive(pathname, x.href)
                                ? "text-[color:var(--primary)] font-medium bg-muted/50 pl-3"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/30 pl-3",
                            ].join(" ")}
                          >
                            {x.label}
                          </Link>
                        ))}
                      </nav>
                    </div>

                    {/* Companies */}
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                        Companies
                      </h3>
                      <nav className="space-y-2">
                        {(NAV.dropdowns.companies as unknown as NavLink[]).map((x) => (
                          <Link
                            key={x.href}
                            href={x.href}
                            className={[
                              "block py-2 text-sm rounded-md transition-colors duration-200",
                              isActive(pathname, x.href)
                                ? "text-[color:var(--primary)] font-medium bg-muted/50 pl-3"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/30 pl-3",
                            ].join(" ")}
                          >
                            {x.label}
                          </Link>
                        ))}
                      </nav>
                    </div>

                    {/* Insights */}
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                        Insights
                      </h3>
                      <nav className="space-y-2">
                        {(NAV.dropdowns.insights as unknown as NavLink[]).map((x) => (
                          <Link
                            key={x.href}
                            href={x.href}
                            className={[
                              "block py-2 text-sm rounded-md transition-colors duration-200",
                              isActive(pathname, x.href)
                                ? "text-[color:var(--primary)] font-medium bg-muted/50 pl-3"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/30 pl-3",
                            ].join(" ")}
                          >
                            {x.label}
                          </Link>
                        ))}
                      </nav>
                    </div>

                    {/* Primary Links */}
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                        Company
                      </h3>
                      <nav className="space-y-2">
                        {NAV.primary.map((x) => (
                          <Link
                            key={x.href}
                            href={x.href}
                            className={[
                              "block py-2 text-sm rounded-md transition-colors duration-200",
                              isActive(pathname, x.href)
                                ? "text-[color:var(--primary)] font-medium bg-muted/50 pl-3"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/30 pl-3",
                            ].join(" ")}
                          >
                            {x.label}
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </div>

                  {/* Mobile Footer */}
                  <div className="mt-8 pt-6 border-t space-y-4">
                    <Button
                      asChild
                      className="w-full h-10 bg-[color:var(--primary)] text-white hover:bg-[color:var(--primary)]/90 transition-all duration-200"
                    >
                      <Link href={NAV.ctas.start.href}>{NAV.ctas.start.label}</Link>
                    </Button>
                    <div className="text-center text-xs text-muted-foreground">
                      RC: {SITE.trust.rc}
                    </div>
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
