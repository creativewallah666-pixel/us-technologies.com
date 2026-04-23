import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Outlet } from "@tanstack/react-router";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL =
  "https://wa.me/917972914426?text=Hi%20I%20want%20to%20know%20about%20Greener%20Advance%20Water%20Conditioner";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-[69px]">
        <Outlet />
      </main>
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-[9999] group"
        data-ocid="whatsapp_floating_button"
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-40"
          style={{ background: "#25D366" }}
        />
        {/* Button */}
        <span
          className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.5)] transition-smooth group-hover:scale-110"
          style={{ background: "#25D366" }}
        >
          <FaWhatsapp className="w-7 h-7 text-white" />
        </span>
        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-body font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none shadow-warm">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
