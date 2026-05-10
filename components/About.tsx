"use client";

import React from "react";

import { useLanguage } from "@/context/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 sm:py-48 bg-brand-bg">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 sm:gap-32 items-center">
          <div className="reveal">
            <h2 className="text-4xl sm:text-6xl font-display font-light mb-8 sm:mb-12">
              {t("aboutTitle")}
            </h2>
            <div className="space-y-6 sm:space-y-8">
              <p className="text-lg sm:text-xl font-body font-light text-brand-text/80 leading-relaxed">
                {t("aboutText")}
              </p>
              <div className="h-px w-24 bg-brand-accent"></div>
              <p className="text-sm sm:text-base font-body font-light text-brand-text/60 italic">
                {t("heroSubtitle")}
              </p>
            </div>
          </div>

          <div className="reveal md:delay-200 relative aspect-[4/5] bg-brand-surface border border-brand-accent/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/shop.jpg"
              alt="Rafah Barber Studio Interior"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-4 sm:inset-8 border border-white/5 pointer-events-none flex items-center justify-center">
                <span className="text-[10px] uppercase tracking-[0.4em] font-body text-brand-accent/20 rotate-90 origin-center whitespace-nowrap">ESTABLISHED IN ROMANIA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
