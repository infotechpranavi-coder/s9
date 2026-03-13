'use client';

import Link from 'next/link';
import { ChevronRight, ChevronLeft, Briefcase, Hammer, Grid3x3, Users, Zap, PaintBucket, ArrowRight, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SERVICES = [
  {
    id: 1,
    title: 'Interior Design Planning',
    desc: 'Strategic design solutions for optimal space utilization',
    fullDesc: 'Our expert designers create comprehensive interior design plans that maximize space efficiency while maintaining aesthetic appeal. We conduct thorough site assessments and develop detailed layouts customized to your specific needs and business objectives.',
    icon: Grid3x3,
    image: 'https://officebanao.com/wp-content/uploads/2022/10/Modern-office-design-3.jpg',
    tag: 'Design',
  },
  {
    id: 2,
    title: 'Turnkey Interior Execution',
    desc: 'Complete project delivery from concept to final handover',
    fullDesc: 'We manage every aspect of your interior project from initial consultation through final execution. Our integrated approach ensures seamless coordination between design and construction, delivering exceptional results on time and within budget.',
    icon: Hammer,
    image: 'https://img.freepik.com/premium-photo/3d-interior-modern-company-office_205485-5519.jpg',
    tag: 'Turnkey',
  },
  {
    id: 3,
    title: 'Office Interior Design',
    desc: 'Modern office spaces that boost productivity and creativity',
    fullDesc: 'Transform your workspace into a productivity hub. We design modern office environments incorporating ergonomic principles, collaborative spaces, and brand identity elements that inspire creativity and foster team engagement.',
    icon: Briefcase,
    image: 'https://weadesign.com/wp-content/uploads/2024/01/office-interior-designs.webp',
    tag: 'Corporate',
  },
  {
    id: 4,
    title: 'Commercial Interior Projects',
    desc: 'Comprehensive solutions for retail and commercial spaces',
    fullDesc: 'From retail storefronts to corporate headquarters, we deliver commercial interior solutions that enhance brand presence and customer experience. Our designs balance aesthetics with functional requirements specific to your business type.',
    icon: Grid3x3,
    image: 'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?w=900&h=700&fit=crop',
    tag: 'Commercial',
  },
  {
    id: 5,
    title: 'Workspace Planning',
    desc: 'Ergonomic designs for efficient modern workspaces',
    fullDesc: 'We create scientifically designed workspaces that prioritize employee wellness and productivity. Our ergonomic solutions incorporate adjustable furniture, proper lighting, air quality management, and flexible work zones.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=900&h=700&fit=crop',
    tag: 'Ergonomic',
  },
  {
    id: 6,
    title: 'Fabrication & Civil Work',
    desc: 'Expert craftsmanship in structural and finish work',
    fullDesc: 'Our skilled fabrication team handles custom cabinetry, partition systems, wall coverings, and all structural work with precision. We use premium materials and employ expert craftsmen to ensure superior quality and durability.',
    icon: Hammer,
    image: 'https://thumbs.dreamstime.com/z/construction-workers-installing-drop-ceiling-commercial-building-335489589.jpg?w=576',
    tag: 'Craft',
  },
  {
    id: 7,
    title: 'Electrical & Lighting Design',
    desc: 'Advanced electrical systems and ambient lighting solutions',
    fullDesc: 'We design and implement advanced electrical systems with sophisticated lighting solutions. From ambient and task lighting to smart automation systems, our expertise ensures energy efficiency and enhanced workplace ambiance.',
    icon: Zap,
    image: 'https://electricalcontractingnews.com/wp-content/uploads/2024/06/Signify.jpg',
    tag: 'Tech',
  },
  {
    id: 8,
    title: 'Flooring & Painting',
    desc: 'Premium flooring and painting for lasting impressions',
    fullDesc: 'Premium finishing services including diverse flooring options (wood, vinyl, tiles) and professional painting. We ensure flawless execution and long-lasting finishes that withstand heavy commercial use.',
    icon: PaintBucket,
    image: 'https://foyr.com/learn/wp-content/uploads/2021/10/why-space-planning-is-important-for-interior-design.png?is-pending-load=1',
    tag: 'Finish',
  },
];

const PROCESS_STEPS = [
  { num: '01', title: 'Consultation', desc: 'Understanding your vision, requirements, budget, and timeline' },
  { num: '02', title: 'Site Analysis', desc: 'Detailed assessment of space, infrastructure, and constraints' },
  { num: '03', title: 'Design Development', desc: 'Creating comprehensive design plans with 3D visualizations' },
  { num: '04', title: 'Material Selection', desc: 'Curating premium materials and finishes aligned with design' },
  { num: '05', title: 'Execution', desc: 'Professional implementation with quality monitoring at each stage' },
  { num: '06', title: 'Handover', desc: 'Final inspection, client walk-through, and project completion' },
];

const MARQUEE_ITEMS = [
  'Interior Design',
  'Turnkey Execution',
  'Office Design',
  'Commercial Projects',
  'Space Planning',
  'Fabrication',
  'Lighting Design',
  'Flooring & Painting',
  '•',
];

const STATS = [
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 8, suffix: '', label: 'Core Services' },
];

const WHY_CHOOSE = [
  { icon: '✓', title: 'Expert Design Team', desc: 'Experienced designers with deep understanding of commercial and residential aesthetics' },
  { icon: '✓', title: 'Quality Materials', desc: 'Access to premium materials and latest design products from trusted suppliers' },
  { icon: '✓', title: 'Skilled Craftsmen', desc: 'Team of certified professionals including carpenters, electricians, and fabricators' },
  { icon: '✓', title: 'Timely Delivery', desc: 'Proven track record of on-time project completion without quality compromise' },
  { icon: '✓', title: 'Budget Control', desc: 'Transparent pricing with detailed cost breakdowns and no hidden charges' },
  { icon: '✓', title: 'Client Satisfaction', desc: 'Long-term relationships with corporate clients who consistently reorder our services' },
];

const CAROUSEL_AUTOPLAY_DELAY = 4500; // ms

export default function ServicesPage() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(300);
  const [cardSpacing, setCardSpacing] = useState(320);

  // Responsive carousel card size
  useEffect(() => {
    const updateSize = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 640) {
        setCardWidth(260);
        setCardSpacing(280);
      } else {
        setCardWidth(300);
        setCardSpacing(320);
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Auto-advance 3D carousel (pauses on hover)
  useEffect(() => {
    if (isCarouselPaused) return;
    const t = setInterval(() => {
      setSliderIndex((i) => (i + 1) % SERVICES.length);
    }, CAROUSEL_AUTOPLAY_DELAY);
    return () => clearInterval(t);
  }, [isCarouselPaused]);

  return (
    <div className="min-h-screen bg-white text-[#0E2C40] overflow-x-hidden">
      <Navbar />

      {/* Hero with animated headline + stats */}
      <section className="relative py-16 md:py-24 px-6 overflow-hidden min-h-[420px] md:min-h-[480px] flex items-center">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-75"
          aria-hidden
        >
          <source src="/0_Office_Workspace_3840x2160.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0E2C40]/60" aria-hidden />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full border border-[#148D8D]/10"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full border border-[#EFBC75]/20"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/20 border border-white/30 px-4 py-1.5 text-sm font-medium text-white mb-6"
          >
            <Sparkles className="h-4 w-4" /> Design to execution, under one roof
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-md"
          >
            Services that
            <span className="block text-[#7dd3d3]">transform spaces</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto mb-12 drop-shadow-sm"
          >
            From concept to handover—interior design, turnkey execution, and premium finishes for corporate, commercial, and residential projects.
          </motion.p>
          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="rounded-2xl bg-white/80 backdrop-blur border border-[#0E2C40]/10 px-6 py-4 shadow-lg shadow-[#0E2C40]/5"
              >
                <p className="text-2xl md:text-3xl font-bold text-[#148D8D]">
                  {stat.value}{stat.suffix}
                </p>
                <p className="text-xs md:text-sm font-medium text-[#1A4A5A] mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Marquee - scrolling services strip */}
      <section className="py-6 bg-[#0E2C40] overflow-hidden">
        <motion.div
          className="flex gap-12 whitespace-nowrap w-max"
          animate={{ x: [0, '-50%'] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="text-lg font-semibold text-white/90">
              {item}
            </span>
          ))}
        </motion.div>
      </section>

      {/* Featured services – 3D carousel */}
      <section className="py-16 md:py-24 px-6 bg-[#f8faf9]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#0E2C40] mb-2"
          >
            Featured services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#1A4A5A] text-lg mb-10"
          >
            Explore our core offerings—click arrows to browse or wait for auto-slide.
          </motion.p>
          <div className="relative">
            <button
              type="button"
              aria-label="Previous service"
              onClick={() => setSliderIndex((i) => (i - 1 + SERVICES.length) % SERVICES.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-[#0E2C40]/10 shadow-lg flex items-center justify-center text-[#148D8D] hover:bg-[#148D8D] hover:text-white transition -translate-x-2 md:-translate-x-4"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              type="button"
              aria-label="Next service"
              onClick={() => setSliderIndex((i) => (i + 1) % SERVICES.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-[#0E2C40]/10 shadow-lg flex items-center justify-center text-[#148D8D] hover:bg-[#148D8D] hover:text-white transition translate-x-2 md:translate-x-4"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* 3D carousel container – pause on hover */}
            <div
              className="relative min-h-[380px] md:min-h-[420px] overflow-hidden"
              style={{ perspective: '1200px' }}
              onMouseEnter={() => setIsCarouselPaused(true)}
              onMouseLeave={() => setIsCarouselPaused(false)}
            >
              <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '1200px' }}>
                {SERVICES.map((service, i) => {
                  const offset = i - sliderIndex;
                  const scale = offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.8 : 0.6;
                  const rotateY = -offset * 25;
                  const zIndex = offset === 0 ? 10 : Math.abs(offset) === 1 ? 5 : 0;
                  const opacity = Math.abs(offset) > 2 ? 0.4 : 1;
                  const translateX = offset * cardSpacing;
                  return (
                    <div
                      key={service.id}
                      className="absolute flex justify-center items-center"
                      style={{
                        width: cardWidth,
                        left: '50%',
                        marginLeft: -cardWidth / 2,
                        transform: `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
                        transformStyle: 'preserve-3d',
                        transition: 'all 700ms ease-in-out',
                        zIndex,
                        opacity,
                        pointerEvents: Math.abs(offset) > 2 ? 'none' : 'auto',
                      }}
                    >
                      <Link
                        href="/contact"
                        className="block w-full rounded-2xl overflow-hidden bg-white border border-[#0E2C40]/10 shadow-xl shadow-[#0E2C40]/10 hover:shadow-2xl hover:border-[#148D8D]/30 transition-shadow"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0E2C40]/50 to-transparent" />
                          <span className="absolute top-3 left-3 rounded-full bg-[#148D8D] px-2.5 py-1 text-[10px] font-semibold text-white">
                            {service.tag}
                          </span>
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-bold text-[#0E2C40] mb-2 line-clamp-2">{service.title}</h3>
                          <p className="text-[#1A4A5A] text-sm leading-snug mb-4 line-clamp-2">{service.desc}</p>
                          <span className="inline-flex items-center gap-1.5 text-[#148D8D] text-xs font-semibold">
                            Get a quote <ArrowRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {SERVICES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setSliderIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === sliderIndex ? 'bg-[#148D8D] w-8' : 'w-2.5 bg-[#0E2C40]/20 hover:bg-[#0E2C40]/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process - horizontal timeline / steps with animation */}
      <section className="py-16 md:py-24 px-6 bg-[#f0f5f4]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-[#0E2C40]"
          >
            Our design & execution process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#1A4A5A] text-lg mb-12 max-w-2xl"
          >
            From brief to handover—structured, transparent, and on time.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="bg-white p-8 rounded-2xl border border-[#0E2C40]/10 shadow-lg shadow-[#0E2C40]/5 hover:shadow-xl hover:border-[#148D8D]/20 transition-shadow"
              >
                <span className="text-4xl font-bold text-[#148D8D]/50 mb-4 block">{step.num}</span>
                <h3 className="text-xl font-bold mb-2 text-[#0E2C40]">{step.title}</h3>
                <p className="text-[#1A4A5A] text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose - animated cards */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-[#0E2C40]"
          >
            Why choose our services?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#1A4A5A] text-lg mb-12 max-w-2xl"
          >
            Design excellence, technical expertise, and project management that deliver results.
          </motion.p>
          <div className="grid md:grid-cols-2 gap-6">
            {WHY_CHOOSE.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ x: i % 2 === 0 ? 4 : -4 }}
                className="flex gap-4 p-6 rounded-2xl bg-[#f8faf9] border border-[#0E2C40]/10 hover:border-[#148D8D]/30 hover:shadow-lg transition-all"
              >
                <span className="text-2xl text-[#148D8D] font-bold flex-shrink-0 h-10 w-10 rounded-full bg-[#148D8D]/10 flex items-center justify-center">
                  {item.icon}
                </span>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#0E2C40]">{item.title}</h3>
                  <p className="text-[#1A4A5A] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-gradient-to-r from-[#e8f0ef] via-[#C1E1A7]/20 to-[#e8f0ef] border-t border-[#0E2C40]/10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#0E2C40]">
            Ready to transform your space?
          </h2>
          <p className="text-xl mb-8 text-[#1A4A5A]">
            Share your project—we&apos;ll get back with a tailored proposal.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#148D8D] text-white px-8 py-4 font-bold hover:bg-[#1ba3a3] transition shadow-lg shadow-[#148D8D]/25"
            >
              Get started <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#0E2C40]/10 text-[#0E2C40] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-8">
          <div>
            <img src="/S9%20LOGO%20NEW.jpg%20(1).jpeg" alt="S9 Enterprises" className="h-10 w-auto object-contain mb-2" />
            <h3 className="font-bold text-lg mb-4">S9 Enterprises</h3>
            <p className="text-[#1A4A5A] text-sm">
              Interior design and turnkey contractors delivering exceptional quality.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase">Quick Links</h4>
            <ul className="space-y-2 text-sm text-[#1A4A5A]">
              <li><Link href="/" className="hover:text-[#148D8D] transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#148D8D] transition">About</Link></li>
              <li><Link href="/services" className="hover:text-[#148D8D] transition">Services</Link></li>
              <li><Link href="/projects" className="hover:text-[#148D8D] transition">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-[#148D8D] transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase">Services</h4>
            <ul className="space-y-2 text-sm text-[#1A4A5A]">
              <li>Interior Design</li>
              <li>Turnkey Execution</li>
              <li>Office Design</li>
              <li>Commercial Projects</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase">Contact</h4>
            <p className="text-sm text-[#1A4A5A]">
              <strong>Email:</strong> s9enterprises18@gmail.com<br />
              <strong>Phone:</strong> 9930111780 / 8369463701<br />
              <strong>Location:</strong> Thane (West), Mumbai
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-8 border-t border-[#0E2C40]/10 text-center text-sm text-[#1A4A5A]">
          <p>&copy; 2026 S9 Enterprises. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
