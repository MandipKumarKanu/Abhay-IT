import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Ramesh Kumar",
    location: "Birgunj-4, Parsa",
    plan: "100 Mbps Only Internet",
    rating: 5,
    text: "We've been using Abhay Digital's 100 Mbps plan for 8 months. Fast, reliable, and the support team is always helpful. Free installation and router were a great bonus. Highly recommended for families in Birgunj!",
    date: "2025-11-15",
  },
  {
    name: "Sunita Sharma",
    location: "Birgunj, Adarsh Nagar",
    plan: "100 Mbps + IPTV",
    rating: 5,
    text: "The IPTV with 300+ channels is amazing for our family. Kids love the cartoon channels and we enjoy the Nepali news and sports. Internet never lags even with 4 devices connected. Best value in Parsa!",
    date: "2025-10-28",
  },
  {
    name: "Amit Patel",
    location: "Birgunj, Ghantaghar",
    plan: "200 Mbps Only Internet",
    rating: 5,
    text: "As a small business owner, I need stable internet for my shop. Abhay Digital's 200 Mbps service is rock solid — no downtime in 6 months. Their 24/7 support fixed my router issue within an hour on a Sunday evening.",
    date: "2025-12-02",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-[#ffaa00] text-[#ffaa00]" : "text-slate-300"}`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="max-w-[1500px] mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-3">
          <span className="h-[2px] sm:h-[3px] w-10 sm:w-20 bg-[#f95400] rounded-full shrink-0" />
          <h2 className="text-lg sm:text-2xl md:text-[28px] font-black text-[#0c2461] uppercase tracking-tight text-center">
            What Our Customers Say
          </h2>
          <span className="h-[2px] sm:h-[3px] w-10 sm:w-20 bg-[#f95400] rounded-full shrink-0" />
        </div>
        <p className="text-center text-sm text-slate-500 font-medium mb-10 max-w-2xl mx-auto">
          Trusted by families and businesses across Birgunj and Parsa. Real feedback from our customers.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-[#f8fafc] rounded-2xl border border-slate-200 p-5 sm:p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#0047bb]/10" />
              <Stars rating={t.rating} />
              <p className="text-[13px] sm:text-[14px] leading-relaxed text-slate-700 font-medium mt-3 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0047bb] text-white flex items-center justify-center font-black text-sm shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-[13px] font-extrabold text-[#0c2461] leading-none">{t.name}</div>
                  <div className="text-[11px] font-semibold text-slate-500 leading-none mt-1">
                    {t.location} · {t.plan}
                  </div>
                </div>
              </div>
              <time dateTime={t.date} className="sr-only">
                {t.date}
              </time>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <p className="text-xs font-semibold text-slate-500">
            Want to share your experience?{" "}
            <a
              href="https://wa.me/9779804268190?text=Hello%20Abhay%20Digital%2C%20I%20want%20to%20share%20my%20feedback"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0047bb] hover:text-[#003799] underline underline-offset-2"
            >
              Send us feedback on WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
