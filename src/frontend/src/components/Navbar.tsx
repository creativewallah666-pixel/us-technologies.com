import { Button } from "@/components/ui/button";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Product", to: "/product" },
  { label: "Benefits", to: "/benefits" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pathname = location.pathname;
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional — close menu on pathname change only
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/98 backdrop-blur-md border-b border-border shadow-warm"
          : "bg-card border-b-2 border-primary/20"
      }`}
      data-ocid="navbar"
    >
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-primary/70 to-accent" />

      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group shrink-0"
          data-ocid="navbar.logo_link"
        >
          <div className="h-11 w-11 rounded-xl overflow-hidden border-2 border-primary/30 shadow-subtle group-hover:border-primary/60 transition-smooth">
            <img
              src="/assets/logo.jpg"
              alt="US Technologies Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display font-bold text-base tracking-tight text-primary">
              US Technologies
            </span>
            <span className="text-[10px] font-body text-muted-foreground tracking-wide hidden sm:block">
              Smart Water Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-0.5"
          data-ocid="navbar.desktop_nav"
        >
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-1.5 rounded-md text-sm font-body font-medium transition-smooth whitespace-nowrap ${
                  isActive
                    ? "text-primary bg-primary/10 border border-primary/20"
                    : "text-foreground hover:text-primary hover:bg-primary/8"
                }`}
                data-ocid={`navbar.link.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <a href="tel:+917972914426">
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth font-body font-semibold gap-1.5 shadow-subtle"
              data-ocid="navbar.call_now_button"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
          onClick={() => setOpen(!open)}
          type="button"
          aria-label="Toggle navigation menu"
          data-ocid="navbar.mobile_menu_toggle"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="lg:hidden bg-card border-b border-border px-4 py-4 space-y-1 shadow-warm"
          data-ocid="navbar.mobile_menu"
        >
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center px-3 py-2.5 rounded-md text-sm font-body font-medium transition-smooth ${
                  isActive
                    ? "text-primary bg-primary/10 border border-primary/20"
                    : "text-foreground hover:text-primary hover:bg-primary/8"
                }`}
                data-ocid={`navbar.mobile_link.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-border">
            <a href="tel:+917972914426" className="block">
              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth font-body font-semibold gap-2"
                data-ocid="navbar.mobile_call_now_button"
              >
                <Phone className="w-4 h-4" />
                Call Now: +91 7972914426
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
