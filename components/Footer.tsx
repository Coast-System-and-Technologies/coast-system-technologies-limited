"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { INavLinks } from "@/lib/data";
import { disableHeaderWithFooter } from "@/utils/disableHeaderWithFooter";
import { usePathname } from "next/navigation";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const Footer = () => {
  const pathname = usePathname();

  const shouldHideHeader = disableHeaderWithFooter.some((path) => {
    const pattern = path.replace(/\[.*\]/g, "[^/]+");
    const regex = new RegExp(`^${pattern}$`);
    return regex.test(pathname);
  });

  if (shouldHideHeader) return null;

  return (
    <footer className="bg-blue-800 text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Logo + Contact */}
        <div>
          <Image
            src="/assets/logo.png"
            alt="Coast System and technologies logo"
            width={120}
            height={120}
            className="mr-2 rounded-md"
          />
          <p className="text-[12px] mb-4">
            Let{"'"}s Power Africa{"'"}s Credit <br />
            Revolution — Together.
          </p>
          <div className="space-y-1 text-sm">
            <p className="flex items-center gap-1">
              <Image
                src="/icons/email.png"
                alt="opened email icon"
                width={30}
                height={30}
                className="w-6 h-6"
              />
              <Link
                href="mailto:executive.office@coastsystemtechnologies.com.ng"
                className="hover:underline"
              >
                executive.office@coastsystemtechnologies.com.ng
              </Link>
            </p>
            <p className="flex items-center gap-1">
              <Image
                src="/icons/whatsapp.png"
                alt="Whatsapp icon"
                width={30}
                height={30}
              />{" "}
              +234 913 686 0226
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-xl mb-3">Quick Links</h3>
            <ul role="list" className="space-y-2 text-sm">
              {/* {INavLinks.slice(0, 4).map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="hover:text-gray-300">
                    {link.label}
                  </Link>
                </li>
              ))} */}
              <li role="listItem" className="hover:text-gray-300">
                <Link href="/about" className="hover:text-gray-300">
                  About us
                </Link>
              </li>
              <li role="listItem" className="hover:text-gray-300">
                <Link href="/contact" className="hover:text-gray-300">
                  Contact us
                </Link>
              </li>
              <li role="listItem" className="hover:text-gray-300">
                <Link href="/insights" className="hover:text-gray-300">
                  Insights
                </Link>
              </li>
              <li role="listItem" className="hover:text-gray-300">
                <Link href="/about" className="hover:text-gray-300">
                  About us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-3">Explore</h3>
            <ul className="space-y-2 text-sm">
              {/* {INavLinks.slice(4)
                .filter((_, i, arr) => i !== 1 && i !== arr.length - 1)
                .map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="hover:text-gray-300">
                      {link.label}
                    </Link>
                  </li>
                ))} */}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-xl mb-3">Stay Updated</h3>
          <p className="text-sm mb-4">Subscribe to our newsletter</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Your email"
              className="p-4 rounded text-white w-full sm:w-auto"
            />
            <Button
              type="submit"
              className="primary-cta hover:bg-blue-400 p-4 rounded cursor-pointer"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="flex items-center justify-between text-center text-sm text-gray-100 mt-10">
        &copy; {new Date().getFullYear()} Coast System & Technologies Ltd. All
        rights reserved.
        <div className="mt-4 space-x-4">
          <Link href="/privacy" className="text-xs hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-xs hover:underline">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};
