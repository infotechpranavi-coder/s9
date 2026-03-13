'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Glass backdrop with subtle gradient */}
      <nav className="border-b border-white/40 bg-white/70 backdrop-blur-xl shadow-[0_8px_24px_rgba(14,44,64,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 min-h-[72px]">
            {/* Logo + wordmark */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#148D8D] focus-visible:ring-offset-2 rounded-xl"
            >
              <div className="relative flex items-center justify-center h-11 w-11 rounded-2xl bg-white/70 shadow-[0_0_0_1px_rgba(20,141,141,0.12),0_8px_20px_rgba(14,44,64,0.18)] overflow-hidden">
                <img
                  src="/S9%20LOGO%20NEW.jpg%20(1).jpeg"
                  alt="S9 Enterprises"
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-sm font-semibold tracking-[0.14em] uppercase text-[#0E2C40]">
                  S9 Enterprises
                </span>
                <span className="text-[11px] text-[#1A4A5A]/75">
                  Interior Designers &amp; Turnkey
                </span>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1 rounded-full bg-white/80 px-1 py-1 shadow-[0_6px_20px_rgba(14,44,64,0.10)] border border-white/60">
              {NAV_LINKS.map(({ href, label }) => {
                const isActive =
                  pathname === href || (href !== '/' && pathname.startsWith(href));
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                      isActive
                        ? 'text-white bg-[#148D8D] shadow-sm shadow-[#148D8D]/50'
                        : 'text-[#1A4A5A] hover:text-[#148D8D] hover:bg-[#148D8D]/8'
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#148D8D] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-md shadow-[#148D8D]/25 hover:bg-[#117a7a] hover:shadow-lg hover:shadow-[#148D8D]/30 active:scale-[0.97] transition-all"
              >
                Start a Project
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen((o) => !o)}
                className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/60 bg-white/70 text-[#0E2C40] shadow-sm hover:bg-white hover:border-[#148D8D]/40 transition-colors"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!mobileOpen}
        >
          <div className="border-t border-white/60 bg-white/90 backdrop-blur-xl px-4 py-4 space-y-1 shadow-[0_12px_30px_rgba(14,44,64,0.18)]">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive =
                pathname === href || (href !== '/' && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#148D8D] text-white'
                      : 'text-[#1A4A5A] hover:bg-[#148D8D]/10 hover:text-[#148D8D]'
                  }`}
                >
                  <span>{label}</span>
                  {isActive && <span className="text-[10px] uppercase tracking-[0.2em]">Now</span>}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 flex items-center justify-center rounded-2xl bg-[#148D8D] px-4 py-3 text-sm font-semibold text-white hover:bg-[#117a7a] transition-colors"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
