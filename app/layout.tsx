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
  title: "Crystal Marine",
  description:
    "Crystal Marine provides world-class maritime services across Africa — mooring coordination, ship-to-ship (STS) transfer, river pilotage and terminal management, backed by 24-hour operational support.",
  icons: "/images/crystal-marine-logo.png",
  openGraph: {
    type: "website",
    title: "Crystal Marine | Mooring & STS Marine Services Across Africa",
    description:
      "15+ years of international STS expertise, upstream marine services and shipping — safe, reliable mooring and pilotage operations across Africa, backed by 24-hour support.",
    url: "https://crystalmarine-africa.com/",
    siteName: "Crystal Marine",
    images: [
      {
        url: "https://crystalmarine-africa.com/images/hero-ship.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crystal Marine | Mooring & STS Marine Services Across Africa",
    description:
      "15+ years of international STS expertise, upstream marine services and shipping — safe, reliable mooring and pilotage operations across Africa, backed by 24-hour support.",
    images: ["https://crystalmarine-africa.com/images/hero-ship.jpg"],
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
