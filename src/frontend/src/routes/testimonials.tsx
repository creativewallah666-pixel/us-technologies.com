import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import { motion } from "motion/react";

/* ── Data ── */
const photoTestimonials = [
  {
    id: "pt1",
    name: "Shri Prakash Patil",
    location: "Karnataka, 2018",
    quote:
      "After installing the Greener Water Conditioner on my farm, I noticed my crops became healthier. The water flows better through my pipes and I'm saving on fertilizer costs every month.",
    rating: 5,
    photo: "/assets/farmer-testimonial.png",
    imageLeft: true,
  },
  {
    id: "pt2",
    name: "Ravi & Suresh (Farmers Group)",
    location: "Karnataka, 2016",
    quote:
      "We installed Greener unit on our farm's main water line. The scaling in pipes reduced, and our drip irrigation is now much more efficient. Highly recommend for all farmers.",
    rating: 5,
    photo: "/assets/farm-installation-1.png",
    imageLeft: false,
  },
];

const textTestimonials = [
  {
    id: "tt1",
    name: "Mohammad Hussain",
    location: "Maharashtra",
    quote:
      "Water problem reduced in my farm. Before, we had a lot of white deposits in our pipes. Now it is clean. Our crop yield has improved noticeably.",
    rating: 5,
  },
  {
    id: "tt2",
    name: "Anita Deshmukh",
    location: "Sangli, Maharashtra",
    quote:
      "I was spending a lot on chemicals to treat my borewell water. Since installing Greener conditioner, I have saved money and my plants look much better.",
    rating: 5,
  },
  {
    id: "tt3",
    name: "Rajesh Kumar",
    location: "Kolhapur",
    quote:
      "Simple installation, no electricity needed, and it really works. My irrigation pipes used to block every few months. Now no blockage problem.",
    rating: 4,
  },
];

const stats = [
  { value: "1000+", label: "Happy Farmers" },
  { value: "Karnataka to Maharashtra", label: "Trusted Across States" },
  { value: "5-Star Rated", label: "Customer Rating" },
  { value: "Trusted Since 2008", label: "Years of Service" },
];

/* ── Star Rating ── */
function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`text-lg ${n <= count ? "text-accent" : "text-muted-foreground/30"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

/* ── Page ── */
export default function TestimonialsPage() {
  return (
    <div className="flex flex-col" data-ocid="testimonials.page">
      {/* ── HERO ── */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.42 0.14 142) 0%, oklch(0.55 0.16 142) 50%, oklch(0.46 0.12 110) 100%)",
        }}
        data-ocid="testimonials.hero_section"
      >
        {/* decorative circles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
            style={{ background: "oklch(0.75 0.15 90)" }}
          />
          <div
            className="absolute bottom-0 -left-16 w-64 h-64 rounded-full opacity-10"
            style={{ background: "oklch(0.65 0.18 160)" }}
          />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="font-body text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "oklch(0.90 0.10 90)" }}
            >
              Real Farmers · Real Results
            </p>
            <h1
              className="font-display font-bold text-5xl lg:text-6xl mb-5 leading-tight"
              style={{ color: "oklch(0.98 0.01 10)" }}
            >
              What Farmers Are Saying
            </h1>
            <p
              className="font-body text-lg max-w-xl mx-auto leading-relaxed"
              style={{ color: "oklch(0.88 0.04 142)" }}
            >
              Real results from real farmers across India
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED TESTIMONIALS WITH PHOTOS ── */}
      <section
        className="py-20 bg-background"
        data-ocid="testimonials.featured_section"
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col gap-12">
            {photoTestimonials.map((t, i) => (
              <motion.div
                key={t.id}
                className="rounded-2xl bg-card border border-border shadow-warm overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <div
                  className={`flex flex-col ${t.imageLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-0`}
                >
                  {/* Photo */}
                  <div className="md:w-2/5 flex-shrink-0">
                    <div className="relative h-64 md:h-full min-h-[260px]">
                      <img
                        src={t.photo}
                        alt={`${t.name} — farmer testimonial`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: t.imageLeft
                            ? "linear-gradient(to right, transparent 80%, oklch(0.99 0 0 / 0.4))"
                            : "linear-gradient(to left, transparent 80%, oklch(0.99 0 0 / 0.4))",
                        }}
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="md:w-3/5 flex flex-col justify-center p-8 lg:p-10">
                    <Quote
                      className="w-8 h-8 mb-4"
                      style={{ color: "oklch(0.58 0.15 142 / 0.35)" }}
                    />
                    <p className="font-body text-lg leading-relaxed mb-6 text-foreground">
                      "{t.quote}"
                    </p>
                    <StarRating count={t.rating} />
                    <div className="mt-4 border-t border-border pt-4">
                      <div className="font-display font-bold text-foreground text-lg">
                        {t.name}
                      </div>
                      <div className="font-body text-sm text-muted-foreground mt-0.5">
                        📍 {t.location}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEXT-ONLY TESTIMONIALS ── */}
      <section
        className="py-20"
        style={{ background: "oklch(0.96 0.015 120)" }}
        data-ocid="testimonials.text_section"
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2
            className="font-display font-bold text-3xl text-center text-foreground mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            More Farmer Stories
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {textTestimonials.map((t, i) => (
              <motion.div
                key={t.id}
                className="bg-card rounded-2xl border border-border shadow-warm p-6 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                data-ocid={`testimonials.item.${photoTestimonials.length + i + 1}`}
              >
                {/* Green accent bar */}
                <div
                  className="w-10 h-1.5 rounded-full mb-5"
                  style={{ background: "oklch(0.58 0.15 142)" }}
                />
                <Quote
                  className="w-5 h-5 mb-3"
                  style={{ color: "oklch(0.58 0.15 142 / 0.3)" }}
                />
                <p className="font-body text-muted-foreground leading-relaxed mb-6 flex-1 text-base">
                  "{t.quote}"
                </p>
                <div>
                  <StarRating count={t.rating} />
                  <div className="mt-3 font-display font-semibold text-foreground">
                    {t.name}
                  </div>
                  <div className="text-xs font-body text-muted-foreground mt-0.5">
                    📍 {t.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section
        className="py-12"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.42 0.14 142) 0%, oklch(0.52 0.16 132) 100%)",
        }}
        data-ocid="testimonials.stats_section"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                data-ocid={`testimonials.stat.${i + 1}`}
              >
                <div
                  className="font-display font-bold text-2xl lg:text-3xl mb-1"
                  style={{ color: "oklch(0.98 0.01 10)" }}
                >
                  {s.value}
                </div>
                <div
                  className="font-body text-sm"
                  style={{ color: "oklch(0.82 0.06 142)" }}
                >
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-24 bg-card border-t border-border"
        data-ocid="testimonials.cta_section"
      >
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4 leading-snug">
              See the Greener Advance Water Conditioner in Action
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-8 leading-relaxed">
              Join hundreds of farmers who have already improved their
              irrigation efficiency and crop yields.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/product" data-ocid="testimonials.view_product_button">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth px-8 font-body w-full sm:w-auto"
                >
                  View Product <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact" data-ocid="testimonials.contact_button">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/40 text-primary hover:bg-primary/10 transition-smooth px-8 font-body w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
