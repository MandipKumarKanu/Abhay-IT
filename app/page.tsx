import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PackagesSection from "@/components/PackagesSection";
import ServicesIptvSection from "@/components/ServicesIptvSection";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import { Phone, ArrowRight, Headphones } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* TopBar and NavBar */}
      <Header />

      {/* Hero Section matching attached banner image */}
      <HeroSection />

      {/* Internet Packages Section matching attached package design */}
      <PackagesSection />

      {/* IPTV, Services, Why Choose Us & Inquiry Form Section */}
      <ServicesIptvSection />

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
  );
}
