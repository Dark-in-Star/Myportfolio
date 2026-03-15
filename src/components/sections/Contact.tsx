"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sounakguha.12345@gmail.com",
    href: "mailto:sounakguha.12345@gmail.com",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kolkata, West Bengal, India",
    href: null,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+91 98317 39043",
    href: "https://wa.me/919831739043",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Dark-in-Star", label: "GitHub", color: "hover:text-foreground hover:border-foreground/30" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sounak-guha-70075a203/", label: "LinkedIn", color: "hover:text-blue-400 hover:border-blue-400/30" },
  { icon: Instagram, href: "https://www.instagram.com/_darkinstar", label: "Instagram", color: "hover:text-pink-400 hover:border-pink-400/30" },
  { icon: MessageCircle, href: "https://t.me/Dark_InStar", label: "Telegram", color: "hover:text-cyan-400 hover:border-cyan-400/30" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Contact() {
  const { ref, controls } = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate an API call — replace with your actual send logic
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
            Let&apos;s talk
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-lg mx-auto">
            Have a project in mind, an opportunity to discuss, or just want to
            say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            variants={containerVariants}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item) => (
              <motion.div key={item.label} variants={itemVariants}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 glass rounded-xl p-4 border border-white/5 hover:border-primary/20 hover:bg-primary/5 transition-all duration-200 group"
                  >
                    <div className={`p-2.5 rounded-lg ${item.bg} mt-0.5`}>
                      <item.icon className={`w-4 h-4 ${item.color}`} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors break-all">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 glass rounded-xl p-4 border border-white/5">
                    <div className={`p-2.5 rounded-lg ${item.bg} mt-0.5`}>
                      <item.icon className={`w-4 h-4 ${item.color}`} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div variants={itemVariants}>
              <p className="text-xs text-muted-foreground mb-3 px-1">Connect</p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`flex items-center justify-center w-10 h-10 rounded-lg glass border border-white/10 text-muted-foreground transition-all duration-200 ${color}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl border border-white/5 p-6 md:p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or just say hello..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === "sent" ? (
                  "Message Sent! ✓"
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>

              {status === "sent" && (
                <p className="text-center text-sm text-emerald-400">
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
