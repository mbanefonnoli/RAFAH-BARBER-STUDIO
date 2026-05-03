"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: t("navServices") },
    { href: "#gallery", label: t("navGallery") },
    { href: "#about", label: t("navAbout") },
    { href: "#contact", label: t("navContact") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-bg border-b border-brand-accent/30 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative w-32 h-12">
          <Image
            src="/logo.svg"
            alt="Rafah Barber Studio"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <React.Fragment key={link.href}>
            <Link
              href={link.href}
              className="nav-link text-xs uppercase tracking-[0.2em] font-body hover:text-brand-accent transition-colors"
            >
              {link.label}
            </Link>
            {i < navLinks.length - 1 && (
                <span className="text-brand-accent/50 text-[10px]">·</span>
            )}
            </React.Fragment>
          ))}
        </div>

        {/* Language Toggle & Hamburger */}
        <div className="flex items-center space-x-6">
          <button
            onClick={() => setLanguage(language === "ro" ? "en" : "ro")}
            className="text-[10px] uppercase tracking-[0.2em] font-body hover:text-brand-accent transition-colors"
          >
            {language === "ro" ? "RO | EN" : "EN | RO"}
          </button>

          <button 
            className="md:hidden text-brand-text"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-px bg-current mb-2"></div>
            <div className="w-6 h-px bg-current"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-brand-bg z-[60] flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-300">
          <button 
            className="absolute top-6 right-6 text-brand-text text-2xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            ✕
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl uppercase tracking-[0.3em] font-display hover:text-brand-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
                setLanguage(language === "ro" ? "en" : "ro");
                setMobileMenuOpen(false);
            }}
            className="mt-8 text-sm uppercase tracking-[0.2em] font-body text-brand-accent"
          >
            {language === "ro" ? "English Version" : "Versiunea Română"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
