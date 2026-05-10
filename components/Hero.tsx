"use client";

import React, { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center grain overflow-hidden bg-brand-bg">
      {/* Shop background image */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/shop.jpg"
          alt="Rafah Barber Studio"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/60 to-brand-bg/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        <span className="reveal text-[10px] sm:text-xs uppercase tracking-[0.5em] font-body text-brand-accent mb-6 sm:mb-8">
          {t("heroSubtitle")}
        </span>
        
        <h1 className="reveal delay-100 font-display font-light leading-none text-brand-text mb-2 sm:mb-4 tracking-tighter" style={{ fontSize: "clamp(4rem, 15vw, 12rem)" }}>
          {t("heroTitle")}
        </h1>

        <div className="reveal delay-200 flex items-center justify-center w-full max-w-md sm:max-w-lg mb-8 sm:mb-12">
          <div className="h-px bg-brand-accent/50 flex-grow"></div>
          <span className="px-4 sm:px-6 text-[10px] sm:text-xs tracking-[0.5em] font-body text-brand-text uppercase">
            {t("heroTagline")}
          </span>
          <div className="h-px bg-brand-accent/50 flex-grow"></div>
        </div>

        <a
          href="https://wa.me/40723430698?text=Bună%2C%20vreau%20să%20fac%20o%20programare"
          className="reveal delay-300 px-8 sm:px-12 py-3 sm:py-4 border border-brand-accent text-brand-accent uppercase text-[10px] sm:text-xs tracking-[0.3em] font-body 
            hover:bg-brand-accent hover:text-brand-bg transition-all duration-300 rounded-[2px] mt-4"
        >
          {t("heroCTA")}
        </a>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-brand-accent/0 via-brand-accent/30 to-brand-accent/0"></div>
    </section>
  );
};

export default Hero;
