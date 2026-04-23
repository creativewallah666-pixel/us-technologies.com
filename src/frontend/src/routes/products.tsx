import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BatteryLow,
  CheckCircle2,
  Droplets,
  FlaskConical,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sprout,
  Wrench,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  { icon: CheckCircle2, text: "Reduces water hardness and scaling" },
  { icon: CheckCircle2, text: "Improves irrigation pipe efficiency" },
  { icon: CheckCircle2, text: "Promotes better crop growth" },
  { icon: CheckCircle2, text: "Chemical-free and eco-friendly" },
];

const steps = [
  {
    icon: Droplets,
    step: "Step 1",
    title: "Hard Water Enters the System",
    desc: "Water with minerals and scaling agents flows in from your source — borewell, canal, or municipal supply.",
  },
  {
    icon: Zap,
    step: "Step 2",
    title: "Electromagnetic Field Conditions the Water",
    desc: "Our advanced electromagnetic coils neutralize calcium and magnesium ions naturally — no chemicals, no salt.",
  },
  {
    icon: Sprout,
    step: "Step 3",
    title: "Clean Conditioned Water Flows to Your Farm",
    desc: "Softened water reaches your crops with better absorption, no scale buildup, and healthier soil hydration.",
  },
];

const benefitCards = [
  {
    icon: FlaskConical,
    title: "No Chemicals Needed",
    desc: "100% safe for crops, soil, and the environment. Your produce stays pure and natural.",
  },
  {
    icon: BatteryLow,
    title: "No Electricity Required",
    desc: "Runs entirely on water pressure. Zero running cost — saves your electricity bill every month.",
  },
  {
    icon: Wrench,
    title: "Easy Installation",
    desc: "Fits directly on your existing pipes. No plumbing changes, no downtime on your farm.",
  },
  {
    icon: ShieldCheck,
    title: "Low Maintenance",
    desc: "Install once, works for years. Just a simple visual check once a year is all it needs.",
  },
];

const specs = [
  { label: "Technology", value: "Electromagnetic Water Conditioning" },
  { label: "Installation", value: "Direct pipe fitting (no cutting)" },
  { label: "Compatible with", value: "Drip, sprinkler, flood irrigation" },
  { label: "Power Required", value: "None (zero electricity)" },
  { label: "Maintenance", value: "Annual visual inspection" },
  {
    label: "Suitable For",
    value: "All water types (hard / brackish / municipal)",
  },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col" data-ocid="products.page">
      {/* SECTION 1 — HERO HEADER */}
      <section
        className="relative py-20 lg:py-28 overflow-hidden gradient-agriculture"
        data-ocid="products.hero_section"
      >
        {/* subtle leaf pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, oklch(0.90 0.12 142 / 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, oklch(0.80 0.18 100 / 0.3) 0%, transparent 40%)",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 mb-8 text-sm font-body"
            aria-label="Breadcrumb"
          >
            <Link
              to="/"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
              data-ocid="products.breadcrumb_home_link"
            >
              Home
            </Link>
            <ArrowRight className="w-3.5 h-3.5 text-primary-foreground/50" />
            <span className="text-primary-foreground font-medium">
              Our Product
            </span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <Badge className="mb-5 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 font-body text-xs tracking-widest uppercase px-4 py-1.5">
              Agriculture Solution
            </Badge>
            <h1 className="font-display font-bold text-4xl lg:text-6xl text-primary-foreground mb-4 leading-tight">
              Greener Advance <br className="hidden lg:block" />
              Water Conditioner
            </h1>
            <p className="font-body text-xl text-primary-foreground/85 max-w-xl leading-relaxed">
              The Chemical-Free Solution for Better Farming
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — PRODUCT SPOTLIGHT */}
      <section
        className="py-16 lg:py-24 bg-background"
        data-ocid="products.spotlight_section"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image — top on mobile, left on desktop */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-warm border border-border">
                <img
                  src="/assets/product.jpg"
                  alt="Greener Advance Water Conditioner product"
                  className="w-full h-auto object-cover aspect-[4/3]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/assets/generated/greener-product-agri.dim_800x600.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
              </div>
            </motion.div>

            {/* Text — bottom on mobile, right on desktop */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="order-2 lg:order-2 space-y-6"
            >
              <div>
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-primary leading-tight mb-3">
                  Greener Advance Water Conditioner
                </h2>
                <Badge className="bg-primary/10 text-primary border-primary/30 font-body text-sm px-3 py-1">
                  100% Chemical-Free ✓
                </Badge>
              </div>

              <p className="font-body text-muted-foreground leading-relaxed text-base">
                Greener Advance Water Conditioner is specially designed for
                Indian agriculture. It uses advanced electromagnetic technology
                to condition hard water — no chemicals, no electricity, no
                maintenance.
              </p>

              <ul className="space-y-3">
                {features.map((feat) => (
                  <li
                    key={feat.text}
                    className="flex items-center gap-3 font-body text-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{feat.text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth font-body px-7"
                    data-ocid="products.get_quote_button"
                  >
                    Get a Free Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <a
                  href="https://wa.me/917972914426"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="products.whatsapp_button"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-primary/40 text-primary hover:bg-primary/10 transition-smooth font-body px-7"
                  >
                    <MessageCircle className="mr-2 w-4 h-4" />
                    Ask on WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — HOW IT WORKS */}
      <section
        className="py-16 lg:py-24 bg-muted/30 border-y border-border"
        data-ocid="products.how_it_works_section"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-3">
              How Greener Water Conditioner Works
            </h2>
            <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
              Simple 3-step process that runs automatically, 24/7
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
            {steps.map((step, i) => (
              <div key={step.step} className="relative flex items-stretch">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="bg-card border border-border rounded-2xl p-7 flex flex-col items-start w-full hover:border-primary/30 hover:shadow-warm transition-smooth"
                  data-ocid={`products.how_step.${i + 1}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-body text-xs font-semibold text-primary uppercase tracking-widest mb-2">
                    {step.step}
                  </span>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>

                {/* Arrow connector — visible on md+ between steps */}
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-primary/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — BENEFITS GRID */}
      <section
        className="py-16 lg:py-24 bg-background"
        data-ocid="products.benefits_section"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-3">
              What Makes It Different?
            </h2>
            <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
              Engineered for the real challenges farmers face every day
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="bg-card border-t-4 border-t-primary border border-border rounded-xl p-6 hover:shadow-warm transition-smooth"
                data-ocid={`products.benefit_card.${i + 1}`}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <card.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-base text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — FARM USAGE PHOTO */}
      <section
        className="relative min-h-[340px] lg:min-h-[420px] flex items-center overflow-hidden"
        data-ocid="products.farm_photo_section"
      >
        <img
          src="/assets/farm-installation-1.png"
          alt="Farm installation in progress"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "/assets/generated/greener-farm-installation.dim_1200x600.jpg";
          }}
        />
        <div className="absolute inset-0 bg-foreground/65" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display font-bold text-3xl lg:text-5xl text-primary-foreground mb-4 leading-tight">
              Trusted by Farmers from Karnataka to Maharashtra
            </h2>
            <p className="font-body text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Our installations are active across drip irrigation, sprinkler,
              and flood irrigation systems
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 — TECHNICAL SPECS */}
      <section
        className="py-16 lg:py-20 bg-primary/5 border-y border-primary/15"
        data-ocid="products.specs_section"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-2">
              Technical Specifications
            </h2>
            <p className="font-body text-muted-foreground">
              Simple, proven, and built for Indian farm conditions
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto bg-card rounded-2xl border border-border overflow-hidden shadow-subtle">
            {specs.map((spec, i) => (
              <div
                key={spec.label}
                className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 px-6 py-4 ${
                  i !== specs.length - 1 ? "border-b border-border" : ""
                } ${i % 2 === 0 ? "bg-muted/20" : "bg-card"}`}
                data-ocid={`products.spec_row.${i + 1}`}
              >
                <span className="font-body font-semibold text-sm text-primary sm:w-52 shrink-0">
                  {spec.label}
                </span>
                <span className="font-body text-sm text-foreground">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — CTA */}
      <section
        className="py-16 lg:py-24 bg-primary"
        data-ocid="products.cta_section"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="space-y-6"
          >
            <h2 className="font-display font-bold text-3xl lg:text-5xl text-primary-foreground leading-tight">
              Ready to Improve Your Farm's Water Quality?
            </h2>
            <p className="font-body text-primary-foreground/80 text-lg max-w-xl mx-auto">
              Talk to our team — we'll find the right setup for your farm size
              and water source.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a href="tel:+917972914426" data-ocid="products.call_button">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-smooth font-body font-semibold px-8"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  Call +91-7972914426
                </Button>
              </a>
              <a
                href="https://wa.me/917972914426"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="products.cta_whatsapp_button"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-smooth font-body font-semibold px-8"
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  WhatsApp Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
