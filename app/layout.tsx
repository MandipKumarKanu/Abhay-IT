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
    default: "Abhay Digital & IT Solution",
    template: "%s | Abhay Digital & IT Solution",
  },
  description:
    "Professional CCTV Installation, TV Wall Mounting, Electrical Wiring, Skycom IPTV & IT Solutions in Birgunj-4, Parsa, Nepal. Certified technicians, transparent pricing & reliable support.",
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
    title: "Abhay Digital & IT Solution",
    description:
      "Professional CCTV Installation, TV Wall Mounting, Electrical Wiring, Skycom IPTV & IT Solutions in Birgunj-4, Parsa, Nepal.",
    url: "https://www.abhaydigital.com.np/",
    siteName: "Abhay Digital & IT Solution",
    type: "website",
    locale: "en_NP",
    images: [
      {
        url: "/images/cctv-solutions.jpg",
        width: 1200,
        height: 630,
        alt: "Abhay Digital & IT Solution - CCTV, TV Fitting, Electrical & IPTV Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhay Digital & IT Solution",
    description:
      "Professional CCTV Installation, TV Wall Mounting, Electrical Wiring, Skycom IPTV & IT Solutions in Birgunj-4, Parsa, Nepal.",
    images: ["/images/cctv-solutions.jpg"],
    creator: "@abhaydigital",
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