"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Spirituality", href: "/spirituality" },
    { label: "Acting & Theatre", href: "/acting-theatre" },
    { label: "Products", href: "/products" },
    { label: "Community", href: "/community" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav className="nav-3d sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-200">
            <Image
              src="/FLM logo.png"
              alt="Fitness Life Mantra"
              width={50}
              height={50}
              priority
              className="w-12 h-12 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            />
            <span className="hidden sm:block font-display text-lg font-semibold text-ink-900">Fitness Life Mantra</span>
          </Link>

          {/* Centered Desktop Nav Pills */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-pill"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/register"
              className="button-primary px-6 py-2.5 rounded-full text-sm font-semibold"
            >
              Register / Book
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-teal-50 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-ink-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block nav-pill-mobile"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/register"
              className="block button-primary px-6 py-3 rounded-full text-sm font-semibold text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Register / Book
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
