"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const Location = () => {
  const { t } = useLanguage();

  const hours = [
    { day: t("monday"), hours: "09:00 - 20:00" },
    { day: t("tuesday"), hours: "09:00 - 20:00" },
    { day: t("wednesday"), hours: "09:00 - 20:00" },
    { day: t("thursday"), hours: "09:00 - 20:00" },
    { day: t("friday"), hours: "09:00 - 20:00" },
    { day: t("saturday"), hours: "09:00 - 15:00" },
    { day: t("sunday"), hours: t("closed") },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-brand-bg">
      <div className="container mx-auto px-6">
        <h2 className="reveal text-4xl sm:text-5xl font-display font-light mb-16 sm:mb-24">
          {t("locationTitle")}
        </h2>

        <div className="grid md:grid-cols-2 gap-16 sm:gap-24">
          <div className="reveal order-2 md:order-1">
            <div className="space-y-4">
              {hours.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="font-body text-sm tracking-wide uppercase">{item.day}</span>
                  <span className="font-body text-sm font-light text-brand-text/60">{item.hours}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 space-y-2">
                <p className="text-xs uppercase tracking-widest text-brand-accent font-body">Address</p>
                <p className="text-sm font-body font-light text-brand-text/70">Strada Ion Gheorghe Duca 12, 900001 Constanța</p>
            </div>
          </div>

          <div className="reveal md:delay-200 order-1 md:order-2">
            <div className="aspect-video md:aspect-square bg-brand-surface border border-white/5 relative">
              <iframe
                src="https://maps.google.com/maps?q=Rafah+Barber+Studio,+Strada+Ion+Gheorghe+Duca+12,+Constan%C8%9Ba,+Romania&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, opacity: 0.8, filter: "grayscale(1) invert(1)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
