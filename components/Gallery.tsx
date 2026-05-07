"use client";

import React, { useEffect } from "react";

import { useLanguage } from "@/context/LanguageContext";

const Gallery = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.05 }
    );

    const elements = document.querySelectorAll("#gallery .reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const slots = [
    { span: "col-span-1 aspect-[3/4]", img: "/gallery/ig/post_1.jpg" },
    { span: "col-span-1 aspect-[3/4]", img: "/gallery/ig/post_2.jpg" },
    { span: "col-span-1 aspect-[3/4]", img: "/gallery/ig/post_3.jpg" },
    { span: "col-span-1 aspect-[3/4]", img: "/gallery/ig/post_4.jpg" },
  ];

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-brand-bg">
      <div className="container mx-auto px-6">
        <h2 className="reveal text-4xl sm:text-5xl font-display font-light mb-16 sm:mb-24">
          {t("galleryTitle")}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {slots.map((slot, index) => (
            <div
              key={index}
              className={`reveal relative overflow-hidden bg-brand-surface group ${slot.span}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slot.img}
                alt={`Gallery ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-brand-bg/20 group-hover:bg-transparent transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-body text-brand-text/50">RAFAH STUDIO</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
