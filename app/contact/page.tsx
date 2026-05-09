'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, Instagram, Facebook, Youtube } from 'lucide-react';
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

    const to = 's9enterprises18@gmail.com';
    const subject = encodeURIComponent(
      formData.subject || 'New enquiry from S9 website'
    );
    const bodyLines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.phone ? `Phone: ${formData.phone}` : '',
      '',
      'Message:',
      formData.message,
    ].filter(Boolean);

    const body = encodeURIComponent(bodyLines.join('\n'));
    const mailtoHref = `mailto:${to}?subject=${subject}&body=${body}`;

    window.location.href = mailtoHref;
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
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-2xl">
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

            {/* Right side - Glass Effect Social Icons */}
            <div className="w-full lg:w-auto mt-8 lg:mt-0">
              <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 shadow-2xl relative overflow-hidden inline-flex flex-col gap-6">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                <div className="relative z-10 flex flex-col gap-5 items-center">
                  <h3 className="text-white font-semibold text-sm uppercase tracking-[0.2em]">Join The Vibe</h3>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/s9_interiors?igsh=eHlpcm42MHo5MWd4" target="_blank" rel="noopener noreferrer" className="h-14 w-14 rounded-2xl bg-white/15 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all hover:scale-110 shadow-lg">
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a href="https://www.facebook.com/share/1Lg6wQZFgL/" target="_blank" rel="noopener noreferrer" className="h-14 w-14 rounded-2xl bg-white/15 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all hover:scale-110 shadow-lg">
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a href="#" className="h-14 w-14 rounded-2xl bg-white/15 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all hover:scale-110 shadow-lg">
                      <Youtube className="h-6 w-6" />
                    </a>
                  </div>
                </div>
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
              {/* Map + info split card */}
              <div className="rounded-3xl border border-[#0E2C40]/12 shadow-xl shadow-[#0E2C40]/12 bg-gradient-to-br from-[#0E2C40] via-[#148D8D] to-[#EFBC75] p-[1px]">
                <div className="grid md:grid-cols-[1.1fr,1.2fr] gap-0 rounded-[1.4rem] overflow-hidden bg-white/96">
                  {/* Info side */}
                  <div className="p-5 md:p-6 flex flex-col justify-between bg-white/80">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#148D8D] mb-2">
                        Visit our studio
                      </p>
                      <h3 className="text-sm md:text-base font-semibold text-[#0E2C40] mb-3">
                        S9 Enterprises, Thane (West), Mumbai
                      </h3>
                      <ul className="space-y-2 text-xs md:text-[13px] text-[#1A4A5A]">
                        <li className="flex items-start gap-2">
                          <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-[#148D8D]" />
                          Easy access from corporate business district and Eastern Express Highway.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-[#148D8D]" />
                          Visitor parking available nearby; details shared with your appointment confirmation.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-[#148D8D]" />
                          Ideal for design discussions, material selection and project reviews.
                        </li>
                      </ul>
                    </div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Thane+West+Mumbai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-[#148D8D] hover:text-[#1ba3a3] transition"
                    >
                      Open in Google Maps
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Map side */}
                  <div className="relative">
                    <iframe
                      title="S9 Enterprises Studio Location"
                      src="https://www.google.com/maps?q=Thane%20West%20Mumbai&output=embed"
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                    <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-medium text-[#0E2C40] flex items-center gap-2 shadow-sm">
                      <MapPin className="w-3.5 h-3.5 text-[#148D8D]" />
                      Studio location
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
      <footer className="bg-white border-t border-[#0E2C40]/10 text-[#0E2C40] py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-8">
          <div>
            <img src="/S9%20LOGO%20NEW.jpg%20(1).jpeg" alt="S9 Enterprises" className="h-24 w-auto object-contain mb-3" />
            <h3 className="font-bold text-lg mb-2">S9 Enterprises</h3>
            <p className="text-[#1A4A5A] text-sm">Interior Designers & Turnkey Contractors</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase text-[#0E2C40]">Useful Links</h4>
            <ul className="space-y-2 text-sm text-[#1A4A5A]">
              <li><Link href="/" className="hover:text-[#148D8D] transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#148D8D] transition">About</Link></li>
              <li><Link href="/services" className="hover:text-[#148D8D] transition">Services</Link></li>
              <li><Link href="/projects" className="hover:text-[#148D8D] transition">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-[#148D8D] transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase text-[#0E2C40]">Services</h4>
            <ul className="space-y-2 text-sm text-[#1A4A5A]">
              <li><Link href="/services" className="hover:text-[#148D8D] transition">Interior Design</Link></li>
              <li><Link href="/services" className="hover:text-[#148D8D] transition">Space Planning</Link></li>
              <li><Link href="/services" className="hover:text-[#148D8D] transition">Turnkey Execution</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase text-[#0E2C40]">Contact</h4>
            <div className="space-y-2 text-sm text-[#1A4A5A]">
              <p>+91 99301 11780</p>
              <p>s9enterprises18@gmail.com</p>
              <p>Thane (West), Mumbai</p>
            </div>
            
            {/* Footer Socials */}
            <div className="flex gap-4 mt-6">
              <a href="https://www.instagram.com/s9_interiors?igsh=eHlpcm42MHo5MWd4" target="_blank" rel="noopener noreferrer" className="h-11 w-11 rounded-[14px] bg-[#f2f4f7] border border-[#e4e7ec] flex items-center justify-center text-[#5a809e] hover:bg-[#e4e7ec] hover:text-[#3d5a73] transition-all shadow-sm">
                <Instagram className="h-[22px] w-[22px]" strokeWidth={2} />
              </a>
              <a href="https://www.facebook.com/share/1Lg6wQZFgL/" target="_blank" rel="noopener noreferrer" className="h-11 w-11 rounded-[14px] bg-[#f2f4f7] border border-[#e4e7ec] flex items-center justify-center text-[#5a809e] hover:bg-[#e4e7ec] hover:text-[#3d5a73] transition-all shadow-sm">
                <Facebook className="h-[22px] w-[22px]" strokeWidth={2} />
              </a>
              <a href="#" className="h-11 w-11 rounded-[14px] bg-[#f2f4f7] border border-[#e4e7ec] flex items-center justify-center text-[#5a809e] hover:bg-[#e4e7ec] hover:text-[#3d5a73] transition-all shadow-sm">
                <Youtube className="h-[22px] w-[22px]" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#0E2C40]/10 pt-8 text-center text-[#1A4A5A] text-sm">
          <p>&copy; 2026 S9 Enterprises. All rights reserved. Interior Designers & Turnkey Contractors</p>
        </div>
      </footer>
    </div>
  );
}
