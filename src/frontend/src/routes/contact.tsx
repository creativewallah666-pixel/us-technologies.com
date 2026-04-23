import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useInquiry } from "@/hooks/useInquiry";
import type { InquiryFormData } from "@/types";
import {
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/917972914426?text=Hi%2C%20I%20want%20to%20know%20about%20Greener%20Advance%20Water%20Conditioner%20for%20my%20farm";
const PHONE = "+91-7972914426";
const TEL = "tel:+917972914426";

type SimpleForm = { name: string; phone: string; location: string };
const defaultForm: SimpleForm = { name: "", phone: "", location: "" };

export default function ContactPage() {
  const [form, setForm] = useState<SimpleForm>(defaultForm);
  const { submitInquiry, status, reset } = useInquiry();

  function handleChange(field: keyof SimpleForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data: InquiryFormData = {
      name: form.name,
      phone: form.phone,
      email: "",
      requirementType: "agriculture",
      message: form.location,
    };
    await submitInquiry(data);
  }

  return (
    <div className="flex flex-col" data-ocid="contact.page">
      {/* SECTION 1 — HERO */}
      <section
        className="py-20 gradient-agriculture relative overflow-hidden"
        data-ocid="contact.hero_section"
      >
        {/* subtle leaf pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, oklch(0.90 0.10 142) 0%, transparent 50%), radial-gradient(circle at 80% 20%, oklch(0.75 0.12 100) 0%, transparent 40%)",
          }}
        />
        <div className="container mx-auto px-6 relative">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-sm font-semibold tracking-widest uppercase text-primary-foreground/70 mb-4">
              Contact Us
            </p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-primary-foreground leading-tight mb-4">
              Get in Touch
            </h1>
            <p className="font-body text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Talk to our team about Greener Water Conditioner for your farm
            </p>
            {/* Prominent phone */}
            <a
              href={TEL}
              className="inline-flex items-center gap-3 bg-primary-foreground/15 hover:bg-primary-foreground/25 border border-primary-foreground/30 rounded-2xl px-6 py-4 transition-smooth"
              data-ocid="contact.hero_phone_link"
            >
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs font-body text-primary-foreground/60 uppercase tracking-wider">
                  Call us now
                </p>
                <p className="font-display font-bold text-2xl text-primary-foreground">
                  {PHONE}
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — CONTACT INFO + FORM */}
      <section className="py-20 bg-background" data-ocid="contact.main_section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* LEFT — Contact Details */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div>
                <h2 className="font-display font-bold text-3xl text-foreground mb-2">
                  Contact Us
                </h2>
                <p className="font-body text-muted-foreground">
                  Reach us directly or use the enquiry form — we respond fast!
                </p>
              </div>

              {/* Contact details list */}
              <div className="space-y-5">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-widest mb-1">
                      Phone
                    </p>
                    <a
                      href={TEL}
                      className="font-body text-xl font-semibold text-foreground hover:text-primary transition-smooth"
                      data-ocid="contact.phone_link"
                    >
                      {PHONE}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-widest mb-1">
                      WhatsApp
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-foreground hover:text-primary transition-smooth"
                      data-ocid="contact.whatsapp_text_link"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-widest mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:info@ustechnologies.com"
                      className="font-body text-foreground hover:text-primary transition-smooth break-all"
                    >
                      info@ustechnologies.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-widest mb-1">
                      Address
                    </p>
                    <p className="font-body text-foreground leading-relaxed">
                      Kupwad MIDC, Sangli – 416436
                      <br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-widest mb-1">
                      Business Hours
                    </p>
                    <p className="font-body text-foreground">
                      Mon–Sat, 9am–6pm IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons — large, touch-friendly */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={TEL}
                  className="flex-1"
                  data-ocid="contact.call_now_button"
                >
                  <Button
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth font-body font-semibold text-base py-6 gap-3"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now: {PHONE}
                  </Button>
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none"
                  data-ocid="contact.whatsapp_action_button"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth font-body font-semibold text-base py-6 gap-3"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* RIGHT — Enquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {status === "success" ? (
                <div
                  className="flex flex-col items-center justify-center text-center p-12 rounded-2xl bg-card border border-primary/20 shadow-warm min-h-80"
                  data-ocid="contact.success_state"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-3">
                    Thank you!
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    We'll call you shortly. Our team will get in touch with you
                    about the Greener Advance Water Conditioner.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      reset();
                      setForm(defaultForm);
                    }}
                    className="font-body border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                    data-ocid="contact.submit_another_button"
                  >
                    Send Another Enquiry
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 rounded-2xl bg-card border border-border shadow-warm space-y-6"
                  data-ocid="contact.inquiry_form"
                >
                  <div>
                    <h2 className="font-display font-bold text-2xl text-foreground mb-1">
                      Send an Enquiry
                    </h2>
                    <p className="font-body text-sm text-muted-foreground">
                      Fill in your details — we'll contact you within minutes.
                    </p>
                  </div>

                  {/* Name */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="font-body text-sm font-semibold text-foreground"
                    >
                      Your Name{" "}
                      <span className="text-destructive" aria-hidden="true">
                        *
                      </span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="e.g. Ramesh Patil"
                      required
                      className="bg-background border-input font-body text-base py-5"
                      data-ocid="contact.name_input"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="font-body text-sm font-semibold text-foreground"
                    >
                      Your Phone Number{" "}
                      <span className="text-destructive" aria-hidden="true">
                        *
                      </span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="e.g. 9876543210"
                      required
                      className="bg-background border-input font-body text-base py-5"
                      data-ocid="contact.phone_input"
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="location"
                      className="font-body text-sm font-semibold text-foreground"
                    >
                      Your Location / Village
                    </Label>
                    <Input
                      id="location"
                      type="text"
                      value={form.location}
                      onChange={(e) => handleChange("location", e.target.value)}
                      placeholder="e.g. Sangli, Maharashtra"
                      className="bg-background border-input font-body text-base py-5"
                      data-ocid="contact.location_input"
                    />
                  </div>

                  {/* Error */}
                  {status === "error" && (
                    <p
                      className="text-sm font-body text-destructive bg-destructive/5 border border-destructive/20 rounded-lg px-4 py-3"
                      data-ocid="contact.error_state"
                    >
                      Something went wrong. Please call us directly at {PHONE}.
                    </p>
                  )}

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth font-body font-semibold text-base py-6"
                    data-ocid="contact.submit_button"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2
                          className="mr-2 w-4 h-4 animate-spin"
                          aria-hidden="true"
                        />
                        <span data-ocid="contact.loading_state">
                          Submitting...
                        </span>
                      </>
                    ) : (
                      "Submit Enquiry"
                    )}
                  </Button>

                  <p className="text-xs font-body text-muted-foreground text-center">
                    We'll call you shortly. No spam, ever.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WhatsApp CTA */}
      <section
        className="py-16 bg-primary"
        data-ocid="contact.whatsapp_cta_section"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/20 mb-6">
              <MessageCircle className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-foreground mb-3">
              Prefer WhatsApp?
            </h2>
            <p className="font-body text-primary-foreground/80 text-lg mb-8 max-w-md mx-auto">
              Send us a message and we'll get back to you within minutes
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.whatsapp_cta_button"
            >
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-smooth font-body font-bold text-base px-10 py-6 gap-3 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — Address / Map Placeholder */}
      <section
        className="py-16 bg-muted/30"
        data-ocid="contact.address_section"
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl bg-card border border-border shadow-warm overflow-hidden">
              {/* Map visual header */}
              <div className="h-36 gradient-agriculture flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_120%,oklch(0.90_0.10_142),transparent_60%)]" />
                <div className="relative flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="font-body text-sm text-primary-foreground/80 font-semibold uppercase tracking-widest">
                    Our Location
                  </span>
                </div>
              </div>
              {/* Address details */}
              <div className="px-8 py-6 space-y-1 text-center">
                <p className="font-display font-bold text-xl text-foreground">
                  US Technologies
                </p>
                <p className="font-body text-muted-foreground">
                  Kupwad MIDC, Sangli – 416436
                </p>
                <p className="font-body text-muted-foreground">
                  Maharashtra, India
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a href={TEL} data-ocid="contact.address_phone_link">
                    <Button
                      variant="outline"
                      className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth font-body gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      {PHONE}
                    </Button>
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="contact.address_whatsapp_link"
                  >
                    <Button
                      variant="outline"
                      className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth font-body gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
