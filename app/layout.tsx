import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  preload: true,
});

export const metadata: Metadata = {
  title:
    "Coast System and Technologies Ltd — Corporate Strategy, IP & Governance Advisory",
  description:
    "Coast System and Technologies Ltd helps founders and startups secure their ventures with smart legal, IP, and governance solutions. Trademark services, contract systems, and strategic packages tailored for growth.",
  openGraph: {
    title: "Coast System and Technologies Ltd",
    description:
      "Smart legal, IP, and governance solutions for founders, ventures, and holding companies.",
    url: "https://coastsystemtechnologies.com.ng",
    siteName: "Coast System and Technologies Ltd",
    images: [
      {
        url: "https://coastsystemtechnologies.com.ng/og-cover.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coast System and Technologies Ltd",
    description:
      "Corporate control, startup strategy, and IP defense for legacy-driven ventures.",
    images: ["https://coastsystemtechnologies.com.ng/og-cover.jpg"],
  },
  keywords: [
    "governance advisory",
    "founder rights",
    "legal tech",
    "trademark registration",
    "IP strategy",
    "startup incorporation",
    "compliance",
    "Nigeria business structure",
    "outsourcing",
    "recruitment",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
