"use client";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { portfolioData } from "@/lib/content";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export function ContactSection() {
  const { personal } = portfolioData;
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setFormState("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormState("error");
      setTimeout(() => setFormState("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <Container>
        <ScrollReveal>
          <div className="bg-surface border border-white/10 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left: Info */}
              <div className="p-8 md:p-12 bg-accent/5 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Let's Connect
                  </h2>
                  <p className="text-secondary text-lg mb-12 max-w-md">
                    Ready to bring your ideas to life? Reach out through any channel below or send me a message directly.
                  </p>

                  <div className="space-y-6">
                    <a href={`mailto:${personal.email}`} className="flex items-center gap-4 text-white hover:text-accent transition-colors group">
                      <div className="p-3 bg-white/5 rounded-xl group-hover:bg-accent/20 transition-colors">
                        <Mail className="w-6 h-6" />
                      </div>
                      <span className="text-lg font-medium">{personal.email}</span>
                    </a>
                    <a href={`tel:${personal.phone}`} className="flex items-center gap-4 text-white hover:text-accent transition-colors group">
                      <div className="p-3 bg-white/5 rounded-xl group-hover:bg-accent/20 transition-colors">
                        <Phone className="w-6 h-6" />
                      </div>
                      <span className="text-lg font-medium">{personal.phone}</span>
                    </a>
                    <div className="flex items-center gap-4 text-white">
                      <div className="p-3 bg-white/5 rounded-xl">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <span className="text-lg font-medium">{personal.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-2 text-green-400">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="font-medium">{personal.availability}</span>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="p-8 md:p-12 bg-surface">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="from_name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="from_email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-white">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={formState === "loading" || formState === "success"}
                    className="w-full"
                  >
                    {formState === "loading" ? (
                      "Sending..."
                    ) : formState === "success" ? (
                      "Message Sent!"
                    ) : formState === "error" ? (
                      "Failed to Send"
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
