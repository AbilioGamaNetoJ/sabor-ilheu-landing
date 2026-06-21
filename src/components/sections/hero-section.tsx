"use client";

import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { formatWhatsAppUrl } from "@/lib/utils";
import Button from "@/components/ui/button";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollToCardapio = () => {
    const el = document.querySelector("#cardapio");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappUrl = formatWhatsAppUrl(
    SITE_CONFIG.whatsapp,
    "Olá! Gostaria de conhecer o cardápio do Sabor Ilhéu."
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className={`relative z-10 px-4 max-w-5xl mx-auto text-center md:text-left transition-all duration-1000 ease-out ${
          mounted
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        {/* Linha decorativa sutil acima do título */}
        <span
          className={`mx-auto md:mx-0 mb-6 block h-px w-20 bg-terracota/60 transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
          aria-hidden="true"
        />

        <h1 className="font-heading font-bold leading-[1.05]">
          <span className="block text-[3.25rem] md:text-[5rem] lg:text-[7rem] text-terracota leading-[1.05]">
            Ilhéu,
          </span>
          <span className="block text-[2rem] md:text-[3rem] lg:text-[3.75rem] text-white/95">
            um sabor à beira-mar
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/85 max-w-lg md:mx-0 mx-auto mt-8 font-body leading-relaxed">
          {SITE_CONFIG.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 mt-10">
          <Button onClick={handleScrollToCardapio}>
            Ver Cardápio
          </Button>

          <Button variant="secondary" href={whatsappUrl}>
            Falar no WhatsApp
          </Button>
        </div>
      </div>

      {/* Wave divider — transição suave para bg-areia */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden leading-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full h-16 md:h-20"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#F5EFE6"
          />
        </svg>
      </div>
    </section>
  );
}
