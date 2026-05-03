"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const WA_LINK = "https://wa.me/40723430698?text=Bună%2C%20vreau%20să%20fac%20o%20programare";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { nameKey: "service1", duration: "5 min",      price: "25 lei" },
    { nameKey: "service2", duration: "55 min",     price: "90 lei" },
    { nameKey: "service3", duration: "1h 10 min",  price: "130 lei" },
    { nameKey: "service4", duration: "45 min",     price: "140 lei" },
    { nameKey: "service5", duration: "—",          price: "—" },
    { nameKey: "service6", duration: "25 min",     price: "50 lei" },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-brand-bg">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="reveal text-4xl sm:text-5xl font-display font-light mb-16 sm:mb-24 text-center sm:text-left">
          {t("servicesTitle")}
        </h2>

        <div className="divide-y divide-white/5">
          {services.map((service, index) => (
            <div
              key={index}
              className="reveal flex items-center justify-between gap-4 py-6 sm:py-8 group"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex-1 min-w-0">
                <p className="text-base sm:text-lg font-body font-light tracking-wide group-hover:text-brand-accent transition-colors truncate">
                  {t(service.nameKey)}
                </p>
                <p className="text-[11px] uppercase tracking-widest text-brand-text/40 font-body mt-1">
                  {service.duration}
                </p>
              </div>

              <div className="flex items-center gap-6 shrink-0">
                <span className="text-base sm:text-lg font-body font-light text-brand-text/80">
                  {service.price}
                </span>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-block px-5 py-2 border border-brand-accent/40 text-brand-accent text-[10px] uppercase tracking-[0.2em] font-body hover:bg-brand-accent hover:text-brand-bg transition-all duration-300"
                >
                  {t("scheduleLabel")}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 sm:hidden">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 border border-brand-accent text-brand-accent text-[11px] uppercase tracking-[0.3em] font-body text-center hover:bg-brand-accent hover:text-brand-bg transition-all duration-300"
          >
            {t("scheduleLabel")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
