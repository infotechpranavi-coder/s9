'use client';

import Link from 'next/link';
import { ChevronRight, MapPin, Mail, Phone, ArrowRight, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

import { 
  PROJECTS, 
  PROCESS_STEPS, 
  CLIENTS, 
  TESTIMONIALS, 
  TESTIMONIAL_MARQUEE 
} from '@/lib/projects-data';

const motionTransition = { duration: 0.6, ease: [0.32, 0.72, 0, 1] as const };
const motionTransitionFast = { duration: 0.45, ease: [0.32, 0.72, 0, 1] as const };

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const ctaHeadline = "Let's build your interior project together";
  const [typedHeadline, setTypedHeadline] = useState('');

  const handleFormChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setTypedHeadline(ctaHeadline.slice(0, index));

      if (index >= ctaHeadline.length) {
        window.clearInterval(interval);
      }
    }, 55);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8faf9] text-[#0E2C40]">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={motionTransition}
        className="relative min-h-screen overflow-hidden bg-[#e8f0ef]"
      >
        {/* Full-bleed background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-75"
          aria-hidden
        >
          <source src="/8346903-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay at 35% â€“ video more visible, section stays dark-themed */}
        <div className="absolute inset-0 bg-black/60" aria-hidden />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 lg:pt-32 lg:pb-32 flex flex-col lg:flex-row items-center gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 backdrop-blur-sm px-4 py-1.5 text-[11px] font-medium text-white/95 mb-6">
              <span className="h-2 w-2 rounded-full bg-[#7dd3d3]" />
              Turnkey interior studio â€“ Thane, Mumbai
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white mb-5 leading-tight drop-shadow-md">
              Your vision,
              <span className="block text-[#7dd3d3]">
                our interior design expertise.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/95 mb-8 leading-relaxed max-w-xl drop-shadow-sm">
              S9 Enterprises is a turnkey interior contractor for corporate, commercial and residential
              projectsâ€”delivering concept-to-completion design, fitâ€‘out and execution with experienced
              engineers and a skilled on-site workforce.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/projects">
                <motion.span
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center rounded-full bg-[#148D8D] px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#1ba3a3] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                View Our Projects
                <ArrowRight className="ml-2 h-4 w-4" />
                </motion.span>
              </Link>
              <Link href="/contact">
                <motion.span
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/12 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/18 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/65 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E2C40] active:bg-white/22 active:text-white"
              >
                Start Your Project
                </motion.span>
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 text-xs sm:text-sm text-white/90">
              <div>
                <p className="font-semibold text-white">15+ Years</p>
                <p>Experience in interiors</p>
              </div>
              <div>
                <p className="font-semibold text-white">Pan India</p>
                <p>Corporate &amp; commercial clients</p>
              </div>
              <div>
                <p className="font-semibold text-white">Turnkey</p>
                <p>Design to execution</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Teaser â€“ studio snapshot */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={motionTransition}
        className="py-20 bg-gradient-to-r from-[#f0f5f4] via-white to-[#f0f5f4]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.15fr,1fr] gap-10 lg:gap-14 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-[#148D8D]/10 blur-2xl" aria-hidden />
              <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-[#EFBC75]/20 blur-3xl" aria-hidden />

              <div className="relative rounded-3xl bg-white shadow-[0_18px_45px_rgba(14,44,64,0.12)] border border-[#0E2C40]/5 px-8 py-8 md:px-10 md:py-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#148D8D]/10 border border-[#148D8D]/25 px-4 py-1.5 text-xs font-semibold text-[#148D8D] mb-5">
                  Turnkey interior studio â€¢ Thane
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#0E2C40] leading-tight">
                  Welcome to <span className="text-[#148D8D]">S9 Enterprises</span>
                </h2>
                <p className="text-base md:text-lg text-[#1A4A5A] leading-relaxed mb-6">
                  We are a turnkey contractor for interior design across corporate, commercial and
                  residential projectsâ€”delivering valueâ€‘added design and execution with experienced
                  engineers and a skilled workforce in civil works, carpentry, electrical, flooring,
                  painting and fabrication.
                </p>
                <div className="flex flex-wrap gap-6 text-sm text-[#1A4A5A] mb-6">
                  <div>
                    <p className="font-semibold text-[#0E2C40]">15+ Years</p>
                    <p>Interior execution</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0E2C40]">Pan India</p>
                    <p>Corporate &amp; commercial</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0E2C40]">Endâ€‘toâ€‘end</p>
                    <p>Design to handover</p>
                  </div>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full bg-[#148D8D] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#1ba3a3] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] shadow-md shadow-[#148D8D]/25"
                >
                  Learn more about us
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative h-80 lg:h-96"
            >
              <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white shadow-[0_18px_45px_rgba(14,44,64,0.18)]">
                <video
                  src="/12684273_1920_1080_60fps.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                  aria-label="Corporate office interior by S9 Enterprises"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,141,141,0.24),transparent_34%),linear-gradient(180deg,rgba(14,44,64,0.06)_0%,rgba(14,44,64,0.32)_44%,rgba(14,44,64,0.84)_100%)]" />
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/20 via-white/5 to-transparent" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md shadow-lg shadow-black/10">
                  <span className="h-2 w-2 rounded-full bg-[#7ef2d6] animate-pulse" />
                  Ongoing Interior Story
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="max-w-md rounded-[1.75rem] border border-white/15 bg-white/12 p-5 text-white backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.22)]">
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9fe7dc]">
                      Recent Project
                    </p>
                    <h3 className="text-xl font-semibold leading-tight sm:text-2xl">
                      Residential Interior Project
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/80">
                      A warm and elegant living space designed for comfort, conversation, and a refined everyday experience.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-medium text-white/90">
                        Thane
                      </span>
                      <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-medium text-white/90">
                        Living Space
                      </span>
                      <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-medium text-white/90">
                        Elegant Design
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden">
                <p className="text-[11px] font-semibold text-[#148D8D] uppercase tracking-[0.16em] mb-1">
                  Recent project
                </p>
                <p className="text-xs text-[#0E2C40]">Corporate office interior â€“ meeting & collaboration zone, Thane</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Project Showcase */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={motionTransition}
        className="py-20 bg-[#f8faf9]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0E2C40] mb-3">
                Curated Interior
                <span className="block text-[#148D8D]">Project Portfolio</span>
              </h2>
              <p className="text-[#1A4A5A] max-w-xl">
                A selection of corporate offices, retail spaces, and commercial interiors designed and
                executed with attention to detail and premium finishes.
              </p>
            </div>
            <Link href="/projects" className="self-start inline-flex items-center justify-center rounded-full border border-[#148D8D]/60 px-5 py-2 text-xs font-semibold text-[#148D8D] hover:bg-[#148D8D]/10 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]">
              View all projects
              <ChevronRight className="ml-2 h-3 w-3" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {PROJECTS.map((project, i) => (
              <motion.article
                key={i}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-white border border-[#0E2C40]/10 shadow-lg shadow-[#0E2C40]/8 hover:shadow-xl hover:shadow-[#0E2C40]/12 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105 group-hover:brightness-105"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-5 bottom-5 flex flex-col gap-1 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7dd3d3] opacity-0 transition-all duration-300 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                      {project.location}
                    </p>
                    <p className="text-sm font-semibold md:text-base leading-tight drop-shadow-sm">
                      {project.title}
                    </p>
                  </div>
                </div>

              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process & Why Choose teaser */}
      <section className="relative overflow-hidden py-16">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        >
          <source src="/0_Office_Workspace_3840x2160.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/55" aria-hidden />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Process & Why Clients Trust Us</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            From consultation to handover, we follow a structured design process. Discover our warranty,
            technologies, and transparent pricing on our About page.
          </p>
          <Link href="/about" className="inline-flex items-center gap-2 rounded-full bg-[#148D8D] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1ba3a3] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]">
            Learn more <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-3 text-[#0E2C40]">
                Our Prestigious
                <span className="block text-[#148D8D]">Corporate &amp; Commercial Clients</span>
              </h2>
              <p className="text-[#1A4A5A] max-w-xl">
                Trusted by leading brands and organizations across Mumbai and major cities in India for
                corporate offices, industrial facilities, and commercial interiors.
              </p>
            </div>
            <div className="flex gap-6 text-sm text-[#1A4A5A]">
              <div>
                <p className="text-2xl font-semibold text-[#0E2C40]">{CLIENTS.length}+</p>
                <p>Key client relationships</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#0E2C40]">Pan India</p>
                <p>Project footprint</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#0E2C40]/10 bg-[#f8faf9] p-4 sm:p-6 lg:p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {CLIENTS.map((client, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl border border-white/80 bg-white px-5 py-4 shadow-[0_10px_24px_rgba(14,44,64,0.06)] ring-1 ring-[#0E2C40]/8 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-[#148D8D]/20 hover:shadow-[0_18px_40px_rgba(20,141,141,0.16)] hover:ring-[#148D8D]/20"
                >
                  <div className="absolute -left-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-[#148D8D]/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute right-4 top-3 h-2.5 w-2.5 rounded-full bg-[#7ef2d6] opacity-0 shadow-[0_0_16px_rgba(126,242,214,0.9)] transition-all duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#148D8D] to-[#1ba3a3] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]" />
                  <p className="relative pl-2 text-sm font-medium text-[#0E2C40] transition-colors duration-300 group-hover:text-[#0f7f7f]">
                    {client}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section â€“ engaging, continuously animated */}
      <section id="testimonials" className="relative py-20 overflow-hidden testimonials-section-bg text-[#0E2C40]">
        <div className="py-5 border-y border-[#0E2C40]/10">
          <motion.div
            className="flex gap-10 whitespace-nowrap w-max"
            animate={{ x: [0, '-50%'] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          >
            {[...TESTIMONIAL_MARQUEE, ...TESTIMONIAL_MARQUEE].map((word, i) => (
              <span key={i} className="text-lg md:text-xl font-semibold text-[#148D8D]/80">
                {word}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={motionTransitionFast}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-3 text-[#0E2C40]">
                Hear from our clients
              </h2>
              <p className="text-sm md:text-base text-[#1A4A5A] max-w-xl">
                A glimpse of what our clients say about working with S9 Enterprises on their interior projects.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...motionTransitionFast, delay: 0.08 }}
              className="flex gap-8 md:gap-10 text-sm text-[#1A4A5A]"
            >
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#148D8D]">235+</p>
                <p>Happy client reviews</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#148D8D]">420+</p>
                <p>Work departments delivered</p>
              </div>
              <div className="hidden md:block text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#148D8D]">30K+</p>
                <p>Happy clients served</p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ ...motionTransitionFast, delay: i * 0.08 }}
                style={{ animation: i % 2 === 0 ? 'testimonial-float 4s cubic-bezier(0.45,0,0.55,1) infinite' : 'testimonial-float-alt 4s cubic-bezier(0.45,0,0.55,1) infinite' }}
                className="relative overflow-hidden rounded-[22px] border border-[#0E2C40]/10 bg-white/95 px-5 py-5 shadow-[0_18px_40px_-16px_rgba(14,44,64,0.16)] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-[#148D8D]/20 hover:shadow-[0_22px_50px_-14px_rgba(14,44,64,0.2)]"
              >
                <div className="absolute -top-7 -right-4 text-[58px] leading-none text-[#C1E1A7]/45 select-none">
                  "
                </div>
                <div className="relative">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#148D8D]">
                      Client Feedback
                    </p>
                    <div className="flex items-center gap-1 text-[#f5b301]" aria-label={`${testimonial.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className={`h-3.5 w-3.5 ${starIndex < testimonial.rating ? 'fill-current' : 'text-[#d7dee2]'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mb-4 text-[15px] italic leading-7 text-[#0E2C40]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="space-y-1 border-t border-[#0E2C40]/8 pt-4">
                    <p className="text-sm font-semibold text-[#0E2C40]">{testimonial.name}</p>
                    <p className="text-xs text-[#1A4A5A]/80">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section â€“ redesigned */}
      <section className="relative py-20 md:py-28 overflow-hidden cta-live-bg">
        {/* Background image behind the card */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            aria-hidden
          />
          <div className="absolute inset-0 bg-black/45" aria-hidden />
                </div>
        {/* Soft glowing orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute w-[500px] h-[500px] rounded-full bg-[#148D8D] blur-[120px] opacity-[0.15]"
            style={{ top: '-20%', left: '-10%', animation: 'cta-glow-pulse 8s ease-in-out infinite' }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full bg-[#148D8D] blur-[100px] opacity-[0.12]"
            style={{ bottom: '-15%', right: '-5%', animation: 'cta-glow-pulse 10s ease-in-out 1s infinite' }}
          />
          </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={motionTransitionFast}
            className="relative overflow-hidden rounded-[2rem] border border-white/16 bg-white/6 shadow-[0_24px_48px_-16px_rgba(14,44,64,0.22)] backdrop-blur-md md:rounded-[2.5rem]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/42 via-black/28 to-black/18" />
            <div className="pointer-events-none absolute left-10 top-10 h-20 w-20 rounded-full bg-[#9fe7dc]/18 blur-3xl" />
            <div className="pointer-events-none absolute right-10 bottom-10 h-24 w-24 rounded-full bg-white/12 blur-3xl" />
            <div className="relative px-8 py-10 text-center md:px-12 md:py-14">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#9fe7dc]">
                Start your next interior project
              </p>
              <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                {typedHeadline}
                <span className="ml-1 inline-block h-[0.95em] w-[2px] translate-y-1 bg-[#9fe7dc] align-middle animate-pulse" aria-hidden />
              </h2>
              <p className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-white/88 md:text-lg">
                We partner with businesses to design and execute modern, functional interiors with meticulous
                detailing, premium materials, and on-time delivery.
              </p>
              <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
                <span className="rounded-full border border-white/20 bg-white/12 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  Turnkey Interiors
                </span>
                <span className="rounded-full border border-white/20 bg-white/12 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  Design to Handover
                </span>
                <span className="rounded-full border border-white/20 bg-white/12 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  Premium Materials
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <motion.span
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#148D8D] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#148D8D]/25 hover:bg-[#1ba3a3] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
                  >
                    Contact Studio
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Link>
                <Link href="/projects">
                  <motion.span
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/45 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/16 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
                  >
              View Portfolio
                  </motion.span>
                </Link>
          </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#f0f5f4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.3em] text-[#148D8D] mb-3">
              Studio Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold md:font-bold text-[#0E2C40] mb-2">
              Share your interior brief with us
            </h2>
            <p className="text-sm md:text-base text-[#1A4A5A] max-w-2xl">
              Tell us about your workspace, retail, or residential interior requirement and our team will get
              back to you with a tailored proposal.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            {/* Left: interior image */}
            <div className="relative">
              <div className="h-full rounded-3xl overflow-hidden border border-[#0E2C40]/10 bg-white shadow-xl shadow-[#0E2C40]/10">
                <div className="aspect-[4/5] sm:aspect-[4/3] lg:h-full lg:aspect-auto">
                  <img
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=900&fit=crop"
                    alt="Interior studio project by S9 Enterprises"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/95 backdrop-blur-md border border-[#0E2C40]/10 px-5 py-4 text-xs sm:text-sm text-[#0E2C40] flex flex-col gap-3 shadow-lg">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[#148D8D]">
                    Studio Details
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2.5">
                      <Phone className="h-4 w-4 text-[#148D8D] mt-0.5" />
                      <div>
                        <p className="font-medium text-[#0E2C40] text-xs sm:text-sm">Phone</p>
                        <p className="text-[#1A4A5A] text-xs sm:text-sm">
                          +91 99301 11780 &nbsp;/&nbsp; +91 93200 20010
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Mail className="h-4 w-4 text-[#148D8D] mt-0.5" />
                      <div>
                        <p className="font-medium text-[#0E2C40] text-xs sm:text-sm">Email</p>
                        <a
                          href="mailto:s9enterprises18@gmail.com"
                          className="text-[#148D8D] underline-offset-2 hover:underline text-xs sm:text-sm"
                        >
                          s9enterprises18@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <MapPin className="h-4 w-4 text-[#148D8D] mt-0.5" />
                      <div>
                        <p className="font-medium text-[#0E2C40] text-xs sm:text-sm">Studio Address</p>
                        <p className="text-[#1A4A5A] text-xs sm:text-sm">
                          13, Neelambari CHS, Off Pokharan Road No.1, Shastri Nagar, Thane West â€“ 400606
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: contact form card */}
            <div className="flex items-stretch">
              <form onSubmit={(e) => e.preventDefault()} className="w-full rounded-3xl bg-white shadow-xl shadow-[#0E2C40]/10 border border-[#0E2C40]/10 px-6 sm:px-8 py-7 sm:py-9 space-y-5 sm:space-y-6">
                <div className="mb-1">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#148D8D] mb-2">
                    Project Enquiry
                  </p>
                  <p className="text-sm text-[#1A4A5A]">
                    Share a few details about your interior requirement and we will get back within 1â€“2
                    business days.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    aria-label="Your name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full rounded-xl border border-[#e0d6c5] bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#148D8D] focus:ring-2 focus:ring-[#148D8D]/30"
                  />
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    aria-label="Email address"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full rounded-xl border border-[#e0d6c5] bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#148D8D] focus:ring-2 focus:ring-[#148D8D]/30"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    id="contact-phone"
                    aria-label="Phone number"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full rounded-xl border border-[#e0d6c5] bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#148D8D] focus:ring-2 focus:ring-[#148D8D]/30"
                  />
                  <input
                    type="text"
                    name="projectType"
                    id="contact-project-type"
                    aria-label="Project type (e.g. Office, Retail, Residential)"
                    placeholder="Project Type (Office, Retail, Residential)"
                    className="w-full rounded-xl border border-[#e0d6c5] bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#148D8D] focus:ring-2 focus:ring-[#148D8D]/30"
                  />
                </div>

                <textarea
                  name="message"
                  id="contact-message"
                  aria-label="Project details and timelines"
                  placeholder="Tell us about your space, size, location, and timelines"
                  rows={4}
                  value={formData.message}
                  onChange={handleFormChange}
                  className="w-full rounded-xl border border-[#e0d6c5] bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#148D8D] focus:ring-2 focus:ring-[#148D8D]/30"
                ></textarea>

                <motion.button
                  type="submit"
                  whileHover={{ y: -1, scale: 1.01 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-2 w-full inline-flex items-center justify-center rounded-full bg-[#148D8D] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#148D8D]/25 hover:bg-[#1ba3a3] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
                >
                  Send Message to Studio
                </motion.button>
              </form>
            </div>
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
              <li><Link href="/services" className="hover:text-[#148D8D] transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]">Interior Design</Link></li>
              <li><Link href="/services" className="hover:text-[#148D8D] transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]">Space Planning</Link></li>
              <li><Link href="/services" className="hover:text-[#148D8D] transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]">Turnkey Execution</Link></li>
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


