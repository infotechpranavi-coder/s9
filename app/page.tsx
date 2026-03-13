'use client';

import Link from 'next/link';
import { ChevronRight, MapPin, Mail, Phone, Briefcase, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

const SERVICES = [
  {
    title: 'Interior Design Planning',
    desc: 'Strategic design solutions for optimal space utilization',
    image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Turnkey Interior Execution',
    desc: 'Complete project delivery from concept to final handover',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Office Interior Design',
    desc: 'Modern office spaces that boost productivity and creativity',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Commercial Interior Projects',
    desc: 'Comprehensive solutions for retail and commercial spaces',
    image: 'https://images.unsplash.com/photo-1529424301806-4be0bb154e3b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Workspace Planning',
    desc: 'Ergonomic designs for efficient modern workspaces',
    image: 'https://images.unsplash.com/photo-1522204502588-56c024d77cd3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Fabrication & Civil Work',
    desc: 'Expert craftsmanship in structural and finish work',
    image: 'https://images.unsplash.com/photo-1519710884009-22a0c784d0dc?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Electrical & Lighting Design',
    desc: 'Advanced electrical systems and ambient lighting solutions',
    image: 'https://images.unsplash.com/photo-1503457574462-bd27054394c1?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Flooring & Painting',
    desc: 'Premium flooring and painting for lasting impressions',
    image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80'
  }
];

const PROJECTS = [
  { title: 'Corporate Office Interior', location: 'Andheri', image: '/WhatsApp%20Image%202026-03-10%20at%205.52.20%20PM%20(1).jpeg' },
  { title: 'Retail Interior Design', location: 'BKC', image: '/WhatsApp%20Image%202026-03-10%20at%205.52.20%20PM.jpeg' },
  { title: 'Industrial Workspace', location: 'Panvel', image: '/WhatsApp%20Image%202026-03-10%20at%205.52.21%20PM%20(1).jpeg' },
  { title: 'Commercial Office Space', location: 'Thane', image: '/WhatsApp%20Image%202026-03-10%20at%205.52.21%20PM.jpeg' },
  { title: 'Executive Cabin & Meeting Rooms', location: 'Lower Parel', image: '/WhatsApp%20Image%202026-03-10%20at%205.52.24%20PM%20(1).jpeg' },
  { title: 'Co-Working Space', location: 'Bandra', image: '/WhatsApp%20Image%202026-03-10%20at%205.52.24%20PM.jpeg' },
  { title: 'Showroom Interior', location: 'Ghatkopar', image: '/WhatsApp%20Image%202026-03-10%20at%205.52.26%20PM%20(1).jpeg' },
  { title: 'Healthcare Facility', location: 'Navi Mumbai', image: '/WhatsApp%20Image%202026-03-10%20at%205.52.26%20PM.jpeg' },
  { title: 'Restaurant & Café', location: 'Santacruz', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop' },
  { title: 'Residential Turnkey', location: 'Palghar', image: '/WhatsApp%20Image%202026-03-10%20at%205.52.27%20PM%20(1).jpeg' },
  { title: 'Warehouse Office Block', location: 'Bhiwandi', image: '/WhatsApp%20Image%202026-03-10%20at%205.52.28%20PM.jpeg' },
  { title: 'Bank Branch Interior', location: 'Thane West', image: '/WhatsApp%20Image%202026-03-10%20at%205.52.27%20PM.jpeg' },
];

const PROCESS_STEPS = [
  { num: '01', title: 'Consultation', desc: 'Understanding your vision and requirements' },
  { num: '02', title: 'Requirement Analysis', desc: 'Detailed assessment of space and needs' },
  { num: '03', title: 'Space Planning', desc: 'Creating optimized layouts and designs' },
  { num: '04', title: 'Concept Design', desc: 'Developing visual concepts and mood boards' },
  { num: '05', title: 'Material Selection', desc: 'Choosing premium materials and finishes' },
  { num: '06', title: 'Execution & Delivery', desc: 'Professional execution and project completion' }
];

const CLIENTS = [
  'DHL – Andheri Mumbai',
  'Helious – Andheri Mumbai',
  'MSRLM – Belapur Navi Mumbai',
  'R & B Development – BKC Mumbai',
  'TATA AIG – Lower Parel Mumbai',
  'RMC – Ghatkopar Mumbai',
  'Endress + Houser – Mumbai, Delhi, Hyderabad, Gujarat',
  'Polychem Fabricators – Thane & Bhiwandi',
  'LIC Housing Finance – Thane',
  'Jindal Stainless Steelway Limited – Panvel',
  'Heritage Novandie Foods Pvt Ltd – Palghar'
];

const TESTIMONIALS = [
  { quote: 'S9 Enterprises delivered exceptional interior design and execution with great attention to detail.' },
  { quote: 'Their team managed our commercial workspace project professionally and within timelines.' },
];

const TESTIMONIAL_MARQUEE = [
  'Exceptional',
  'Professional',
  'On time',
  'Quality',
  'Trusted',
  '•',
  'Detail-oriented',
  'Turnkey',
  'Pan India',
  '•',
];

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null);
  const [serviceCarouselIndex, setServiceCarouselIndex] = useState(0);

  // Auto-advance services carousel
  useEffect(() => {
    const id = setInterval(() => {
      setServiceCarouselIndex(i => (i + 1) % SERVICES.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const handleFormChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Current window of services for carousel (max 4 at a time)
  const visibleServices = Array.from(
    { length: Math.min(4, SERVICES.length) },
    (_, offset) => {
      const index = (serviceCarouselIndex + offset) % SERVICES.length;
      return { service: SERVICES[index], index };
    }
  );

  return (
    <div className="min-h-screen bg-[#f8faf9] text-[#0E2C40]">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
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
        {/* Dark overlay at 35% – video more visible, section stays dark-themed */}
        <div className="absolute inset-0 bg-[#0E2C40]/60" aria-hidden />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 lg:pt-32 lg:pb-32 flex flex-col lg:flex-row items-center gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 backdrop-blur-sm px-4 py-1.5 text-[11px] font-medium text-white/95 mb-6">
              <span className="h-2 w-2 rounded-full bg-[#7dd3d3]" />
              Turnkey interior studio – Thane, Mumbai
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white mb-5 leading-tight drop-shadow-md">
              Your vision,
              <span className="block text-[#7dd3d3]">
                our interior design expertise.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/95 mb-8 leading-relaxed max-w-xl drop-shadow-sm">
              S9 Enterprises is a turnkey interior contractor for corporate, commercial and residential
              projects—delivering concept-to-completion design, fit‑out and execution with experienced
              engineers and a skilled on-site workforce.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/projects">
                <motion.span
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center rounded-full bg-[#148D8D] px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#1ba3a3] transition"
              >
                View Our Projects
                <ArrowRight className="ml-2 h-4 w-4" />
                </motion.span>
              </Link>
              <Link href="/contact">
                <motion.span
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center rounded-full border border-[#148D8D]/40 bg-white px-8 py-3 text-sm font-semibold text-[#148D8D] hover:bg-[#148D8D]/10 transition"
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

      {/* About Teaser */}
      <section id="about" className="py-20 bg-[#f0f5f4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0E2C40]">Welcome to S9 Enterprises</h2>
              <p className="text-lg text-[#1A4A5A] leading-relaxed mb-6">
                We are a turnkey contractor for interior design across corporate, commercial and residential
                projects—delivering value-added design and execution with experienced engineers and a skilled
                workforce in civil works, carpentry, electrical, flooring, painting and fabrication.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#148D8D] font-semibold hover:text-[#1ba3a3]"
              >
                Learn more about us <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden h-80 lg:h-96">
              <img
                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=500&fit=crop"
                alt="Interior project by S9 Enterprises"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <motion.section
        id="services"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold mb-3 text-[#0E2C40]">
                Built around your
                <span className="block text-[#148D8D]">interior needs</span>
              </h2>
              <p className="text-[#1A4A5A] text-lg max-w-2xl">
                A complete suite of interior services from design concept to final handover, tailored to
                modern workspaces and commercial environments.
              </p>
            </div>
            <div className="flex gap-6 text-sm text-[#1A4A5A]">
              <div>
                <p className="text-2xl font-semibold text-[#148D8D]">End-to-end</p>
                <p>Design &amp; execution</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#148D8D]">Multi-sector</p>
                <p>Corporate, retail, industrial</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.div
              key={serviceCarouselIndex}
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7"
            >
              {visibleServices.map(({ service, index }, slot) => {
                const isActive = activeServiceIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: slot * 0.06, duration: 0.45, ease: 'easeOut' }}
                    onClick={() =>
                      setActiveServiceIndex(current => (current === index ? null : index))
                    }
                    className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer shadow-[0_8px_30px_rgba(14,44,64,0.12)] hover:shadow-[0_16px_40px_rgba(14,44,64,0.18)] hover:-translate-y-2 transition-all duration-300 ease-out border border-[#0E2C40]/8"
                  >
                    {/* Full background image - zooms on hover */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110 ${
                        isActive ? 'blur-md scale-110' : ''
                      }`}
                    />

                    {/* Glass overlay - visible on click */}
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        pointerEvents: isActive ? 'auto' : 'none',
                      }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="absolute inset-0 bg-[#0E2C40]/85 backdrop-blur-md flex flex-col justify-end p-6"
                    >
                      <motion.div
                        initial={false}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          y: isActive ? 0 : 12,
                        }}
                        transition={{ duration: 0.35, delay: 0.08, ease: 'easeOut' }}
                        className="space-y-3"
                      >
                        <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                        <p className="text-sm text-white/90 leading-relaxed">
                          {service.desc}
                        </p>
                        <Link
                          href="/services"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 rounded-full bg-[#148D8D] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1ba3a3] transition-colors shadow-lg"
                        >
                          Explore More
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </motion.div>
                    </motion.div>

                    {/* Default badge when not active */}
                    {!isActive && (
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px]">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm border border-[#0E2C40]/10 px-3 py-1.5 text-[#0E2C40]">
                          <Briefcase className="w-3.5 h-3.5 text-[#148D8D]" />
                          <span className="uppercase tracking-widest">
                            Service {String(index + 1).padStart(2, '0')}
                          </span>
                        </span>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Project Showcase */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
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
            <Link href="/projects" className="self-start inline-flex items-center justify-center rounded-full border border-[#148D8D]/60 px-5 py-2 text-xs font-semibold text-[#148D8D] hover:bg-[#148D8D]/10 transition">
              View all projects
              <ChevronRight className="ml-2 h-3 w-3" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {PROJECTS.map((project, i) => (
              <motion.article
                key={i}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-white border border-[#0E2C40]/10 shadow-lg shadow-[#0E2C40]/8 hover:shadow-xl hover:shadow-[#0E2C40]/12 transition-shadow"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-105"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E2C40]/60 via-[#0E2C40]/10 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 flex items-center justify-between text-xs text-white">
                    <p className="font-semibold text-sm md:text-base">{project.title}</p>
                  </div>
                </div>

                <div className="flex-1 px-5 pb-5 pt-4 flex items-center justify-end text-xs text-[#1A4A5A]">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#e8f0ef] text-[#148D8D] group-hover:bg-[#148D8D] group-hover:text-white transition">
                    <ChevronRight className="h-3 w-3" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process & Why Choose teaser */}
      <section className="py-16 bg-[#f0f5f4]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0E2C40]">Our Process & Why Clients Trust Us</h2>
          <p className="text-[#1A4A5A] max-w-2xl mx-auto mb-8">
            From consultation to handover, we follow a structured design process. Discover our warranty,
            technologies, and transparent pricing on our About page.
          </p>
          <Link href="/about" className="inline-flex items-center gap-2 rounded-full bg-[#148D8D] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1ba3a3] transition">
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
                  className="group relative overflow-hidden rounded-xl bg-white px-5 py-4 shadow-sm ring-1 ring-[#0E2C40]/10 hover:shadow-md hover:ring-[#148D8D]/30 transition"
                >
                  <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#148D8D] to-[#1ba3a3] opacity-0 group-hover:opacity-100 transition" />
                  <p className="pl-2 text-sm font-medium text-[#0E2C40] group-hover:text-[#1ba3a3]">
                    {client}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section – engaging, continuously animated */}
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
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-3 text-[#0E2C40]">
                Hear from our clients
              </h2>
              <p className="text-sm md:text-base text-[#1A4A5A] max-w-xl">
                A glimpse of what our clients say about working with S9 Enterprises on their interior projects.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
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

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ animation: i === 0 ? 'testimonial-float 3.5s ease-in-out infinite' : 'testimonial-float-alt 3.5s ease-in-out infinite' }}
                className="relative overflow-hidden rounded-2xl bg-white border border-[#0E2C40]/10 px-8 py-8 shadow-[0_20px_50px_-12px_rgba(14,44,64,0.12)] hover:shadow-[0_24px_56px_-12px_rgba(14,44,64,0.18)] hover:border-[#148D8D]/20 transition-shadow duration-300"
              >
                <div className="absolute -top-10 -right-6 text-[80px] text-[#C1E1A7]/50 select-none leading-none">
                  “
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#148D8D] mb-4">Client feedback</p>
                <p className="text-lg md:text-xl mb-6 italic text-[#0E2C40] leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="text-sm font-medium text-[#1A4A5A]">Valued Client</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section – redesigned */}
      <section className="relative py-20 md:py-28 overflow-hidden cta-live-bg">
        {/* Background image behind the card */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-[#e8f0ef]/50" aria-hidden />
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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-[2rem] md:rounded-[2.5rem] bg-white shadow-[0_32px_64px_-12px_rgba(14,44,64,0.15),0_0_0_1px_rgba(14,44,64,0.06)] overflow-hidden"
          >
            {/* Accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#148D8D] via-[#1ba3a3] to-[#148D8D]" />
            <div className="px-8 py-12 md:px-14 md:py-16 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#148D8D] mb-5">
                Start your next interior project
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#0E2C40] mb-5 leading-tight max-w-3xl mx-auto">
                Let&apos;s build your interior project together
          </h2>
              <p className="text-base md:text-lg text-[#1A4A5A] max-w-2xl mx-auto mb-10 leading-relaxed">
            We partner with businesses to design and execute modern, functional interiors with meticulous
            detailing, premium materials, and on-time delivery.
          </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <motion.span
              whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#148D8D] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#148D8D]/25 hover:bg-[#1ba3a3] transition"
            >
              Contact Studio
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Link>
                <Link href="/projects">
                  <motion.span
              whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#148D8D]/50 bg-transparent px-8 py-3.5 text-sm font-semibold text-[#148D8D] hover:bg-[#148D8D]/10 transition"
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
                          13, Neelambari CHS, Off Pokharan Road No.1, Shastri Nagar, Thane West – 400606
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
                    Share a few details about your interior requirement and we will get back within 1–2
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
                  className="mt-2 w-full inline-flex items-center justify-center rounded-full bg-[#148D8D] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#148D8D]/25 hover:bg-[#1ba3a3] transition"
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
            <img src="/S9%20LOGO%20NEW.jpg%20(1).jpeg" alt="S9 Enterprises" className="h-10 w-auto object-contain mb-2" />
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
          </div>
        </div>
        <div className="border-t border-[#0E2C40]/10 pt-8 text-center text-[#1A4A5A] text-sm">
          <p>&copy; 2026 S9 Enterprises. All rights reserved. Interior Designers & Turnkey Contractors</p>
        </div>
      </footer>
    </div>
  );
}
