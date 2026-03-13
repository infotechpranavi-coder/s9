'use client';

import Link from 'next/link';
import { ChevronRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

const PROCESS_STEPS = [
  { num: '01', title: 'Consultation', desc: 'Understanding your vision and requirements' },
  { num: '02', title: 'Requirement Analysis', desc: 'Detailed assessment of space and needs' },
  { num: '03', title: 'Space Planning', desc: 'Creating optimized layouts and designs' },
  { num: '04', title: 'Concept Design', desc: 'Developing visual concepts and mood boards' },
  { num: '05', title: 'Material Selection', desc: 'Choosing premium materials and finishes' },
  { num: '06', title: 'Execution & Delivery', desc: 'Professional execution and project completion' },
];

const WHY_CHOOSE = [
  { title: '5 Years Warranty', desc: 'Comprehensive 5-year warranty policies on interior projects for long-term peace of mind.' },
  { title: 'Latest Technologies', desc: 'AI-powered space planning with VR/AR walkthroughs for immersive design visualization.' },
  { title: 'High-Quality Designs', desc: 'Aesthetic, functional and market-relevant interior concepts tailored to your brand.' },
  { title: 'Transparent Pricing', desc: 'Detailed, itemized quotations with no hidden costs or last-minute surprises.' },
  { title: 'Professional Team', desc: 'Skilled architects, supervisors and certified craftsmen managing end-to-end execution.' },
  { title: 'Award-Winning Work', desc: 'Recognised for interiors that blend innovation, sustainability and refined aesthetics.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8faf9] text-[#0E2C40]">
      <Navbar />

      {/* Hero */}
      <section className="relative py-24 border-b border-[#0E2C40]/10 overflow-hidden min-h-[380px] flex flex-col justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          aria-hidden
        >
          <source src="/7578542-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0E2C40]/60" aria-hidden />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white mb-8 transition">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-md"
          >
            Welcome to <span className="text-[#7dd3d3]">S9 Enterprises</span>
          </motion.h1>
          <p className="text-xl text-white/95 max-w-2xl drop-shadow-sm">
            Your turnkey partner for interior design across corporate, commercial, and residential projects.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#0E2C40]">Who We Are</h2>
              <p className="text-lg text-[#1A4A5A] leading-relaxed">
                We have introduced S9 Enterprises as a turnkey contractor for interior design requirements
                across corporate, commercial and residential projects.
              </p>
              <p className="text-lg text-[#1A4A5A] leading-relaxed">
                We are in the business of delivering value-added interior design and execution for a wide
                profile of clients, managed by experienced engineers and supervisors along with a strong
                skilled force in civil works, carpentry, gypsum, POP, soft furnishings, electrical, flooring,
                painting and fabrication.
              </p>
              <p className="text-lg text-[#1A4A5A] leading-relaxed">
                Using the finest materials and superior workmanship, we create work and living spaces that
                enhance quality of life while aligning with brand, function and long-term maintenance needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#148D8D] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1ba3a3] transition"
              >
                Get in Touch <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#0E2C40]/10 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop"
                alt="S9 Enterprises interior project"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-[#f0f5f4]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E2C40] mb-4">Our Design Process</h2>
          <p className="text-[#1A4A5A] max-w-2xl mb-12">
            From concept to handover, we follow a structured process to deliver exceptional results.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border-l-4 border-[#148D8D] pl-6 py-2"
              >
                <div className="text-4xl font-bold text-[#148D8D]/40 mb-2">{step.num}</div>
                <h3 className="text-xl font-semibold text-[#0E2C40] mb-2">{step.title}</h3>
                <p className="text-[#1A4A5A] text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E2C40] mb-4">
            Why Clients <span className="text-[#148D8D]">Trust Us</span>
          </h2>
          <p className="text-[#1A4A5A] max-w-2xl mb-12">
            From engineering expertise to certified execution teams, every project is delivered with
            precision, transparency, and measurable quality.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE.map((item, i) => (
              <div
                key={i}
                className="rounded-xl bg-[#f8faf9] border border-[#0E2C40]/10 p-6 hover:border-[#148D8D]/30 transition"
              >
                <CheckCircle2 className="h-8 w-8 text-[#148D8D] mb-4" />
                <h3 className="text-lg font-semibold text-[#0E2C40] mb-2">{item.title}</h3>
                <p className="text-[#1A4A5A] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#e8f0ef] border-t border-[#0E2C40]/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E2C40] mb-4">Ready to Start Your Project?</h2>
          <p className="text-[#1A4A5A] mb-8">
            Let&apos;s discuss your interior requirements and create something exceptional together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#148D8D] px-8 py-3 text-sm font-semibold text-white hover:bg-[#1ba3a3] transition"
            >
              Contact Us
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full border border-[#148D8D]/50 px-8 py-3 text-sm font-semibold text-[#148D8D] hover:bg-[#148D8D]/10 transition"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#0E2C40]/10 text-[#1A4A5A] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/S9%20LOGO%20NEW.jpg%20(1).jpeg" alt="S9 Enterprises" className="h-8 w-auto object-contain" />
            <p className="text-sm">© 2026 S9 Enterprises. All rights reserved.</p>
          </div>
          <div className="flex gap-8 text-sm">
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
