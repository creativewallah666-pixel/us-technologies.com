import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronRight,
  Droplets,
  FlaskConical,
  Leaf,
  Sprout,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { value: "1000+", label: "Farmers Served" },
  { value: "25%", label: "More Crop Yield" },
  { value: "Chemical-Free", label: "Solution" },
  { value: "Pan-India", label: "Support" },
];

const whyMatters = [
  {
    icon: Droplets,
    title: "Hard Water Damages Crops",
    desc: "Excess minerals in water block nutrients from reaching plant roots, reducing crop health and yield.",
  },
  {
    icon: FlaskConical,
    title: "Scale Clogs Irrigation Pipes",
    desc: "Scaling builds up inside pipes, reducing water flow and increasing pump load — costing you more.",
  },
  {
    icon: Zap,
    title: "Chemical Treatments Cost More",
    desc: "Farmers spend more on fertilizers due to poor water quality. Better water means less waste.",
  },
  {
    icon: Sprout,
    title: "Better Water = Better Harvest",
    desc: "Conditioned water improves soil absorption and nutrient uptake — leading to healthier, bigger crops.",
  },
];

const benefits = [
  { emoji: "🌾", label: "Higher Yield" },
  { emoji: "💧", label: "Water Saving" },
  { emoji: "⚡", label: "Less Electricity" },
  { emoji: "🌱", label: "Better Soil" },
];

const testimonials = [
  {
    photo: "/assets/farmer-testimonial.png",
    quote:
      "My crop improved after using this system. The water flows better and plants look healthier.",
    name: "Ramesh",
    location: "Karnataka",
  },
  {
    photo: null,
    quote:
      "Water problem reduced in my farm. Pipes are clean now and I save on electricity too.",
    name: "Suresh",
    location: "Maharashtra",
  },
];

export default function IndexPage() {
  return (
    <div className="flex flex-col" data-ocid="home.page">
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(155deg, oklch(0.28 0.12 142) 0%, oklch(0.38 0.14 142) 35%, oklch(0.50 0.13 100) 100%)",
        }}
        data-ocid="home.hero_section"
      >
        {/* Leaf-pattern SVG overlay */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.07]"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[
            [100, 150],
            [340, 400],
            [600, 80],
            [900, 300],
            [1200, 500],
            [250, 700],
            [750, 620],
            [1350, 200],
            [1050, 750],
            [480, 500],
          ].map(([cx, cy], i) => (
            <g
              key={`leaf-${cx}-${cy}`}
              transform={`translate(${cx}, ${cy}) rotate(${i * 36})`}
            >
              <ellipse rx="28" ry="52" fill="white" />
              <line
                x1="0"
                y1="-52"
                x2="0"
                y2="52"
                stroke="white"
                strokeWidth="1.5"
              />
            </g>
          ))}
        </svg>

        {/* Ripple rings */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {[1, 2, 3].map((i) => (
            <ellipse
              key={i}
              cx="720"
              cy="450"
              rx={200 * i}
              ry={70 * i}
              fill="none"
              stroke="white"
              strokeWidth="1"
              style={{
                animation: `ripple ${2 + i * 0.8}s ease-out infinite`,
                animationDelay: `${i * 0.6}s`,
              }}
            />
          ))}
        </svg>

        <div className="relative container mx-auto px-6 text-center z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-white/15 text-white border-white/30 font-body text-xs tracking-widest uppercase px-4 py-1.5 hover:bg-white/20">
              🌾 Trusted by 1000+ Farmers across India
            </Badge>
          </motion.div>

          <motion.h1
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight mb-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Increase Crop Yield with{" "}
            <span className="text-white/80 italic">Advanced</span> Water
            Conditioning
          </motion.h1>

          <motion.p
            className="font-body text-lg sm:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Reduce hardness, improve soil health, save water
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <a href="tel:+917972914426">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 transition-smooth px-8 py-6 text-base font-body font-semibold w-full sm:w-auto"
                data-ocid="home.call_now_button"
              >
                📞 Call Now
              </Button>
            </a>
            <a
              href="https://wa.me/917972914426?text=Hi%20I%20want%20to%20know%20about%20Greener%20Water%20Conditioner"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-primary text-white border-2 border-white/30 hover:bg-primary/90 transition-smooth px-8 py-6 text-base font-body font-semibold w-full sm:w-auto"
                data-ocid="home.whatsapp_button"
              >
                💬 WhatsApp Us
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <span className="text-xs font-body text-white/50 tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* ── QUICK STATS ── */}
      <section
        className="bg-card border-y border-border py-12"
        data-ocid="home.stats_section"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="font-display font-bold text-2xl lg:text-4xl text-primary mb-1 leading-none">
                  {stat.value}
                </div>
                <div className="text-sm font-body text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY WATER CONDITIONING MATTERS ── */}
      <section className="py-20 bg-muted/30" data-ocid="home.why_section">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-body text-primary tracking-widest uppercase mb-3">
              The Problem with Hard Water
            </p>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Why Your Water Matters for Farming
            </h2>
            <p className="font-body text-muted-foreground text-base max-w-xl mx-auto">
              Most farmers don't realise that hard water is quietly reducing
              their yield and increasing costs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyMatters.map((item, i) => (
              <motion.div
                key={item.title}
                className="p-6 rounded-2xl bg-card border-2 border-primary/15 hover:border-primary/35 transition-smooth group shadow-warm"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-base text-foreground mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT PREVIEW CTA ── */}
      <section
        className="py-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.30 0.10 42) 0%, oklch(0.38 0.12 80) 50%, oklch(0.36 0.13 142) 100%)",
        }}
        data-ocid="home.product_cta_section"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-body text-white/60 tracking-widest uppercase mb-3">
                Our Flagship Product
              </p>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-5 leading-tight">
                Introducing Greener Advance Water Conditioner
              </h2>
              <p className="font-body text-white/75 text-base leading-relaxed mb-8 max-w-md">
                A chemical-free, eco-friendly solution designed for Indian
                agriculture. Protect your pipes, improve irrigation, and grow
                more with every drop.
              </p>
              <Link to="/product">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 transition-smooth px-8 font-body font-semibold group"
                  data-ocid="home.see_product_button"
                >
                  See How It Works
                  <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-white/10 blur-xl" />
                <div className="relative w-72 sm:w-80 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-white/5">
                  <img
                    src="/assets/product.jpg"
                    alt="Greener Advance Water Conditioner"
                    className="w-full h-72 sm:h-80 object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "/assets/generated/product-agri-system.dim_800x800.jpg";
                    }}
                  />
                  <div className="px-5 py-4 bg-white/10 backdrop-blur-sm">
                    <p className="text-white font-display font-semibold text-sm">
                      Greener Advance Water Conditioner
                    </p>
                    <p className="text-white/60 font-body text-xs mt-0.5">
                      Chemical-Free · Eco-Friendly · Made in India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MINI BENEFITS STRIP ── */}
      <section
        className="py-14 bg-background border-y border-border"
        data-ocid="home.benefits_strip_section"
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="flex flex-col items-center gap-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-body text-primary tracking-widest uppercase">
              Key Benefits
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.label}
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-primary/10 border-2 border-primary/20 text-foreground font-body font-medium text-sm hover:bg-primary/20 hover:border-primary/40 transition-smooth cursor-default"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <span className="text-base">{b.emoji}</span>
                  {b.label}
                </motion.div>
              ))}
            </div>
            <Link to="/benefits" data-ocid="home.see_all_benefits_link">
              <span className="font-body text-sm text-primary hover:text-primary/80 transition-colors duration-200 flex items-center gap-1 font-medium">
                See all benefits <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SOCIAL PROOF / MINI TESTIMONIALS ── */}
      <section className="py-20 bg-card" data-ocid="home.testimonials_section">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-body text-primary tracking-widest uppercase mb-3">
              Real Farmer Results
            </p>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground">
              What Farmers Are Saying
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="p-6 rounded-2xl bg-background border-2 border-primary/15 shadow-warm flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                data-ocid={`home.testimonial.${i + 1}`}
              >
                <p className="font-body text-foreground text-base leading-relaxed italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 mt-auto pt-2 border-t border-border">
                  {t.photo ? (
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-primary/30"
                      onError={(e) => {
                        const el = e.target as HTMLImageElement;
                        el.style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary/15 border-2 border-primary/20 flex items-center justify-center">
                      <span className="text-primary font-display font-bold text-sm">
                        {t.name[0]}
                      </span>
                    </div>
                  )}
                  <div>
                    <p className="font-display font-semibold text-sm text-foreground">
                      {t.name}
                    </p>
                    <p className="font-body text-xs text-muted-foreground">
                      {t.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/testimonials"
              data-ocid="home.read_more_testimonials_link"
            >
              <Button
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/50 transition-smooth font-body"
              >
                Read More Stories <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className="py-16 bg-muted/30 border-t border-border"
        data-ocid="home.final_cta_section"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-3">
              Ready to Transform Your Farm's Water?
            </h2>
            <p className="font-body text-muted-foreground text-base max-w-xl mx-auto mb-8">
              Talk to our team today — free consultation, quick installation,
              real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+917972914426">
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 transition-smooth px-8 font-body font-semibold w-full sm:w-auto"
                  data-ocid="home.footer_call_button"
                >
                  📞 Call +91 7972914426
                </Button>
              </a>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/50 transition-smooth px-8 font-body font-semibold w-full sm:w-auto"
                  data-ocid="home.footer_enquiry_button"
                >
                  Send an Enquiry
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
