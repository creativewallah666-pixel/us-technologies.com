import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Droplets,
  Filter,
  Shield,
  Thermometer,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    step: "01",
    icon: Droplets,
    title: "Raw Water Intake",
    desc: "Hard or contaminated water enters the system through the inlet valve with high TDS, calcium, magnesium, and other dissolved minerals.",
  },
  {
    step: "02",
    icon: Filter,
    title: "Multi-Media Filtration",
    desc: "Water passes through layered filtration media — sand, activated carbon, and fine gravel — removing suspended solids and organic matter.",
  },
  {
    step: "03",
    icon: Zap,
    title: "Ion Exchange Process",
    desc: "Resin beads swap calcium and magnesium ions with sodium ions through a precise ion-exchange reaction, eliminating hardness at the molecular level.",
  },
  {
    step: "04",
    icon: Shield,
    title: "Scale & Corrosion Inhibition",
    desc: "Treated water passes through an inhibitor stage that coats pipe surfaces with a protective layer, preventing scale deposition and corrosion.",
  },
  {
    step: "05",
    icon: Thermometer,
    title: "TDS Calibration",
    desc: "A blending valve precisely adjusts total dissolved solids to the target level — ensuring mineral balance for taste, safety, and process requirements.",
  },
  {
    step: "06",
    icon: BarChart3,
    title: "Quality Verified Output",
    desc: "Conditioned water exits at the exact specification: correct TDS, hardness removed, pH balanced, ready for home, farm, or industrial use.",
  },
];

const benefits = [
  {
    title: "TDS Management",
    value: "20–500 ppm",
    label: "Target range achieved",
  },
  {
    title: "Scale Prevention",
    value: "99.8%",
    label: "Calcium / magnesium removal",
  },
  { title: "Pipe Protection", value: "5×", label: "Longer pipeline lifespan" },
  {
    title: "Energy Savings",
    value: "30%",
    label: "Reduction in heating costs",
  },
];

export default function TechnologyPage() {
  return (
    <div className="flex flex-col" data-ocid="technology.page">
      {/* Hero */}
      <section
        className="py-24 lg:py-32 bg-card border-b border-border"
        data-ocid="technology.hero_section"
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge
              variant="outline"
              className="mb-6 border-primary/40 text-primary bg-primary/10 font-body text-xs tracking-widest uppercase px-4 py-1.5"
            >
              The Science
            </Badge>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              How Our <span className="text-primary">Technology Works</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              US Technologies systems use a multi-stage conditioning process
              combining ion exchange, media filtration, and precision TDS
              calibration — no harsh chemicals, no waste water, and no
              compromise on quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section
        className="py-24 bg-background"
        data-ocid="technology.process_section"
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-body text-primary tracking-widest uppercase mb-3">
              Step by Step
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground">
              The Conditioning Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-smooth group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-display font-bold text-4xl text-muted/30 select-none">
                    {s.step}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Metrics */}
      <section
        className="py-24 bg-muted/30"
        data-ocid="technology.benefits_section"
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-body text-primary tracking-widest uppercase mb-3">
              Measured Results
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground">
              Proven Performance
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="p-8 rounded-2xl bg-card border border-border text-center hover:border-primary/30 transition-smooth"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="font-display font-bold text-4xl text-primary mb-2">
                  {b.value}
                </div>
                <div className="font-display font-semibold text-lg text-foreground mb-1">
                  {b.title}
                </div>
                <div className="font-body text-sm text-muted-foreground">
                  {b.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eco-friendly callout */}
      <section
        className="py-24 bg-card border-y border-border"
        data-ocid="technology.eco_section"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
                Zero Chemicals. Zero Compromise.
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                Our proprietary conditioning technology relies entirely on
                physical and ion-exchange processes. No chlorine, no harsh
                acids, no polymer additives. Safe for people, safe for soil,
                safe for the planet.
              </p>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth px-8 font-body"
                  data-ocid="technology.cta_button"
                >
                  Learn More From Our Engineers
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
