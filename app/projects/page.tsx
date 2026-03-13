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

const RESIDENTIAL_IMAGES = [
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop',
];

const RESIDENTIAL_PROJECTS = [
  { bhk: '3 BHK', location: 'Palghar, Thane' },
  { bhk: '1 BHK', location: 'Santacruz, Mumbai' },
  { bhk: '2 BHK', location: 'Kharghar, Navi Mumbai' },
  { bhk: '2 BHK', location: 'Raunak Park, Thane' },
  { bhk: '2 BHK', location: 'Naupada, Thane' },
  { bhk: '2 BHK', location: 'Virar' },
];

const ONGOING_PROJECTS = [
  'Duplex Bungalow – Balkum, Thane',
  'Novonesis – Synergia Life Sciences Pvt. Ltd – Wada, Bhiwandi',
  'Super Air Solutions – Naupada, Thane',
  'Jindal Stainless Steelway Limited (Phase 2) – Patalganga, Panvel',
  'Fablab Engineering India Pvt. Ltd – Thane',
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
        <div className="max-w-6xl mx-auto px-6">
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
                    className="relative w-full h-full transition-transform duration-500 ease-out"
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
          <p className="text-[#1A4A5A] mb-10 max-w-xl">Completed residential projects with interior finishes.</p>
          <div className="relative -mx-6 md:-mx-8">
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-5 w-max"
                animate={{ x: [0, -(300 * RESIDENTIAL_PROJECTS.length + 20 * (RESIDENTIAL_PROJECTS.length - 1))] }}
                transition={{
                  x: { repeat: Infinity, repeatType: 'loop', duration: 28, ease: 'linear' },
                }}
              >
                {[1, 2].map((copy) => (
                  <div key={copy} className="flex gap-5 flex-shrink-0 pr-5">
                    {RESIDENTIAL_PROJECTS.map((project, i) => {
                      const img = RESIDENTIAL_IMAGES[i % RESIDENTIAL_IMAGES.length];
                      return (
                        <div
                          key={`${copy}-${i}`}
                          className="group flex-shrink-0 w-[280px] md:w-[300px] rounded-2xl overflow-hidden border border-[#0E2C40]/10 transition-all duration-300 hover:border-[#148D8D]/40 hover:shadow-xl hover:shadow-[#148D8D]/10"
                          style={{
                            background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(232,240,239,0.6) 100%)',
                            boxShadow: '0 4px 24px rgba(14,44,64,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
                          }}
                        >
                          <div className="relative h-[180px] md:h-[200px] overflow-hidden">
                            <img
                              src={img}
                              alt=""
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              aria-hidden
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0E2C40]/60 via-transparent to-transparent" />
                            <span
                              className="absolute top-3 left-3 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-sm font-semibold text-[#0E2C40] border border-[#0E2C40]/10 shadow-sm"
                            >
                              {project.bhk}
                            </span>
                          </div>
                          <div className="p-4 flex items-center gap-2 text-[#1A4A5A]">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#148D8D] shrink-0" aria-hidden />
                            <span className="text-sm font-medium">{project.location}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Current Ongoing Projects */}
      <section className="py-20 md:py-28 bg-[#f8faf9] border-t border-[#0E2C40]/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0E2C40] mb-12 tracking-tight">
            Current Ongoing Projects
          </h2>
          <div className="relative pl-5 md:pl-6">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#148D8D]/60 via-[#0E2C40]/20 to-transparent" />
            {ONGOING_PROJECTS.map((project, i) => (
              <div
                key={i}
                className="group relative flex items-start gap-4 py-6 border-b border-[#0E2C40]/10 last:border-b-0 hover:border-[#148D8D]/30 transition-colors"
              >
                <span className="absolute -left-5 md:-left-6 top-7 h-2 w-2 rounded-full bg-[#148D8D] shrink-0 group-hover:bg-[#1ba3a3] transition-colors" aria-hidden />
                <p className="text-[#1A4A5A] text-sm md:text-base leading-relaxed pt-0.5 group-hover:text-[#0E2C40] transition-colors">
                  {project}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-[#e8f0ef] border-t border-[#0E2C40]/10 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=600&fit=crop"
            alt=""
            className="h-full w-full object-cover opacity-40"
            aria-hidden
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8faf9]/95 via-[#e8f0ef]/95 to-[#e8f0ef]/98" aria-hidden />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E2C40] mb-4">Have a Project in Mind?</h2>
          <p className="text-[#1A4A5A] mb-8">
            Share your brief and we&apos;ll deliver a tailored interior solution.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#148D8D] px-8 py-3 text-sm font-semibold text-white hover:bg-[#1ba3a3] transition"
          >
            Start a Project <ChevronRight className="h-4 w-4" />
          </Link>
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
