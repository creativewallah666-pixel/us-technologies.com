import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Product", to: "/product" },
  { label: "Benefits", to: "/benefits" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";
  const whatsappUrl =
    "https://wa.me/917972914426?text=Hi%20I%20want%20to%20know%20about%20Greener%20Advance%20Water%20Conditioner";

  return (
    <footer
      className="text-white"
      style={{ background: "oklch(0.22 0.08 142)" }}
      data-ocid="footer"
    >
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 rounded-xl overflow-hidden border-2 border-white/20 shadow-warm">
                <img
                  src="/assets/logo.jpg"
                  alt="US Technologies Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-display font-bold text-xl tracking-tight text-white">
                  US Technologies
                </p>
                <p className="text-xs font-body text-white/70 mt-0.5">
                  Smart Water Solutions for Agriculture
                </p>
              </div>
            </div>
            <p className="text-sm font-body leading-relaxed max-w-xs text-white/75">
              Greener Advance Water Conditioner — a chemical-free solution to
              reduce water hardness, improve soil health, and boost crop yield
              across Indian farms.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/25 text-white/85 text-xs font-body font-medium bg-white/10">
                🌿 Made in India
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/25 text-white/85 text-xs font-body font-medium bg-white/10">
                Chemical-Free ✓
              </span>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-body font-semibold text-sm transition-smooth hover:opacity-90 shadow-warm"
              style={{ background: "#25D366", color: "#fff" }}
              data-ocid="footer.whatsapp_button"
            >
              <FaWhatsapp className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-sm text-white uppercase tracking-widest border-b border-white/20 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm font-body text-white/70 hover:text-white transition-smooth flex items-center gap-1.5 group"
                    data-ocid={`footer.link.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/80 group-hover:bg-white transition-smooth" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-sm text-white uppercase tracking-widest border-b border-white/20 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white/60 mt-0.5 shrink-0" />
                <span className="text-sm font-body text-white/75 leading-snug">
                  Kupwad MIDC, Sangli – 416436
                  <br />
                  Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white/60 shrink-0" />
                <a
                  href="tel:+917972914426"
                  className="text-sm font-body text-white/75 hover:text-white transition-smooth"
                >
                  +91 7972914426
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white/60 shrink-0" />
                <a
                  href="mailto:info@ustechnologies.com"
                  className="text-sm font-body text-white/75 hover:text-white transition-smooth break-all"
                >
                  info@ustechnologies.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t border-white/15 px-6 py-4"
        style={{ background: "oklch(0.18 0.06 142)" }}
      >
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-xs font-body text-white/60">
            © {year} US Technologies. All rights reserved. | Greener Advance
            Water Conditioner | Made in India 🌿
          </p>
          <p className="text-xs font-body text-white/50">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white underline transition-smooth"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
