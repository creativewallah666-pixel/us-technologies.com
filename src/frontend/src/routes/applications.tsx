import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const galleryPhotos = [
  {
    src: "/assets/farm-installation-1.png",
    caption: "Field Installation — Karnataka, 2016",
    description:
      "Two farmers with Greener unit installed on farm water supply pipe",
  },
  {
    src: "/assets/farm-installation-2.png",
    caption: "Industrial Installation — Raibag, Karnataka",
    description:
      "Multiple Greener units installed on large agricultural water system",
  },
  {
    src: "/assets/farmer-testimonial.png",
    caption: "Happy Farmer — Karnataka, 2018",
    description:
      "Farm owner with Greener Advanced Water Conditioner installed on his field",
  },
  {
    src: "/assets/product.jpg",
    caption: "Greener Advance Water Conditioner",
    description:
      "Our flagship product — designed for agriculture water conditioning",
  },
];

const installTypes = [
  { emoji: "🚜", label: "Drip Irrigation Systems" },
  { emoji: "💦", label: "Sprinkler Systems" },
  { emoji: "🌊", label: "Flood/Channel Irrigation" },
  { emoji: "🏭", label: "Farm Equipment & Pumps" },
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col" data-ocid="gallery.page">
      {/* Hero */}
      <section
        className="py-24 lg:py-32 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.36 0.12 142) 0%, oklch(0.52 0.14 142) 50%, oklch(0.64 0.13 155) 100%)",
        }}
        data-ocid="gallery.hero_section"
      >
        {/* Subtle leaf-like decorative overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, oklch(0.95 0.05 100) 0%, transparent 60%), radial-gradient(circle at 80% 20%, oklch(0.90 0.08 150) 0%, transparent 50%)",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block mb-5 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-xs font-body font-semibold tracking-widest uppercase">
              Photo Gallery
            </span>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white mb-5 leading-tight">
              Our Farm Installations
            </h1>
            <p className="font-body text-lg text-white/80 leading-relaxed">
              Real installations across India — see Greener in action
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section
        className="py-20 bg-background"
        data-ocid="gallery.photos_section"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 xl:gap-8 max-w-5xl mx-auto">
            {galleryPhotos.map((photo, i) => (
              <motion.div
                key={photo.src}
                className="group rounded-2xl overflow-hidden bg-card border border-border shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                data-ocid={`gallery.item.${i + 1}`}
              >
                {/* Image */}
                <div className="overflow-hidden bg-muted">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-64 object-cover transition-transform duration-400 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                {/* Caption */}
                <div className="p-5">
                  <h3 className="font-display font-semibold text-foreground text-base mb-1.5">
                    {photo.caption}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Types */}
      <section
        className="py-20 bg-muted/30 border-t border-border"
        data-ocid="gallery.install_types_section"
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground">
              Where We Install
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {installTypes.map((item, i) => (
              <motion.div
                key={item.label}
                className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-primary/8 border border-primary/20 hover:bg-primary/14 transition-colors duration-200"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.4 }}
                data-ocid={`gallery.install_type.${i + 1}`}
              >
                <span className="text-3xl" role="img" aria-label={item.label}>
                  {item.emoji}
                </span>
                <p className="font-body font-medium text-sm text-foreground leading-snug">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 bg-card border-t border-border"
        data-ocid="gallery.cta_section"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Interested in an installation at your farm?
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              We'll help you choose the right system and install it — anywhere
              in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth px-8 font-body w-full sm:w-auto"
                  data-ocid="gallery.contact_button"
                >
                  Contact Us
                </Button>
              </Link>
              <a
                href="https://wa.me/917972914426"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 transition-smooth px-8 font-body w-full sm:w-auto"
                  data-ocid="gallery.whatsapp_button"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 mr-2 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
