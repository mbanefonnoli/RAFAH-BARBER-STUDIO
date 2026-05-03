"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-surface pt-24 sm:pt-32 pb-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="reveal text-4xl sm:text-7xl font-display font-light mb-12 sm:mb-16">
          {t("contactTitle")}
        </h2>

        <div className="reveal flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-24">
          <a
            href="https://wa.me/40723430698?text=Bună%2C%20vreau%20să%20fac%20o%20programare"
            className="w-full sm:w-auto px-12 py-4 border border-brand-accent text-brand-accent uppercase text-[10px] sm:text-xs tracking-[0.3em] font-body hover:bg-brand-accent hover:text-brand-bg transition-all duration-300"
          >
            WhatsApp
          </a>
          <a
            href="tel:+40723430698"
            className="w-full sm:w-auto px-12 py-4 border border-brand-accent text-brand-accent uppercase text-[10px] sm:text-xs tracking-[0.3em] font-body hover:bg-brand-accent hover:text-brand-bg transition-all duration-300"
          >
            Phone
          </a>
        </div>

        <div className="reveal flex justify-center space-x-12 mb-24 opacity-60">
            <a href="https://www.instagram.com/rafah_barberstudio" target="_blank" className="hover:text-brand-accent transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.instagram.com/rafah_barberstudio/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col sm:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] font-body text-brand-text/30 gap-4">
          <p>© {new Date().getFullYear()} RAFAH BARBER STUDIO</p>
          <p className="text-brand-accent/50">{t("builtWithCare")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
