import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import logo from "./assets/chunkinjunk-logo.png";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const PHONE_DISPLAY = "(945) 259-5773";
const PHONE_TEL = "+19452595773";
const EMAIL = "Chunkinjunkinfo@gmail.com";

const reviews = [
  {
    name: "Maria Thompson",
    location: "Denton, TX",
    rating: 5,
    text: "Called in the morning, they were there by noon. Cleared out my entire garage in under two hours. The crew was professional and left the space spotless. Highly recommend!",
    job: "Full Garage Cleanout",
    date: "Aug 2026",
  },
  {
    name: "Derek Okafor",
    location: "McKinney, TX",
    rating: 5,
    text: "Fair pricing, no hidden fees. They took old furniture, appliances, and construction debris without any issues. Will use again for my rental property.",
    job: "Estate Cleanout + Appliances",
    date: "Jul 2026",
  },
  {
    name: "Sandra Reyes",
    location: "Frisco, TX",
    rating: 5,
    text: "I was nervous about the cost but the quote was totally reasonable. They hauled away 20 years of accumulated stuff from my basement. Couldn't be happier.",
    job: "Basement Junk Removal",
    date: "Jun 2026",
  },
  {
    name: "Tom Abelson",
    location: "Plano, TX",
    rating: 4,
    text: "Solid service. They showed up on time and worked quickly. One small ding on a doorframe but they apologized and adjusted the price. Would still hire again.",
    job: "Office Furniture Removal",
    date: "May 2026",
  },
  {
    name: "Priya Nair",
    location: "Allen, TX",
    rating: 5,
    text: "Absolutely fantastic. Cleared our backyard of all the storm debris in record time. Crew was friendly, efficient, and left things cleaner than expected.",
    job: "Yard Debris & Storm Cleanup",
    date: "Apr 2026",
  },
];

const avgRating =
  Math.round((reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10) / 10;

const quotes = [
  { label: "Single Item (Couch, Mattress, Appliance)", min: 75, max: 150 },
  { label: "Small Load (¼ Truck)", min: 150, max: 275 },
  { label: "Medium Load (½ Truck)", min: 275, max: 425 },
  { label: "Large Load (¾ Truck)", min: 425, max: 575 },
  { label: "Full Truck Load", min: 575, max: 800 },
  { label: "Full Garage / Basement Cleanout", min: 350, max: 650 },
  { label: "Estate / Whole-Home Cleanout", min: 600, max: 1400 },
  { label: "Construction Debris", min: 200, max: 700 },
];

const services = [
  { icon: "🏠", title: "Residential Cleanouts", desc: "Garages, basements, attics, whole-home cleanouts for estate sales or moves." },
  { icon: "🏢", title: "Commercial Removal", desc: "Office furniture, retail fixtures, renovation debris — handled fast with minimal disruption." },
  { icon: "🌿", title: "Yard & Storm Debris", desc: "Branches, brush, storm wreckage, old fencing — your yard, reclaimed." },
  { icon: "🛋️", title: "Furniture & Appliances", desc: "Single-item pickups for sofas, fridges, hot tubs, treadmills, and more." },
  { icon: "🏗️", title: "Construction Debris", desc: "Drywall, lumber, flooring, roofing — post-renovation haul-away done right." },
  { icon: "♻️", title: "Eco-Friendly Disposal", desc: "We sort, donate, and recycle before anything goes to the landfill." },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-brand-orange" : "text-brand-navy"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Chunkin Junk JS Removal logo" className="w-12 h-12 object-contain rounded-full" />
          <div className="leading-tight">
            <div className="font-display font-black text-base text-white leading-none">
              Chunkin <span className="text-brand-orange">Junk</span>
            </div>
            <div className="text-[10px] tracking-widest text-brand-muted uppercase font-semibold">JS Removal · North Texas</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#services" className="hover:text-brand-orange transition-colors">Services</a>
          <a href="#reviews" className="hover:text-brand-orange transition-colors">Reviews</a>
          <a href="#pricing" className="hover:text-brand-orange transition-colors">Pricing</a>
          <a href="#contact" className="bg-brand-orange text-white px-5 py-2 font-semibold hover:bg-orange-500 transition-colors">
            Get a Quote
          </a>
        </div>
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-white transition-all mb-1.5 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all mb-1.5 ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-brand-dark px-6 py-4 flex flex-col gap-4 text-sm font-medium text-gray-300">
          <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-brand-orange">Services</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)} className="hover:text-brand-orange">Reviews</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="hover:text-brand-orange">Pricing</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="bg-brand-orange text-white px-5 py-2 font-semibold text-center hover:bg-orange-500 transition-colors">
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-brand-navy"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop&auto=format')",
        }}
      >
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-orange px-3 py-1 mb-6 text-white text-xs font-semibold tracking-widest uppercase">
              <span>⚡</span> Same-Day Service Available
            </div>
            <h1 className="font-display font-black text-5xl md:text-6xl text-white leading-[1.05] mb-6">
              North Texas's<br />
              <span className="text-brand-orange">Toughest</span><br />
              Junk Crew.
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-lg">
              Chunkin Junk JS Removal hauls it all — fast pickups, honest pricing, and eco-friendly disposal across Denton, Frisco, McKinney, Plano & beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-brand-orange text-white font-bold text-lg px-8 py-4 hover:bg-orange-500 transition-colors text-center"
              >
                Request a Free Quote
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="border-2 border-white text-white font-semibold text-lg px-8 py-4 hover:bg-white hover:text-brand-dark transition-colors text-center"
              >
                📞 {PHONE_DISPLAY}
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-10 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-brand-orange font-bold text-lg">★ {avgRating}</span>
                <span>from recent North Texas jobs</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-600" />
              <span>Licensed & Insured</span>
              <div className="hidden sm:block w-px h-4 bg-gray-600" />
              <span>7 Days a Week</span>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <img
              src={logo}
              alt="Chunkin Junk JS Removal — North Texas"
              className="w-72 h-72 object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 bg-brand-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-brand-orange text-xs font-semibold tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white">
            Every Type of Haul,<br />
            <span className="text-brand-muted">Covered.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-brand-navy p-8 hover:bg-brand-navy-light transition-colors group"
            >
              <span className="text-4xl mb-5 block">{s.icon}</span>
              <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-brand-orange transition-colors">
                {s.title}
              </h3>
              <p className="text-blue-200/70 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-brand-navy">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-brand-orange text-xs font-semibold tracking-widest uppercase mb-3">Customer Reviews</p>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white">
              Don't Take<br />Our Word For It.
            </h2>
          </div>
          <div className="flex items-center gap-4 bg-brand-dark px-6 py-4 border border-white/10">
            <div>
              <div className="font-display font-black text-4xl text-brand-orange">{avgRating}</div>
              <StarRating rating={Math.round(avgRating)} />
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-sm text-blue-300">
              <div className="font-semibold text-white text-base">{reviews.length} recent reviews</div>
              <div>verified jobs</div>
              <div>Thumbtack</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10">
          {reviews.slice(0, 3).map((r, i) => (
            <div key={i} className="bg-brand-dark p-8">
              <StarRating rating={r.rating} />
              <p className="text-blue-100 text-sm leading-relaxed mt-4 mb-6">"{r.text}"</p>
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-white text-sm">{r.name}</div>
                <div className="text-brand-muted text-xs mt-0.5">{r.location} · {r.job} · {r.date}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 mt-px">
          {reviews.slice(3).map((r, i) => (
            <div key={i} className="bg-brand-dark p-8">
              <StarRating rating={r.rating} />
              <p className="text-blue-100 text-sm leading-relaxed mt-4 mb-6">"{r.text}"</p>
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-white text-sm">{r.name}</div>
                <div className="text-brand-muted text-xs mt-0.5">{r.location} · {r.job} · {r.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-brand-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-brand-orange text-xs font-semibold tracking-widest uppercase mb-3">Average Quotes</p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white">
            Honest Pricing,<br />
            <span className="text-brand-muted">No Surprises.</span>
          </h2>
          <p className="text-blue-200/70 mt-4 max-w-xl text-sm leading-relaxed">
            All quotes are based on volume and type of material. Your final quote is locked in before we lift a finger — no hidden fees, ever.
          </p>
        </div>

        <div className="border border-white/10 divide-y divide-white/10">
          <div className="grid grid-cols-3 px-6 py-3 bg-brand-navy text-xs font-semibold tracking-widest uppercase text-blue-300">
            <span>Job Type</span>
            <span className="text-center">Typical Range</span>
            <span className="text-right">Avg. Price</span>
          </div>
          {quotes.map((q, i) => {
            const avg = Math.round((q.min + q.max) / 2);
            return (
              <div
                key={i}
                className="grid grid-cols-3 px-6 py-5 items-center hover:bg-brand-navy transition-colors group"
              >
                <span className="text-white text-sm font-medium group-hover:text-brand-orange transition-colors">
                  {q.label}
                </span>
                <span className="text-center text-brand-muted text-sm font-mono">
                  ${q.min}–${q.max}
                </span>
                <span className="text-right font-display font-bold text-brand-orange text-lg">
                  ~${avg}
                </span>
              </div>
            );
          })}
        </div>

        <p className="text-brand-muted text-xs mt-4">
          * Prices are estimates for the North Texas area. Final pricing depends on load weight, material type, and access difficulty.
        </p>
      </div>
    </section>
  );
}

type FormState = {
  name: string;
  email: string;
  phone: string;
  address: string;
  jobType: string;
  message: string;
  preferredContact: string;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  jobType: "",
  message: "",
  preferredContact: "email",
};

function ContactForm() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const { error: insertError } = await supabase.from("leads").insert([
      {
        name: form.name,
        phone: form.phone,
        email: form.email,
        address: form.address || null,
        job_type: form.jobType,
        message: form.message || null,
        preferred_contact: form.preferredContact,
      },
    ]);

    setLoading(false);
    if (insertError) {
      setError(true);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-navy">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-brand-orange text-xs font-semibold tracking-widest uppercase mb-3">Get a Free Quote</p>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-6">
              Ready to Chunk<br />That Junk?
            </h2>
            <p className="text-blue-200/70 text-sm leading-relaxed mb-10">
              Fill out the form and we'll get back to you within 2 hours during business hours with a no-obligation quote. Same-day bookings available when you call.
            </p>

            <div className="flex justify-start mb-10">
              <img src={logo} alt="Chunkin Junk JS Removal logo" className="w-36 h-36 object-contain" />
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-orange/20 flex items-center justify-center shrink-0 mt-0.5 text-brand-orange">
                  📞
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Call or Text</div>
                  <a href={`tel:${PHONE_TEL}`} className="text-brand-orange hover:underline text-sm">{PHONE_DISPLAY}</a>
                  <div className="text-brand-muted text-xs mt-0.5">Mon – Sat 7am–7pm, Sun 8am–5pm</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-orange/20 flex items-center justify-center shrink-0 mt-0.5 text-brand-orange">
                  ✉️
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Email Us</div>
                  <a href={`mailto:${EMAIL}`} className="text-brand-orange hover:underline text-sm">{EMAIL}</a>
                  <div className="text-brand-muted text-xs mt-0.5">We reply within 2 business hours</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-orange/20 flex items-center justify-center shrink-0 mt-0.5 text-brand-orange">
                  📍
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Service Area</div>
                  <div className="text-blue-200/70 text-sm">Denton, Frisco, McKinney, Plano,<br />Allen, Garland & all of North Texas</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="bg-brand-dark border border-brand-orange/30 p-12 text-center flex flex-col items-center justify-center h-full min-h-80">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-display font-bold text-2xl text-white mb-3">Quote Request Sent!</h3>
                <p className="text-blue-200/70 text-sm leading-relaxed max-w-sm">
                  Thanks, <strong className="text-white">{form.name}</strong>! We'll reach out within 2 hours with your free estimate.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(emptyForm); }}
                  className="mt-8 text-brand-orange text-sm hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-brand-dark border border-white/10 p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-blue-300 mb-2 uppercase tracking-wider">Full Name *</label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full bg-brand-navy border border-white/15 text-white text-sm px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors placeholder-brand-muted"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-blue-300 mb-2 uppercase tracking-wider">Phone Number *</label>
                    <input
                      required
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(945) 000-0000"
                      className="w-full bg-brand-navy border border-white/15 text-white text-sm px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors placeholder-brand-muted"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-blue-300 mb-2 uppercase tracking-wider">Email Address *</label>
                  <input
                    required
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full bg-brand-navy border border-white/15 text-white text-sm px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors placeholder-brand-muted"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-blue-300 mb-2 uppercase tracking-wider">Pickup Address</label>
                  <input
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="123 Main St, Denton, TX"
                    className="w-full bg-brand-navy border border-white/15 text-white text-sm px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors placeholder-brand-muted"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-blue-300 mb-2 uppercase tracking-wider">Type of Job *</label>
                  <select
                    required
                    name="jobType"
                    value={form.jobType}
                    onChange={handleChange}
                    className="w-full bg-brand-navy border border-white/15 text-white text-sm px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors"
                  >
                    <option value="" disabled>Select a job type…</option>
                    <option>Single Item Pickup</option>
                    <option>Small / Medium Load</option>
                    <option>Full Truck Load</option>
                    <option>Garage Cleanout</option>
                    <option>Basement / Attic Cleanout</option>
                    <option>Estate / Whole-Home Cleanout</option>
                    <option>Construction / Renovation Debris</option>
                    <option>Yard & Storm Debris</option>
                    <option>Commercial Removal</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-blue-300 mb-2 uppercase tracking-wider">Describe Your Junk</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us what needs to go — old couch, patio furniture, renovation debris, full basement… the more detail, the better our estimate."
                    className="w-full bg-brand-navy border border-white/15 text-white text-sm px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors placeholder-brand-muted resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-blue-300 mb-3 uppercase tracking-wider">Preferred Contact Method</label>
                  <div className="flex gap-4">
                    {["email", "phone", "text"].map((method) => (
                      <label key={method} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={form.preferredContact === method}
                          onChange={handleChange}
                          className="accent-brand-orange"
                        />
                        <span className="text-sm text-blue-200 capitalize">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {error && (
                  <div className="bg-brand-orange/10 border border-brand-orange px-4 py-3 text-sm text-blue-100">
                    Something went wrong sending that online. Call or text <a href={`tel:${PHONE_TEL}`} className="text-brand-orange underline">{PHONE_DISPLAY}</a> instead.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-orange text-white font-bold text-base py-4 hover:bg-orange-500 transition-colors disabled:opacity-60 disabled:cursor-wait"
                >
                  {loading ? "Sending…" : "Send My Quote Request →"}
                </button>

                <p className="text-brand-muted text-xs text-center">
                  No spam. We use your info only to follow up on your quote.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-brand-muted">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Chunkin Junk logo" className="w-9 h-9 object-contain rounded-full" />
          <span className="text-white font-display font-bold">Chunkin Junk JS Removal</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          <span>Licensed & Insured</span>
          <span>·</span>
          <span>North Texas</span>
          <span>·</span>
          <a href={`tel:${PHONE_TEL}`} className="hover:text-brand-orange transition-colors">{PHONE_DISPLAY}</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-light">
      <NavBar />
      <Hero />
      <Services />
      <Reviews />
      <Pricing />
      <ContactForm />
      <Footer />
    </div>
  );
}
