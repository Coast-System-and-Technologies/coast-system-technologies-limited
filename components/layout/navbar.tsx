"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";

import { SITE } from "@/content/site";
import { NAV, type NavLink } from "@/content/nav";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
    <div className="grid gap-2 p-4 md:w-[460px]">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group rounded-xl border border-border bg-card p-4 transition hover:shadow-sm"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="font-medium text-foreground">{item.label}</div>
              {item.description ? (
                <div className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </div>
              ) : null}
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-[color:var(--accent)]" />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/75 backdrop-blur">
      <div className="cstl-container h-16 flex items-center justify-between gap-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex flex-col leading-tight">
            <span className="font-heading text-base sm:text-lg text-[color:var(--primary)] tracking-wide">
              {SITE.shortName}
            </span>
            <span className="hidden sm:inline text-[11px] text-muted-foreground tracking-wider">
              {SITE.signature}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Services */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <DropdownGrid items={NAV.dropdowns.services as unknown as NavLink[]} />
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Companies */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Companies
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <DropdownGrid items={NAV.dropdowns.companies as unknown as NavLink[]} />
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Insights */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Insights
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <DropdownGrid items={NAV.dropdowns.insights as unknown as NavLink[]} />
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Top-level links */}
              {NAV.primary.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={[
                        "px-3 py-2 text-sm rounded-md transition",
                        "hover:bg-muted",
                        isActive(pathname, item.href)
                          ? "text-[color:var(--primary)] font-medium"
                          : "text-foreground",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA */}
          <Button asChild className="bg-[color:var(--primary)] text-white hover:opacity-90">
            <Link href={NAV.ctas.start.href}>{NAV.ctas.start.label}</Link>
          </Button>
        </nav>

        {/* Mobile */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[340px]">
              <div className="space-y-1">
                <div className="font-heading text-lg text-[color:var(--primary)]">
                  {SITE.shortName}
                </div>
                <div className="text-xs text-muted-foreground tracking-wider">
                  {SITE.signature}
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-6">
                <div>
                  <div className="text-sm font-medium mb-2">Services</div>
                  <div className="space-y-2">
                    {(NAV.dropdowns.services as unknown as NavLink[]).map((x) => (
                      <Link
                        key={x.href}
                        href={x.href}
                        className="block text-sm text-muted-foreground hover:text-[color:var(--primary)] transition"
                      >
                        {x.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-2">Companies</div>
                  <div className="space-y-2">
                    {(NAV.dropdowns.companies as unknown as NavLink[]).map((x) => (
                      <Link
                        key={x.href}
                        href={x.href}
                        className="block text-sm text-muted-foreground hover:text-[color:var(--primary)] transition"
                      >
                        {x.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-2">Insights</div>
                  <div className="space-y-2">
                    {(NAV.dropdowns.insights as unknown as NavLink[]).map((x) => (
                      <Link
                        key={x.href}
                        href={x.href}
                        className="block text-sm text-muted-foreground hover:text-[color:var(--primary)] transition"
                      >
                        {x.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-2">Company</div>
                  <div className="space-y-2">
                    {NAV.primary.map((x) => (
                      <Link
                        key={x.href}
                        href={x.href}
                        className="block text-sm text-muted-foreground hover:text-[color:var(--primary)] transition"
                      >
                        {x.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <Button asChild className="w-full bg-[color:var(--primary)] text-white hover:opacity-90">
                  <Link href={NAV.ctas.start.href}>{NAV.ctas.start.label}</Link>
                </Button>

                <div className="pt-2 text-xs text-muted-foreground">
                  RC: {SITE.trust.rc}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* subtle seal line under the nav for x-factor */}
      <div className="h-px w-full cstl-seal-line opacity-60" />
    </header>
  );
}
