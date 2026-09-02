import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PackagesSection from "@/components/PackagesSection";
import ServicesIptvSection from "@/components/ServicesIptvSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import { Phone, ArrowRight, Headphones } from "lucide-react";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.abhaydigital.com.np/#organization",
  name: "Abhay Digital & IT Solution",
  url: "https://www.abhaydigital.com.np/",
  logo: "https://www.abhaydigital.com.np/logo.png",
  description:
    "Fast, Stable & Reliable High-Speed Fiber Internet & IPTV Services in Birgunj-4, Parsa, Nepal.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+977-9804268190",
    contactType: "customer service",
    areaServed: "NP",
    availableLanguage: ["en", "ne"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Birgunj-4",
    addressLocality: "Birgunj",
    addressRegion: "Parsa",
    addressCountry: "NP",
  },
  sameAs: [
    "https://facebook.com",
    "https://instagram.com",
    "https://youtube.com",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.abhaydigital.com.np/#localbusiness",
  name: "Abhay Digital & IT Solution",
  image: "https://www.abhaydigital.com.np/logo.png",
  url: "https://www.abhaydigital.com.np/",
  telephone: "+977-9804268190",
  priceRange: "Rs. 7500 - Rs. 18500",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Birgunj-4",
    addressLocality: "Birgunj",
    addressRegion: "Parsa",
    addressCountry: "NP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "27.0074",
    longitude: "84.8788",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Internet Packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "50 Mbps Only Internet - Yearly" },
        price: "7500",
        priceCurrency: "NPR",
        availability: "https://schema.org/InStock",
        url: "https://www.abhaydigital.com.np/#packages",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "100 Mbps Only Internet - Yearly" },
        price: "8500",
        priceCurrency: "NPR",
        availability: "https://schema.org/InStock",
        url: "https://www.abhaydigital.com.np/#packages",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "100 Mbps Internet + IPTV - Yearly" },
        price: "10500",
        priceCurrency: "NPR",
        availability: "https://schema.org/InStock",
        url: "https://www.abhaydigital.com.np/#packages",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "200 Mbps Only Internet - Yearly" },
        price: "10500",
        priceCurrency: "NPR",
        availability: "https://schema.org/InStock",
        url: "https://www.abhaydigital.com.np/#packages",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "200 Mbps Internet + IPTV - 2 Yearly" },
        price: "18500",
        priceCurrency: "NPR",
        availability: "https://schema.org/InStock",
        url: "https://www.abhaydigital.com.np/#packages",
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.abhaydigital.com.np/#website",
  url: "https://www.abhaydigital.com.np/",
  name: "Abhay Digital & IT Solution",
  description:
    "Fast, Stable & Reliable High-Speed Fiber Internet & IPTV Services in Birgunj-4, Parsa, Nepal.",
  publisher: { "@id": "https://www.abhaydigital.com.np/#organization" },
  inLanguage: "en-NP",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.abhaydigital.com.np/",
    },
  ],
};

const reviewSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "LocalBusiness",
      name: "Abhay Digital & IT Solution",
      "@id": "https://www.abhaydigital.com.np/#localbusiness",
    },
    author: { "@type": "Person", name: "Ramesh Kumar" },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
    reviewBody:
      "We've been using Abhay Digital's 100 Mbps plan for 8 months. Fast, reliable, and the support team is always helpful. Free installation and router were a great bonus. Highly recommended for families in Birgunj!",
    datePublished: "2025-11-15",
  },
  {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "LocalBusiness",
      name: "Abhay Digital & IT Solution",
      "@id": "https://www.abhaydigital.com.np/#localbusiness",
    },
    author: { "@type": "Person", name: "Sunita Sharma" },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
    reviewBody:
      "The IPTV with 300+ channels is amazing for our family. Kids love the cartoon channels and we enjoy the Nepali news and sports. Internet never lags even with 4 devices connected. Best value in Parsa!",
    datePublished: "2025-10-28",
  },
  {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "LocalBusiness",
      name: "Abhay Digital & IT Solution",
      "@id": "https://www.abhaydigital.com.np/#localbusiness",
    },
    author: { "@type": "Person", name: "Amit Patel" },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
    reviewBody:
      "As a small business owner, I need stable internet for my shop. Abhay Digital's 200 Mbps service is rock solid — no downtime in 6 months. Their 24/7 support fixed my router issue within an hour on a Sunday evening.",
    datePublished: "2025-12-02",
  },
];

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  itemReviewed: {
    "@type": "LocalBusiness",
    name: "Abhay Digital & IT Solution",
    "@id": "https://www.abhaydigital.com.np/#localbusiness",
  },
  ratingValue: "5",
  reviewCount: "3",
  bestRating: "5",
  worstRating: "1",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {reviewSchemas.map((schema, i) => (
        <script
          key={`review-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      <main className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* TopBar and NavBar */}
      <Header />

      {/* Hero Section matching attached banner image */}
      <HeroSection />

      {/* Internet Packages Section matching attached package design */}
      <PackagesSection />

      {/* IPTV, Services, Why Choose Us & Inquiry Form Section */}
      <ServicesIptvSection />

      {/* Testimonials - 4.1/4.4 Customer Trust Signals */}
      {/* <TestimonialsSection /> */}

      {/* Services & Contact Banner */}
      <section className="bg-[#03183d] text-white py-12 px-4 md:px-8 border-t border-blue-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-[#ff5500] rounded-2xl text-white shrink-0">
              <Headphones className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Need Help Choosing a Plan?</h3>
              <p className="text-slate-200 text-sm">
                Contact our customer support team in Birgunj for instant setup &amp; advice.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="tel:051592490"
              aria-label="Call Customer Support 051-592490"
              className="inline-flex items-center gap-2 bg-white text-[#002b66] hover:bg-slate-100 font-extrabold px-6 py-3 rounded-xl shadow transition"
            >
              <Phone className="w-5 h-5 text-[#ff5500]" />
              051-592490
            </a>
            <a
              href="https://wa.me/9779804268190"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Support"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold px-6 py-3 rounded-xl shadow transition"
            >
              WhatsApp Support
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer matching exact reference image */}
      <Footer />

      {/* Single Global Inquiry Modal */}
      <InquiryModal />
      </main>
    </>
  );
}
