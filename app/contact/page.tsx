'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    alert('Thank you for your message! We will get back to you within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-[#f8faf9] text-[#0E2C40]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0E2C40] via-[#148D8D] to-[#EFBC75] py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-35 mix-blend-soft-light">
          <div className="absolute -left-32 -top-24 h-64 w-64 rounded-full border border-white/20" />
          <div className="absolute -right-40 bottom-0 h-72 w-72 rounded-full border border-white/15" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.5fr,1fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/30 px-4 py-1.5 text-[11px] font-medium tracking-[0.18em] uppercase text-white mb-5">
                <span className="h-2 w-2 rounded-full bg-[#C1E1A7]" />
                Contact S9 Studio
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-4 leading-tight drop-shadow-md">
                Let&apos;s design the
                <span className="block text-[#C1E1A7]">workspace you imagined.</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-xl mb-6">
                Share your brief, floor plan, or idea. Our team will respond within one business day
                with next steps and a tailored consultation slot.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xs sm:text-sm font-semibold text-[#148D8D] shadow-md shadow-black/15 hover:bg-[#f5fbfb] transition"
                >
                  Book a consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="tel:+919930111780"
                  className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/10 px-6 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-white/15 transition"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call studio
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-3xl bg-white/10 border border-white/25 backdrop-blur-xl p-5 shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C1E1A7] mb-3">
                  Quick contact
                </p>
                <div className="space-y-3 text-sm text-white/95">
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#C1E1A7]" />
                    s9enterprises18@gmail.com
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#C1E1A7]" />
                    +91 99301 11780
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#C1E1A7]" />
                    Thane (West), Mumbai
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-[#C1E1A7]" />
                    Mon – Sat • 10 AM – 6 PM
                  </p>
                </div>
                <p className="mt-4 text-[11px] text-white/80">
                  Prefer WhatsApp? Mention it in your message and we&apos;ll respond there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact cards + form */}
      <section className="relative -mt-10 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Info cards row */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { icon: Mail, label: 'Email', value: 's9enterprises18@gmail.com', href: 'mailto:s9enterprises18@gmail.com' },
              { icon: Phone, label: 'Phone', value: '+91 99301 11780', href: 'tel:+919930111780' },
              { icon: MapPin, label: 'Studio', value: 'Thane (West), Mumbai' },
              { icon: Clock, label: 'Hours', value: 'Mon – Sat 10 AM – 6 PM' },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="rounded-2xl bg-white border border-[#0E2C40]/10 p-6 shadow-sm hover:border-[#148D8D]/30 transition"
              >
                <Icon className="w-6 h-6 text-[#148D8D] mb-3" />
                <p className="text-xs font-medium text-[#1A4A5A] uppercase tracking-wider mb-1">{label}</p>
                {href ? (
                  <a href={href} className="text-[#0E2C40] font-medium text-sm hover:text-[#148D8D] transition">
                    {value}
                  </a>
                ) : (
                  <p className="text-[#0E2C40] font-medium text-sm">{value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start" id="contact-form">
            {/* Form */}
            <div className="rounded-3xl bg-white border border-[#0E2C40]/10 p-8 md:p-10 shadow-xl shadow-[#0E2C40]/8">
              <h2 className="text-2xl font-bold text-[#0E2C40] mb-2">Send a message</h2>
              <p className="text-[#1A4A5A] text-sm mb-8">We reply within 24 hours.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-[#1A4A5A] uppercase tracking-wider mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-[#f8faf9] border border-[#0E2C40]/15 text-[#0E2C40] placeholder-[#1A4A5A]/60 focus:outline-none focus:border-[#148D8D] focus:ring-1 focus:ring-[#148D8D]/50 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#1A4A5A] uppercase tracking-wider mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#f8faf9] border border-[#0E2C40]/15 text-[#0E2C40] placeholder-[#1A4A5A]/60 focus:outline-none focus:border-[#148D8D] focus:ring-1 focus:ring-[#148D8D]/50 transition"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-[#1A4A5A] uppercase tracking-wider mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-xl bg-[#f8faf9] border border-[#0E2C40]/15 text-[#0E2C40] placeholder-[#1A4A5A]/60 focus:outline-none focus:border-[#148D8D] focus:ring-1 focus:ring-[#148D8D]/50 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#1A4A5A] uppercase tracking-wider mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project type or topic"
                      className="w-full px-4 py-3 rounded-xl bg-[#f8faf9] border border-[#0E2C40]/15 text-[#0E2C40] placeholder-[#1A4A5A]/60 focus:outline-none focus:border-[#148D8D] focus:ring-1 focus:ring-[#148D8D]/50 transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#1A4A5A] uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your space, budget, and timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-[#f8faf9] border border-[#0E2C40]/15 text-[#0E2C40] placeholder-[#1A4A5A]/60 focus:outline-none focus:border-[#148D8D] focus:ring-1 focus:ring-[#148D8D]/50 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#148D8D] py-3.5 text-white font-semibold hover:bg-[#1ba3a3] transition flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send message
                </button>
              </form>
            </div>

            {/* Side panel: studio map + reasons */}
            <div className="space-y-8">
              <div className="rounded-3xl overflow-hidden border border-[#0E2C40]/12 shadow-xl shadow-[#0E2C40]/12 bg-[#0E2C40]">
                <div className="relative aspect-[4/3] max-h-[400px]">
                  <iframe
                    title="S9 Enterprises Studio Location"
                    src="https://www.google.com/maps?q=Thane%20West%20Mumbai&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 backdrop-blur px-4 py-3 shadow-md shadow-[#0E2C40]/30 flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#148D8D]/10 text-[#148D8D]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#148D8D] mb-1">
                        Studio address
                      </p>
                      <p className="text-sm font-semibold text-[#0E2C40]">
                        S9 Enterprises, Thane (West), Mumbai
                      </p>
                      <p className="text-xs text-[#1A4A5A]">
                        Detailed directions shared once your consultation is booked.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-white border border-[#0E2C40]/10 p-6 shadow-sm shadow-[#0E2C40]/5">
                <h3 className="text-lg font-semibold text-[#0E2C40] mb-1">Why clients choose S9</h3>
                <p className="text-xs text-[#1A4A5A] mb-4">
                  A turnkey interior partner focused on clarity, timelines, and premium finishes.
                </p>
                <ul className="space-y-3 text-sm text-[#1A4A5A]">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#148D8D]" />
                    5-year warranty on interior projects with documented handover.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#148D8D]" />
                    Transparent BOQ, no hidden charges, and milestone-based payments.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#148D8D]" />
                    Dedicated project manager from design to final snag-free delivery.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#148D8D]" />
                    Experience across corporate offices, commercial spaces, and residences.
                  </li>
                </ul>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-[#148D8D] font-medium hover:text-[#1ba3a3] transition"
              >
                View our portfolio
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="border-t border-[#0E2C40]/10 py-12 bg-[#f0f5f4]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[#1A4A5A] text-sm">Prefer to talk? We&apos;re here for you.</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+919930111780"
              className="rounded-full bg-[#148D8D] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#1ba3a3] transition"
            >
              Call now
            </a>
            <a
              href="mailto:s9enterprises18@gmail.com"
              className="rounded-full border border-[#148D8D]/50 px-6 py-2.5 text-sm font-semibold text-[#148D8D] hover:bg-[#148D8D]/10 transition"
            >
              Email us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#0E2C40]/10 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/S9%20LOGO%20NEW.jpg%20(1).jpeg" alt="S9 Enterprises" className="h-8 w-auto object-contain" />
            <p className="text-[#1A4A5A] text-sm">© 2026 S9 Enterprises. All rights reserved.</p>
          </div>
          <div className="flex gap-8 text-sm text-[#1A4A5A]">
            <Link href="/" className="hover:text-[#148D8D] transition">Home</Link>
            <Link href="/about" className="hover:text-[#148D8D] transition">About</Link>
            <Link href="/services" className="hover:text-[#148D8D] transition">Services</Link>
            <Link href="/projects" className="hover:text-[#148D8D] transition">Projects</Link>
            <Link href="/contact" className="hover:text-[#148D8D] transition">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
