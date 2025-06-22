"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  ShieldCheck,
  Twitter,
} from "lucide-react";
import { Button } from "../ui/button";

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section id="contact-form" className="bg-white">
      <div className="md:max-w-6xl mx-auto md:px-16 px-4 py-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-outline text-primary text-center pb-12">
          Contact Form
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Alternative Contact Info */}
          <div className="space-y-6 text-left">
            <div
              className="w-[400px] h-[350px] bg-white rounded-[8px] flex items-center justify-center"
              aria-hidden="true"
            >
              {/* Fixed image container with proper alignment */}
              <Image
                src="/illustrations/customer-support.png" // Replace with your image path
                alt="Alternative contact visual"
                width={400}
                height={450}
                className="object-contain"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Alternative Contact Info
              </h3>
              <p className="text-sm text-gray-600">
                You can also reach us directly:
              </p>

              <ul className="mt-6 space-y-3 md:space-y-6 text-[14px]">
                <li className="flex items-center gap-4 sm:gap-6">
                  <MdEmail size={28} className="text-[#064970] flex-shrink-0" />
                  <Link
                    href="mailto:contact@techedusolution.com"
                    className="text-[1rem] text-black font-medium hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                  >
                    executive.office@coastsystemtechnologies.com.ng
                  </Link>
                </li>
                <li className="flex items-center gap-4 sm:gap-6">
                  <FaPhone size={28} className="text-gray-700 flex-shrink-0" />
                  <Link
                    href="tel:+442071234567"
                    className="text-[1rem] text-black font-medium hover:text-gray-900 hover:font-bold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    +234 913 686 0226
                  </Link>
                </li>
                <li className="flex items-center gap-4 sm:gap-6">
                  <FaWhatsapp
                    size={28}
                    className="text-green-600 flex-shrink-0"
                  />
                  <Link
                    href="https://wa.me/2349136860226"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[1rem] text-black font-medium hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                  >
                    +234 913 686 0226
                  </Link>
                </li>
                <li className="flex items-center gap-4 sm:gap-6">
                  <MapPin size={28} className="text-primary flex-shrink-0" />
                  <span className="text-[1rem] text-black font-medium hover:text-gray-900 hover:font-bold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {" "}
                    Monday – Friday | 9:00 AM – 5:00 PM WAT
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Connect With Us
              </h3>
              <div className="flex gap-4">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-gray-700 hover:text-[#DD2A7B]" />
                </Link>

                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-gray-700 hover:text-[#0077B5]" />{" "}
                  {/* LinkedIn Blue */}
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 text-gray-700 hover:text-[#1877F2]" />{" "}
                  {/* Facebook Blue */}
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6 text-gray-700 hover:text-[#1DA1F2]" />{" "}
                  {/* Twitter Blue */}
                </Link>
              </div>
            </div>

            <div className="mt-10 space-y-2">
              <h3 className="text-xl font-semibold text-gray-900">
                Trust & Registration
              </h3>
              <p className="flex items-center gap-2 text-sm text-gray-700">
                <ShieldCheck size={25} className=" text-primary" />
                <strong>RC: 8449588</strong> — CAC Registered
              </p>
              <p className="text-sm text-gray-700">
                IP Agent Status: In Progress with NIPO
              </p>
              <p className="text-sm text-gray-700">
                Protected under NDAs & NDPR compliance.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6" aria-label="Contact form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="mt-1 block w-full rounded-[8px] text-gray-700 border border-gray-300 p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+44 20 7123 4567"
                  pattern="[0-9\s+()-]*"
                  title="Please enter a valid UK phone number"
                  className="mt-1 block w-full rounded-[8px] text-gray-700 border border-gray-300 p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your.email@example.com"
                className="mt-1 block w-full rounded-[8px] text-gray-700 border border-gray-300 p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <select
                id="role"
                name="role"
                required
                className="mt-1 block w-full rounded-[8px] text-gray-700 border border-gray-300 p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select your subject</option>
                <option value="trademark">Trademark</option>
                <option value="governance">Governance</option>
                <option value="incorporation">Incorporation</option>
                <option value="legalTech">Legal Tech</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Please describe your inquiry in detail..."
                maxLength={1000}
                className="mt-1 block w-full rounded-[8px] text-gray-700 border border-gray-300 p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
              <p className="mt-1 text-sm text-gray-500">
                Maximum 1000 characters
              </p>
            </div>

            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                How did you hear about us?
              </label>
              <select
                id="role"
                name="role"
                required
                className="mt-1 block w-full rounded-[8px] text-gray-700 border border-gray-300 p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">How did you hear about us?</option>
                <option value="trademark">Referral</option>
                <option value="governance">Google</option>
                <option value="incorporation">Instagram</option>
                <option value="legalTech">LinkedIn</option>
                <option value="other">Other</option>
              </select>
            </div>

            <Button
              type="submit"
              className="w-full px-6 py-6 mt-6 text-white font-semibold bg-primary hover:shadow-md hover:shadow-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-[8px] cursor-pointer"
            >
              Send Message →
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
