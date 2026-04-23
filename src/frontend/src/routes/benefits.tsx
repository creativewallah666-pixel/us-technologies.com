import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  Leaf,
  Sprout,
  Wallet,
  XCircle,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const benefitCards = [
  {
    icon: Sprout,
    emoji: "🌾",
    title: "Higher Crop Yield",
    desc: "Better water quality means better nutrient absorption and stronger plants. Your crops grow healthier and produce more — season after season.",
    stat: "+25%",
    statLabel: "Average yield increase",
  },
  {
    icon: Leaf,
    emoji: "🌱",
    title: "Improved Soil Health",
    desc: "Conditioned water reduces soil crust and improves water penetration. Your soil stays loose, breathable, and ready for healthy root growth.",
    stat: "2×",
    statLabel: "Better water absorption",
  },
  {
    icon: Wallet,
    emoji: "💰",
    title: "Less Fertilizer Waste",
    desc: "Plants absorb nutrients more efficiently, so less fertilizer is needed. You save money and reduce chemical runoff in your fields.",
    stat: "30%",
    statLabel: "Less fertilizer needed",
  },
  {
    icon: Zap,
    emoji: "⚡",
    title: "Saves Electricity & Water",
    desc: "No scale buildup means pumps work more efficiently. Your pump uses less energy, and conditioned water spreads more evenly — saving both electricity and water.",
    stat: "20%",
    statLabel: "Less water usage",
  },
];

const stats = [
  { value: "25%", label: "Higher Yield" },
  { value: "30%", label: "Less Fertilizer" },
  { value: "20%", label: "Water Savings" },
  { value: "Zero", label: "Chemicals" },
];

const comparison = [
  {
    before: "Scale builds up in pipes",
    after: "Clear pipes, full water flow",
  },
  {
    before: "Hard water blocks nutrients",
    after: "Minerals fully absorbed by plants",
  },
  {
    before: "High fertilizer cost",
    after: "30% less fertilizer needed",
  },
  {
    before: "Pump works harder, uses more power",
    after: "Pump runs efficiently, saves electricity",
  },
  {
    before: "Crops grow slowly",
    after: "Healthier, faster growth",
  },
];

export default function BenefitsPage() {
  return (
    <div className="flex flex-col" data-ocid="benefits.page">
      {/* Hero */}
      <section
        className="py-24 lg:py-32 bg-card border-b border-border"
        data-ocid="benefits.hero_section"
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
              For Farmers
            </Badge>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Benefits for <span className="text-primary">Farmers</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              See how Greener Advance Water Conditioner helps your farm produce
              more, spend less, and grow stronger — without any chemicals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4 Benefit Cards */}
      <section
        className="py-24 bg-background"
        data-ocid="benefits.cards_section"
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
              Real Results
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground">
              What Changes on Your Farm
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefitCards.map((b, i) => (
              <motion.div
                key={b.title}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-smooth group"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                data-ocid={`benefits.benefit_card.${i + 1}`}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-smooth">
                    <b.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                      <h3 className="font-display font-bold text-xl text-foreground">
                        {b.emoji} {b.title}
                      </h3>
                      <span className="font-display font-bold text-2xl text-primary shrink-0">
                        {b.stat}
                      </span>
                    </div>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-1">
                      {b.desc}
                    </p>
                    <p className="font-body text-xs text-primary/70 font-medium">
                      {b.statLabel}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-primary" data-ocid="benefits.stats_section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                data-ocid={`benefits.stat.${i + 1}`}
              >
                <div className="font-display font-bold text-4xl lg:text-5xl text-primary-foreground mb-1">
                  {s.value}
                </div>
                <div className="font-body text-sm text-primary-foreground/80 uppercase tracking-wide">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before vs After Comparison */}
      <section
        className="py-24 bg-muted/30"
        data-ocid="benefits.comparison_section"
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-body text-primary tracking-widest uppercase mb-3">
              The Difference
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground">
              Before vs After Greener
            </h2>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-border shadow-subtle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Table Header */}
            <div className="grid grid-cols-2 bg-card border-b border-border">
              <div className="px-6 py-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-destructive shrink-0" />
                <span className="font-display font-bold text-lg text-foreground">
                  Before Greener
                </span>
              </div>
              <div className="px-6 py-4 flex items-center gap-2 border-l border-border bg-primary/5">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="font-display font-bold text-lg text-primary">
                  After Greener
                </span>
              </div>
            </div>

            {comparison.map((row, i) => (
              <div
                key={row.before}
                className={`grid grid-cols-2 border-b border-border last:border-b-0 ${i % 2 === 0 ? "bg-background" : "bg-card"}`}
                data-ocid={`benefits.comparison_row.${i + 1}`}
              >
                <div className="px-6 py-4 flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-destructive/60 shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-muted-foreground leading-snug">
                    {row.before}
                  </span>
                </div>
                <div className="px-6 py-4 flex items-start gap-2.5 border-l border-border bg-primary/5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-foreground font-medium leading-snug">
                    {row.after}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-24 bg-card border-t border-border"
        data-ocid="benefits.cta_section"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4">
                Ready to Transform Your Farm?
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                Join hundreds of farmers across India who are already growing
                more with less. No chemicals, no hassle — just better water.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/product">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth px-8 font-body w-full sm:w-auto"
                    data-ocid="benefits.see_product_button"
                  >
                    See the Product
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/40 text-primary hover:bg-primary/5 transition-smooth px-8 font-body w-full sm:w-auto"
                    data-ocid="benefits.contact_button"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
