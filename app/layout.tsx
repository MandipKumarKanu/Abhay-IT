import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "Fiber Internet & IPTV in Birgunj, Parsa | Abhay Digital",
    template: "%s | Abhay Digital & IT Solution",
  },
  description:
    "Fast, Stable & Reliable Fiber Internet & IPTV Services in Birgunj-4, Parsa, Nepal. 50-200 Mbps plans starting from Rs. 7,500/year. Free installation, router & drop wire.",
  metadataBase: new URL("https://www.abhaydigital.com.np/"),
  alternates: {
    canonical: "https://www.abhaydigital.com.np/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Fiber Internet & IPTV in Birgunj, Parsa | Abhay Digital",
    description:
      "Fast, Stable & Reliable Fiber Internet & IPTV Services in Birgunj-4, Parsa, Nepal.",
    url: "https://www.abhaydigital.com.np/",
    siteName: "Abhay Digital & IT Solution",
    type: "website",
    locale: "en_NP",
    images: [
      {
        url: "/hero-artwork.webp",
        width: 1200,
        height: 630,
        alt: "Abhay Digital Fiber Internet & IPTV Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiber Internet & IPTV in Birgunj, Parsa | Abhay Digital",
    description:
      "Fast, Stable & Reliable Fiber Internet & IPTV Services in Birgunj-4, Parsa, Nepal.",
    images: ["/hero-artwork.webp"],
    creator: "@abhaydigital",
  },
  verification: {
    google: "", // ← paste GSC HTML tag content here after verifying at https://search.google.com/search-console
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  other: {
    "geo.region": "NP-P2",
    "geo.placename": "Birgunj",
    "geo.position": "27.0074;84.8788",
    ICBM: "27.0074, 84.8788",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-slate-50 text-slate-800">
        {children}
      </body>
    </html>
  );
}