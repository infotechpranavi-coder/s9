'use client';

import Link from 'next/link';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { useState } from 'react';

const CLIENT_IMAGES = [
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&h=400&fit=crop',
];

const COMMERCIAL_CLIENTS = [
  'DHL – Andheri, Mumbai',
  'Helious – Andheri, Mumbai',
  'MSRLM – Belapur, Navi Mumbai',
  'R & B Development – BKC, Mumbai',
  'TATA AIG – Lower Parel, Mumbai',
  'RMC – Ghatkopar, Mumbai',
  'Endress + Houser – Mumbai | New Delhi | Hyderabad | Gujarat',
  'Polychem Fabricators – Thane | Bhiwandi',
  'LIC Housing Finance – Thane West',
  'Jindal Stainless Steelway Limited (Phase 1) – Patalganga, Panvel',
  'Rukhmini Enterprises – Ambernath | Kalyan',
  'Haritage Novandie Foods Pvt. Ltd – Palghar',
];

const RESIDENTIAL_PROJECTS = [
  {
    bhk: 'Designer Wall Mural Feature',
    location: 'Virar',
    image: '/WhatsApp%20Image%202026-05-07%20at%2012.37.16%20PM.jpeg',
  },
  {
    bhk: 'Premium Decorative Paneling',
    location: 'Palghar, Thane',
    image: '/WhatsApp%20Image%202026-05-07%20at%2012.37.18%20PM.jpeg',
  },
  {
    bhk: 'Statement Entryway Concept',
    location: 'Santacruz, Mumbai',
    image: '/WhatsApp%20Image%202026-05-07%20at%2012.37.22%20PM.jpeg',
  },
  {
    bhk: 'Luxury Accent Installation',
    location: 'Kharghar, Navi Mumbai',
    image: '/WhatsApp%20Image%202026-05-07%20at%2012.37.19%20PM.jpeg',
  },
  {
    bhk: 'Artful Living Wall',
    location: 'Raunak Park, Thane',
    image: '/image.png',
  },
  {
    bhk: 'Devotional Feature Niche',
    location: 'Thane West',
    image: '/WhatsApp%20Image%202026-05-07%20at%2012.37.22%20PM%20(1).jpeg',
  },
  {
    bhk: 'Refined Interior Corner',
    location: 'Mira Road, Mumbai',
    image: '/WhatsApp%20Image%202026-05-07%20at%2012.37.21%20PM.jpeg',
  },
  {
    bhk: 'Bedroom Accent Styling',
    location: 'Naupada, Thane',
    image: '/WhatsApp%20Image%202026-05-07%20at%2012.37.16%20PM%20(2).jpeg',
  },
  {
    bhk: 'Contemporary Lounge Composition',
    location: 'Residential Project',
    image: '/WhatsApp%20Image%202026-05-07%20at%2012.38.17%20PM.jpeg',
  },
  {
    bhk: 'Soft Luxury Bedroom Suite',
    location: 'Residential Project',
    image: '/WhatsApp%20Image%202026-05-07%20at%2012.38.18%20PM%20(1).jpeg',
  },
  {
    bhk: 'Entrance Console and Devotional Niche',
    location: 'Residential Project',
    image: '/WhatsApp%20Image%202026-05-07%20at%2012.38.18%20PM%20(2).jpeg',
  },
  {
    bhk: 'Marble TV Feature Wall',
    location: 'Residential Project',
    image: '/WhatsApp%20Image%202026-05-07%20at%2012.38.18%20PM.jpeg',
  },
  {
    bhk: 'Integrated Bedroom Media Unit',
    location: 'Residential Project',
    image: '/WhatsApp%20Image%202026-05-08%20at%2012.01.13%20PM%20(1).jpeg',
  },
  {
    bhk: 'Elegant Ceiling and Wardrobe Suite',
    location: 'Residential Project',
    image: '/WhatsApp%20Image%202026-05-08%20at%2012.01.06%20PM%20(1).jpeg',
  },
  {
    bhk: 'Minimalist Bedroom Perspective',
    location: 'Residential Project',
    image: '/WhatsApp%20Image%202026-05-08%20at%2012.01.07%20PM%20(3).jpeg',
  },
  {
    bhk: 'Refined Storage and Bed Composition',
    location: 'Residential Project',
    image: '/WhatsApp%20Image%202026-05-08%20at%2012.01.07%20PM%20(4).jpeg',
  },
  {
    bhk: 'Warm Neutral Living Detail',
    location: 'Residential Project',
    image: '/WhatsApp%20Image%202026-05-08%20at%2012.01.08%20PM%20(3).jpeg',
  },
  {
    bhk: 'Feature Wall and Seating Concept',
    location: 'Residential Project',
    image: '/WhatsApp%20Image%202026-05-08%20at%2012.01.08%20PM%20(4).jpeg',
  },
  {
    bhk: 'Textured Bedroom Panel Design',
    location: 'Residential Project',
    image: '/WhatsApp%20Image%202026-05-08%20at%2012.01.10%20PM.jpeg',
  },
  {
    bhk: 'Modern Entertainment Wall',
    location: 'Residential Project',
    image: '/WhatsApp%20Image%202026-05-08%20at%2012.01.10%20PM%20(1).jpeg',
  },
  {
    bhk: 'Layered Bedroom Lighting Scheme',
    location: 'Residential Project',
    image: '/WhatsApp%20Image%202026-05-08%20at%2012.01.13%20PM%20(3).jpeg',
  },
  {
    bhk: 'Tailored Wardrobe Elevation',
    location: 'Residential Project',
    image: '/WhatsApp%20Image%202026-05-08%20at%2012.01.14%20PM.jpeg',
  },
  {
    bhk: 'Bedroom Storage Detailing',
    location: 'Residential Project',
    image: '/WhatsApp%20Image%202026-05-08%20at%2012.01.14%20PM%20(1).jpeg',
  },
  {
    bhk: 'Clean-Lined Interior Styling',
    location: 'Residential Project',
    image: '/WhatsApp%20Image%202026-05-08%20at%2012.01.15%20PM.jpeg',
  },
  {
    bhk: 'Contemporary Bedroom Finish Palette',
    location: 'Residential Project',
    image: '/WhatsApp%20Image%202026-05-08%20at%2012.01.15%20PM%20(1).jpeg',
  },
  {
    bhk: 'Soft-Tone Bedroom Showcase',
    location: 'Residential Project',
    image: '/WhatsApp%20Image%202026-05-08%20at%2012.01.17%20PM%20(1).jpeg',
  },
  {
    bhk: 'Bedroom Joinery and Lighting View',
    location: 'Residential Project',
    image: '/WhatsApp%20Image%202026-05-08%20at%2012.01.17%20PM%20(2).jpeg',
  },
  {
    bhk: 'Coordinated Interior Detail Frame',
    location: 'Residential Project',
    image: '/WhatsApp%20Image%202026-05-08%20at%2012.01.17%20PM%20(5).jpeg',
  },
];

const ONGOING_PROJECT_CARDS = [
  {
    title: 'Duplex Bungalow',
    location: 'Balkum, Thane',
    category: 'Residential',
  },
  {
    title: 'Novonesis - Synergia Life Sciences Pvt. Ltd',
    location: 'Wada, Bhiwandi',
    category: 'Corporate',
  },
  {
    title: 'Super Air Solutions',
    location: 'Naupada, Thane',
    category: 'Commercial',
  },
  {
    title: 'Jindal Stainless Steelway Limited (Phase 2)',
    location: 'Patalganga, Panvel',
    category: 'Industrial',
  },
  {
    title: 'Fablab Engineering India Pvt. Ltd',
    location: 'Thane',
    category: 'Corporate',
  },
];

export default function ProjectsPage() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#f8faf9] text-[#0E2C40]">
      <Navbar />

      {/* Hero */}
      <section className="relative py-24 border-b border-[#0E2C40]/10 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        >
          <source src="/8347237-uhd_3840_2160_25fps%20(1).mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white mb-8 transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-md"
          >
            Our <span className="text-[#7dd3d3]">Project Portfolio</span>
          </motion.h1>
          <p className="text-xl text-white/95 max-w-2xl drop-shadow-sm">
            A selection of corporate offices, retail spaces, and commercial interiors designed and
            executed with attention to detail and premium finishes.
          </p>
        </div>
      </section>

      {/* Section 1: Our Prestigious Commercial Clients – glass flip cards */}
      <section className="py-20 md:py-28 bg-[#f0f5f4] border-t border-[#0E2C40]/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0E2C40] mb-4 tracking-tight">
            Our Prestigious Commercial Clients
          </h2>
          <p className="text-[#1A4A5A] mb-12 max-w-xl">Click a card to flip and see project imagery.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: '1000px' }}>
            {COMMERCIAL_CLIENTS.map((client, i) => {
              const isFlipped = flippedIndex === i;
              const imageUrl = CLIENT_IMAGES[i % CLIENT_IMAGES.length];
              return (
                <div
                  key={i}
                  className="h-[220px] cursor-pointer"
                  style={{ perspective: '1000px' }}
                  onClick={() => setFlippedIndex(isFlipped ? null : i)}
                >
                  <div
                    className="relative w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }}
                  >
                    {/* Front: glass card with client name */}
                    <div
                      className="absolute inset-0 rounded-2xl overflow-hidden border border-[#0E2C40]/10 shadow-lg flex flex-col justify-center px-6"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(232,240,239,0.6) 100%)',
                        backdropFilter: 'blur(12px)',
                        boxShadow: '0 8px 32px rgba(14,44,64,0.12), inset 0 1px 0 rgba(255,255,255,0.5)',
                      }}
                    >
                      <span className="inline-block w-2 h-2 rounded-full bg-[#148D8D] mb-3" aria-hidden />
                      <p className="text-[#0E2C40] font-semibold text-sm md:text-base leading-snug pr-2">
                        {client}
                      </p>
                      <p className="text-[#148D8D] text-xs mt-2 font-medium">Click to view</p>
                    </div>

                    {/* Back: image */}
                    <div
                      className="absolute inset-0 rounded-2xl overflow-hidden border border-[#0E2C40]/10 shadow-lg"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      <img
                        src={imageUrl}
                        alt=""
                        className="w-full h-full object-cover"
                        aria-hidden
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E2C40]/70 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-white text-sm font-semibold drop-shadow-md line-clamp-2">{client}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Residential Interior Projects – motion slider with BHK interior photos */}
      <section className="py-20 md:py-28 bg-white border-t border-[#0E2C40]/10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0E2C40] mb-4 tracking-tight">
            Residential Interior Projects
          </h2>
          <p className="text-[#1A4A5A] mb-10 max-w-xl">
            Completed residential projects and bespoke interior details showcased with real site images.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {RESIDENTIAL_PROJECTS.map((project, i) => {
              return (
                <div
                  key={`${project.location}-${project.bhk}`}
                  className="group overflow-hidden rounded-[24px] border border-[#0E2C40]/8 bg-white transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0E2C40]/8"
                  style={{
                    boxShadow: '0 10px 28px rgba(14,44,64,0.06)',
                  }}
                >
                  <div className="relative h-[260px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.bhk} project at ${project.location}`}
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E2C40]/22 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Current Ongoing Projects */}
      <section className="py-20 md:py-28 bg-[linear-gradient(180deg,#f8faf9_0%,#eef5f3_100%)] border-t border-[#0E2C40]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.25fr] lg:items-start">
            <div className="relative overflow-hidden rounded-[32px] border border-[#0E2C40]/10 bg-[#0E2C40] px-7 py-8 md:px-9 md:py-10 text-white shadow-[0_24px_70px_rgba(14,44,64,0.18)]">
              <div
                className="absolute inset-0 opacity-90"
                aria-hidden
                style={{
                  background:
                    'radial-gradient(circle at top right, rgba(125,211,211,0.32), transparent 34%), linear-gradient(160deg, rgba(255,255,255,0.06), transparent 52%)',
                }}
              />
              <div className="relative">
                <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-[#7dd3d3]">
                  Active Pipeline
                </span>
                <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight">
                  Current Ongoing Projects
                </h2>
                <p className="mt-4 max-w-md text-sm md:text-base leading-relaxed text-white/78">
                  Live assignments across residential, corporate, commercial, and industrial spaces,
                  each progressing with tailored planning, execution, and finish coordination.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-sm">
                    <p className="text-2xl font-semibold">{ONGOING_PROJECT_CARDS.length}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/62">Live Projects</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-sm">
                    <p className="text-2xl font-semibold">4</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/62">Project Types</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {ONGOING_PROJECT_CARDS.map((project, i) => (
                <div
                  key={`${project.title}-${project.location}`}
                  className="group relative overflow-hidden rounded-[28px] border border-[#0E2C40]/10 bg-white p-6 shadow-[0_16px_45px_rgba(14,44,64,0.07)] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1.5 hover:border-[#148D8D]/25 hover:shadow-[0_22px_55px_rgba(14,44,64,0.12)]"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#148D8D] via-[#7dd3d3] to-transparent opacity-70"
                    aria-hidden
                  />
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e8f6f4] text-sm font-semibold text-[#148D8D] transition-colors duration-300 group-hover:bg-[#148D8D] group-hover:text-white">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <span className="inline-flex rounded-full bg-[#0E2C40]/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0E2C40]/70">
                      {project.category}
                    </span>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold leading-snug text-[#0E2C40]">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#1A4A5A]">
                      {project.location}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#0E2C40]/8 pt-4">
                    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#148D8D]">
                      <span className="h-2 w-2 rounded-full bg-[#148D8D]" aria-hidden />
                      In Progress
                    </span>
                    <span className="text-xs text-[#0E2C40]/45">
                      Project {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-[#e8f0ef] border-t border-[#0E2C40]/10 overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            aria-hidden
          >
            <source src="/7578542-uhd_3840_2160_30fps.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Have a Project in Mind?</h2>
          <p className="text-white/85 mb-8">
            Share your brief and we&apos;ll deliver a tailored interior solution.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#148D8D] px-8 py-3 text-sm font-semibold text-white hover:bg-[#1ba3a3] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
          >
            Start a Project <ChevronRight className="h-4 w-4" />
          </Link>
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
              <li><Link href="/" className="hover:text-[#148D8D] transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#148D8D] transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]">About</Link></li>
              <li><Link href="/services" className="hover:text-[#148D8D] transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]">Services</Link></li>
              <li><Link href="/projects" className="hover:text-[#148D8D] transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-[#148D8D] transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]">Contact</Link></li>
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
          </div>
        </div>
        <div className="border-t border-[#0E2C40]/10 pt-8 text-center text-[#1A4A5A] text-sm">
          <p>&copy; 2026 S9 Enterprises. All rights reserved. Interior Designers & Turnkey Contractors</p>
        </div>
      </footer>
    </div>
  );
}

