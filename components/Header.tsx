"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MenuIcon, X, ChevronDown } from "lucide-react";
import { INavLinks } from "@/lib/data";
// import { getTokenFromCookies } from "@/lib/cookies";
import { INavLink } from "@/lib/types";
import { disableHeaderWithFooter } from "@/utils/disableHeaderWithFooter";

// Type guard for dropdown items
function isDropdownLink(item: INavLink): item is INavLink & {
  subLinks: Array<{ label: string; href: string }>;
} {
  return !!item.subLinks && item.subLinks.length > 0;
}

export const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  //   const [hasToken, setHasToken] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, mounted]);

  useEffect(() => {
    if (!mounted || !isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, mounted]);

  useEffect(() => {
    if (!mounted) return;
    // const token = getTokenFromCookies();
    // if (token) setHasToken(true);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (label: string) =>
    setOpenDropdown(openDropdown === label ? null : label);
  const isActive = (href: string) => pathname === href;

  const shouldHideHeader = disableHeaderWithFooter.some((path) => {
    const pattern = path.replace(/\[.*\]/g, "[^/]+");
    const regex = new RegExp(`^${pattern}$`);
    return regex.test(pathname);
  });

  if (shouldHideHeader) return null;

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <>
      <header
        className={`fixed top-0 z-30 w-full px-4 md:px-8 lg:px-16 h-[12vh] md:h-[15vh] flex justify-between items-center transition-all duration-300 ${
          isScrolled
            ? "bg-blue-800 shadow-md backdrop-blur-[18px]"
            : "bg-blue-800"
        }`}
      >
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            alt="coast systems and technology"
            width={70}
            height={70}
            className="py-2 rounded-[50%]"
          />
          <h5 className="text-xl font-semibold">
            Coast System &<br />
            Technologies Limited
          </h5>
        </Link>

        {/* Desktop NavLinks */}
        <nav className="hidden min-[1120px]:flex items-center gap-1 text-[1rem]">
          {INavLinks.map((item, index) =>
            isDropdownLink(item) ? (
              <div key={index} className="relative group">
                <div className="flex items-center gap-1 cursor-pointer text-white hover:text-blue-400 group">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-white hover:text-blue-400 capitalize py-1 "
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="capitalize py-1">{item.label}</span>
                  )}
                  <span className="select-none text-white group-hover:text-blue-400 mt-1">
                    <ChevronDown size={18} />
                  </span>
                </div>
                {/* Dropdown on hover */}
                <div className="absolute left-0 top-full mt-1 min-w-[400px] bg-white text-primary rounded-[10px] border-6 border-[#0057ff] shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-40">
                  <ul className="">
                    {item.subLinks.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className="block p-4 hover:bg-blue-100 hover:font-semibold hover:text-primary hover:border-b-2 hover:border-blue-800 transition-colors duration-150 whitespace-nowrap"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={index}
                href={item.href!}
                className={`capitalize px-2 py-1 ${
                  isActive(item.href!)
                    ? "text-blue-400 font-bold hover:text-blue-500"
                    : "text-white hover:text-blue-400"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="text-[14px] font-semibold primary-cta hover:bg-blue-800 px-6 py-2.5 hidden md:block hover:scale-105"
          >
            Start a Project
          </Link>
          {/* <Link
            href="#"
            className="text-[14px] font-semibold ghost-cta px-5 py-2.5 hover:scale-105"
          >
            Trademark Form
          </Link> */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="min-[1080px]:hidden inline-flex items-center justify-center p-2"
          >
            <MenuIcon size={30} className="min-[1080px]:hidden text-white" />
          </button>
        </div>

        {isOpen && (
          <nav className="fixed top-0 right-0 h-screen w-full bg-gray-800/70 backdrop-blur-[18px] text-white z-50 px-6 pt-4 pb-12 overflow-y-auto flex justify-center">
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="fixed top-6 right-2 md:right-8 w-24 h-12 p-4"
            >
              <X size={40} className="text-white bg-primary rounded" />
            </button>

            <ul className="mt-16 lg:max-w-[30vw] space-y-2 text-lg uppercase">
              {INavLinks.map((item, index) => {
                return (
                  <li key={index}>
                    {isDropdownLink(item) ? (
                      <div>
                        <div className="flex items-center justify-center gap-1 hover:text-blue-400">
                          {item.href ? (
                            <Link
                              href={item.href}
                              onClick={closeMenu}
                              className="uppercase"
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <span className="uppercase">{item.label}</span>
                          )}
                          <button
                            type="button"
                            onClick={() => toggleDropdown(item.label)}
                            className="p-1"
                          >
                            {openDropdown === item.label
                              ? // <ChevronUp size={18} />
                                "▲"
                              : // <ChevronDown size={18} />
                                "▼"}
                          </button>
                        </div>

                        <div>
                          {openDropdown === item.label && (
                            <ul className="mt-2 space-y-2 text-[1rem] text-gray-300 text-center">
                              {item.subLinks.map((sub) => (
                                <li key={sub.href} onClick={closeMenu}>
                                  <Link
                                    href={sub.href}
                                    className={`block uppercase ${
                                      isActive(sub.href)
                                        ? "text-blue-400 font-medium"
                                        : "hover:text-[#064970] hover:pl-4 transition-all duration-300 ease-in-out"
                                    }`}
                                  >
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href!}
                        onClick={closeMenu}
                        className={`desktop-nav-link inline-block justify-self-center uppercase text-center w-full px-10 py-2 rounded-md transition-colors duration-300 
                            ${
                              isActive(item.href!)
                                ? "text-blue-400 font-medium"
                                : "hover:text-white"
                            }
                              `}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};
