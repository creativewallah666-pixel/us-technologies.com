import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  CheckCircle2,
  Droplets,
  HandCoins,
  Lightbulb,
  MapPin,
  Phone,
  Sprout,
  Users,
  Wheat,
} from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { label: "Est.", value: "2008" },
  { label: "Location", value: "Sangli, Maharashtra" },
  { label: "Installations", value: "1000+" },
];

const problems = [
  {
    problem: "Hard borewell water damaging crops",
    solution:
      "We built a chemical-free water conditioner that removes hardness naturally",
    icon: Droplets,
  },
  {
    problem: "Scaling blocking irrigation pipes",
    solution: "Our device prevents scale buildup and keeps pipes clear",
    icon: AlertTriangle,
  },
  {
    problem: "Farmers overspending on chemicals",
    solution: "Save costs with natural electromagnetic conditioning",
    icon: HandCoins,
  },
];

const offerings = [
  {
    icon: Wheat,
    title: "Agriculture Water Solutions",
    desc: "Works with drip, sprinkler, and flood irrigation systems on any farm.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Electromagnetic conditioning technology — no chemicals, no electricity needed.",
  },
  {
    icon: Users,
    title: "Farmer Support",
    desc: "Local dealer network across Maharashtra and Karnataka for fast help.",
  },
  {
    icon: HandCoins,
    title: "Cost Savings",
    desc: "Reduce fertilizer and chemical spend from day one of installation.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col" data-ocid="about.page">
      {/* Section 1 — Hero */}
      <section
        className="py-24 lg:py-32 gradient-agriculture"
        data-ocid="about.hero_section"
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-body font-semibold text-primary-foreground/70 tracking-widest uppercase mb-4">
              US Technologies
            </p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-primary-foreground mb-5 leading-tight">
              About US Technologies
            </h1>
            <p className="font-body text-xl text-primary-foreground/80 leading-relaxed">
              Empowering Indian Farmers with Smart Water Solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2 — Our Story */}
      <section className="py-20 bg-background" data-ocid="about.story_section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Text left */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-body text-primary tracking-widest uppercase mb-3">
                Who We Are
              </p>
              <h2 className="font-display font-bold text-4xl text-foreground mb-6 leading-snug">
                Built for Indian Farmers
              </h2>
              <p className="font-body text-muted-foreground text-base leading-relaxed mb-4">
                US Technologies is a water solutions company based in Kupwad
                MIDC, Sangli, Maharashtra. We specialise in water conditioning
                systems for agriculture, helping Indian farmers grow better
                crops with cleaner, conditioned water.
              </p>
              <p className="font-body text-muted-foreground text-base leading-relaxed mb-10">
                Founded with a mission to solve the hard water problem that
                affects millions of Indian farmers, we developed the{" "}
                <span className="text-primary font-semibold">
                  Greener Advance Water Conditioner
                </span>{" "}
                — a chemical-free, eco-friendly device that improves irrigation
                water quality without any electricity or maintenance.
              </p>

              {/* Stat boxes */}
              <div className="flex flex-wrap gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col items-center bg-card border border-border rounded-xl px-6 py-4 min-w-[110px]"
                  >
                    <span className="font-display font-bold text-2xl text-primary">
                      {s.value}
                    </span>
                    <span className="font-body text-xs text-muted-foreground mt-1">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Decorative card right */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="rounded-3xl gradient-agriculture p-10 flex flex-col gap-6 shadow-warm">
                <Sprout className="w-14 h-14 text-primary-foreground/80" />
                <div>
                  <h3 className="font-display font-bold text-2xl text-primary-foreground mb-2">
                    Greener Advance Water Conditioner
                  </h3>
                  <p className="font-body text-primary-foreground/75 leading-relaxed">
                    A smart, no-maintenance device that conditions your farm's
                    water naturally — no chemicals, no electricity, no hassle.
                  </p>
                </div>
                <ul className="space-y-2">
                  {[
                    "Reduces water hardness",
                    "Prevents scale in pipes",
                    "Improves soil health",
                    "Chemical-free & eco-friendly",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 font-body text-sm text-primary-foreground/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary-foreground shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* decorative blob */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-accent/20 blur-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 — Our Mission */}
      <section
        className="py-20 gradient-agriculture"
        data-ocid="about.mission_section"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-body text-primary-foreground/70 tracking-widest uppercase mb-3">
              What We Believe
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-primary-foreground mb-8">
              Our Mission
            </h2>
            <blockquote className="max-w-3xl mx-auto border-l-4 border-primary-foreground/40 pl-6 text-left">
              <p className="font-body text-xl lg:text-2xl text-primary-foreground leading-relaxed italic">
                "To make clean, conditioned water accessible to every Indian
                farmer — so they can grow more, spend less, and farm
                sustainably."
              </p>
              <footer className="mt-4 font-body text-sm text-primary-foreground/60">
                — US Technologies, Sangli
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Section 4 — Why We Started */}
      <section className="py-20 bg-muted/30" data-ocid="about.why_section">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-body text-primary tracking-widest uppercase mb-3">
              The Story Behind Us
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground">
              The Problem We Saw
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((item, i) => (
              <motion.div
                key={item.problem}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-subtle"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                data-ocid={`about.problem_card.${i + 1}`}
              >
                <div className="bg-destructive/10 border-b border-destructive/20 p-5 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <p className="font-body text-sm font-medium text-destructive leading-relaxed">
                    {item.problem}
                  </p>
                </div>
                <div className="p-5 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — What We Offer */}
      <section
        className="py-20 bg-background"
        data-ocid="about.offerings_section"
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-body text-primary tracking-widest uppercase mb-3">
              Our Services
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground">
              What US Technologies Offers
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {offerings.map((o, i) => (
              <motion.div
                key={o.title}
                className="bg-card border border-border rounded-2xl p-7 hover:border-primary/40 transition-smooth flex gap-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                data-ocid={`about.offering_card.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <o.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                    {o.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {o.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Company Details Strip */}
      <section
        className="py-14 bg-secondary/20 border-y border-border"
        data-ocid="about.details_section"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-8 justify-center md:justify-between items-center">
            <div>
              <p className="font-display font-bold text-xl text-foreground mb-1">
                US Technologies
              </p>
              <p className="font-body text-xs text-muted-foreground tracking-wide uppercase">
                Smart Water Solutions for Agriculture
              </p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm font-body text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                Kupwad MIDC, Sangli – 416436, Maharashtra, India
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                +91-7972914426
              </span>
              <span className="flex items-center gap-1.5">
                <Sprout className="w-4 h-4 text-primary shrink-0" />
                Greener Advance Water Conditioner
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — CTA */}
      <section
        className="py-20 bg-card border-b border-border"
        data-ocid="about.cta_section"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Talk to our team about your farm's water needs
            </h2>
            <p className="font-body text-muted-foreground text-base mb-8 max-w-lg mx-auto">
              We help farmers across India get better water for better crops.
              Reach us anytime — we speak your language.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+917972914426">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth px-8 font-body"
                  data-ocid="about.call_cta_button"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  Call Now
                </Button>
              </a>
              <a
                href="https://wa.me/917972914426"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 transition-smooth px-8 font-body"
                  data-ocid="about.whatsapp_cta_button"
                >
                  💬 WhatsApp
                </Button>
              </a>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-muted/50 transition-smooth px-8 font-body"
                  data-ocid="about.contact_cta_button"
                >
                  Send Enquiry
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
