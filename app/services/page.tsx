import Header from "@/components/Header";
import ServicesPageContent from "@/components/ServicesPageContent";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CCTV, TV Fitting & Electrical Services | Abhay Digital & IT Solution Birgunj",
  description:
    "Explore complete CCTV installation, TV wall fitting & setup, and professional electrical wiring services for home, office & building in Birgunj-4, Parsa, Nepal.",
  keywords: [
    "CCTV Installation Birgunj",
    "TV Wall Fitting Birgunj",
    "Electricity Wiring Services Parsa",
    "DVR NVR Setup Nepal",
    "Abhay Digital & IT Solution",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "CCTV Installation, TV Fitting & Electrical Wiring Services",
  provider: {
    "@type": "LocalBusiness",
    name: "Abhay Digital & IT Solution",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Birgunj-4",
      addressLocality: "Birgunj",
      addressRegion: "Parsa",
      addressCountry: "NP",
    },
    telephone: "+977-9804268190",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Parsa, Nepal",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT & Technical Services Catalog",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Complete CCTV Solutions & HD Installation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Professional TV Wall Fitting & Cable Setup Service",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Electricity Wiring Services (Home, Office, Building)",
        },
      },
    ],
  },
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
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://www.abhaydigital.com.np/services",
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
        <Header />
        <ServicesPageContent />
        <Footer />
        <InquiryModal />
      </main>
    </>
  );
}
