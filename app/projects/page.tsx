'use client';

import Link from 'next/link';
import { ChevronRight, ArrowLeft, Star, Plus, Instagram, Facebook, Youtube } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

import { 
  CLIENT_IMAGES, 
  COMMERCIAL_CLIENTS, 
  RESIDENTIAL_PROJECTS, 
  ONGOING_PROJECT_CARDS 
} from '@/lib/projects-data';

export default function ProjectsPage() {
  const [visibleResidential, setVisibleResidential] = useState(8);
  const containerRef = useRef<HTMLDivElement>(null);

  const showMore = () => {
    setVisibleResidential(prev => Math.min(prev + 8, RESIDENTIAL_PROJECTS.length));
  };

  useEffect(() => {
    if (visibleResidential > 8 && containerRef.current) {
      setTimeout(() => {
        containerRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'end' 
        });
      }, 100);
    }
  }, [visibleResidential]);

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

      {/* Section 1: Our Prestigious Commercial Clients – Showcase Grid */}
      <section className="py-20 md:py-28 bg-[#f0f5f4] border-t border-[#0E2C40]/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E2C40] mb-3 tracking-tight">
            Our Prestigious Commercial Clients
          </h2>
          <p className="text-[#1A4A5A] mb-12 max-w-xl text-lg">Leading organizations that trust S9 Enterprises for their interior transformation.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[220px]">
            {COMMERCIAL_CLIENTS.map((client, i) => {
              const imageUrl = CLIENT_IMAGES[i % CLIENT_IMAGES.length];
              
              // Patterns for grid spans similar to the provided image
              const configs = [
                { span: 'col-span-1 row-span-1' },
                { span: 'col-span-1 row-span-1' },
                { span: 'col-span-2 row-span-2' },
                { span: 'col-span-2 row-span-2' },
                { span: 'col-span-1 row-span-1' },
                { span: 'col-span-1 row-span-1' },
              ];
              const config = configs[i % configs.length];
              
              // Split client name and location
              const [name, ...locParts] = client.split(' – ');
              const location = locParts.join(' – ');

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`group relative overflow-hidden rounded-[2rem] p-6 shadow-xl ${config.span} bg-[#0E2C40] flex flex-col justify-between text-white cursor-pointer transition-all duration-500`}
                >
                  {/* Background Image - Natural look without color tint */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={imageUrl}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Subtle bottom gradient for text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Minimal Content: Title and Location only */}
                  <div className="relative z-10 mt-auto">
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#7dd3d3] mb-1 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      Commercial Project
                    </p>
                    <h3 className={`${config.span.includes('row-span-2') ? 'text-xl md:text-3xl' : 'text-lg md:text-xl'} font-bold leading-tight drop-shadow-lg`}>
                      {name}
                    </h3>
                    <p className="text-xs md:text-sm text-white/70 font-medium mt-1">
                      {location}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-[#0E2C40]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E2C40] mb-3 tracking-tight">
                Residential Interior Projects
              </h2>
              <p className="text-[#1A4A5A] max-w-xl text-lg">
                Completed residential projects and bespoke interior details showcased with real site images.
              </p>
            </div>
            <div className="text-sm font-semibold text-[#148D8D] bg-[#148D8D]/5 px-4 py-2 rounded-full border border-[#148D8D]/10">
              {RESIDENTIAL_PROJECTS.length} Projects Total
            </div>
          </div>

          <div className="relative group">
            <AnimatePresence>
              {visibleResidential < RESIDENTIAL_PROJECTS.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-0 inset-x-0 h-60 bg-gradient-to-t from-white via-white/90 to-transparent z-10 pointer-events-none"
                />
              )}
            </AnimatePresence>

            <div 
              ref={containerRef}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 scrollbar-hide overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              <AnimatePresence mode="popLayout">
                {RESIDENTIAL_PROJECTS.slice(0, visibleResidential).map((project, i) => {
                  return (
                    <motion.div
                      key={`${project.location}-${project.bhk}-${i}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, delay: (i % 8) * 0.08, ease: [0.32, 0.72, 0, 1] }}
                      className="group overflow-hidden rounded-[2rem] border border-[#0E2C40]/8 bg-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0E2C40]/12"
                      style={{
                        boxShadow: '0 10px 28px rgba(14,44,64,0.06)',
                      }}
                    >
                      <div className="relative h-[280px] overflow-hidden">
                        <img
                          src={project.image}
                          alt={`${project.bhk} project at ${project.location}`}
                          className="h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-6 inset-x-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <p className="text-white font-bold text-lg leading-tight">{project.bhk}</p>
                          {project.location !== project.bhk && (
                            <p className="text-white/80 text-xs mt-1 font-medium">{project.location}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {visibleResidential < RESIDENTIAL_PROJECTS.length && (
            <div className="mt-16 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={showMore}
                className="inline-flex items-center gap-3 bg-[#148D8D] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-[#148D8D]/25 hover:bg-[#1ba3a3] transition-all duration-300 group"
              >
                <span>View More</span>
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
              </motion.button>
              <p className="mt-4 text-sm text-[#1A4A5A]/60 font-medium">
                Showing {visibleResidential} of {RESIDENTIAL_PROJECTS.length} results
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[linear-gradient(180deg,#f8faf9_0%,#eef5f3_100%)] border-t border-[#0E2C40]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.25fr] lg:items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              className="relative overflow-hidden rounded-[40px] bg-[#0E2C40] p-10 md:p-12 text-white shadow-[0_40px_100px_rgba(14,44,64,0.25)] lg:sticky lg:top-24"
            >
              <div className="absolute inset-0 opacity-40">
                <div className="absolute top-0 right-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-[#148D8D]/30 blur-[120px]" />
                <div className="absolute bottom-0 left-0 h-[300px] w-[300px] translate-y-1/2 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[100px]" />
              </div>
              
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#7dd3d3]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7dd3d3] animate-pulse" />
                  Live Pipeline
                </div>
                
                <h2 className="mt-8 text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                  Current <br />
                  <span className="text-[#7dd3d3]">Ongoing</span> <br />
                  Projects
                </h2>
                
                <p className="mt-8 max-w-md text-base leading-relaxed text-white/70">
                  Active assignments across premium residential and corporate sectors, progressing with 
                  precision execution and finish coordination.
                </p>

                <div className="mt-12 grid grid-cols-2 gap-6">
                  <div className="group rounded-3xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-md transition-all hover:bg-white/5">
                    <div className="text-4xl font-bold text-[#7dd3d3]">{ONGOING_PROJECT_CARDS.length}</div>
                    <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-white/60">Live Projects</div>
                  </div>
                  <div className="group rounded-3xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-md transition-all hover:bg-white/5">
                    <div className="text-4xl font-bold text-[#7dd3d3]">4</div>
                    <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-white/60">Sectors</div>
                  </div>
                </div>

                <div className="mt-12 flex items-center gap-4 pt-10 border-t border-white/5">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="h-10 w-10 rounded-full border-2 border-[#0E2C40] bg-[#148D8D]/20 backdrop-blur-sm flex items-center justify-center text-[10px] font-bold">
                        S9
                      </div>
                    ))}
                  </div>
                  <div className="text-xs font-medium text-white/40 italic">
                    Trusted by industry leaders
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
              {ONGOING_PROJECT_CARDS.map((project, i) => (
                <motion.div
                  key={`${project.title}-${project.location}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative flex flex-col overflow-hidden rounded-[32px] border border-[#0E2C40]/5 bg-white p-8 shadow-[0_20px_50px_rgba(14,44,64,0.04)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(14,44,64,0.08)] hover:border-[#148D8D]/20"
                >
                  {/* Subtle Gradient Decoration */}
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-[#148D8D]/5 to-transparent blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:from-[#148D8D]/10" />
                  
                  <div className="relative flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f0f7f6] text-lg font-bold text-[#148D8D] ring-4 ring-white transition-all duration-500 group-hover:bg-[#148D8D] group-hover:text-white group-hover:rotate-[360deg]">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0E2C40]/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#0E2C40]/60 transition-colors group-hover:bg-[#148D8D]/10 group-hover:text-[#148D8D]">
                      {project.category}
                    </span>
                  </div>

                  <div className="relative mt-10 mb-12">
                    <h3 className="text-xl font-bold tracking-tight text-[#0E2C40] leading-tight transition-colors duration-300 group-hover:text-[#148D8D]">
                      {project.title}
                    </h3>
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#1A4A5A]/60">
                      <div className="h-1 w-1 rounded-full bg-[#148D8D]/40" />
                      {project.location}
                    </div>
                  </div>

                  <div className="relative mt-auto flex items-center justify-between pt-6 border-t border-[#0E2C40]/5">
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#148D8D] opacity-75"></span>
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#148D8D]"></span>
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#148D8D]">
                        In Progress
                      </span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#0E2C40]/30 group-hover:text-[#0E2C40]/50 transition-colors">
                      Live Project
                    </span>
                  </div>
                </motion.div>
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

