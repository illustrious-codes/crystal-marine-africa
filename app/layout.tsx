import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Crystal Marine | Mooring & STS Marine Services in Africa",
    template: "%s | Crystal Marine",
  },
  description:
    "Crystal Marine provides world-class maritime services across Africa — mooring coordination, ship-to-ship (STS) transfer, river pilotage and terminal management — delivered by certified mooring masters in line with MARPOL and OCIMF guidelines, with 24-hour operational support.",
  keywords: [
    "Crystal Marine",
    "ship to ship transfer",
    "STS operations Africa",
    "mooring coordination",
    "mooring masters",
    "river pilotage",
    "marine logistics Nigeria",
    "terminal management",
  ],
  icons: {
    icon: "/images/crystal-marine-logo.png",
  },
  openGraph: {
    title: "Crystal Marine | Mooring & STS Marine Services in Africa",
    description:
      "World-class mooring coordination, STS transfer, and pilotage services across Africa, backed by 15+ years of international marine expertise.",
    url: "https://crystalmarine-africa.com",
    siteName: "Crystal Marine",
    images: ["/images/crystal-marine-logo.png"],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Navbar />
      <body className="min-h-full flex flex-col">{children}</body>

      <Footer />
    </html>
  );
}
