"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { REVIEWS } from "@/lib/reviews-data";
import { SITE_CONFIG } from "@/lib/constants";
import SectionHeading from "@/components/ui/section-heading";
import Button from "@/components/ui/button";

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const total = REVIEWS.length;

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 5000);
    return () => clearInterval(id);
  }, [isPaused, total, resetKey]);

  const goTo = (index: number) => {
    setCurrent(index);
    setResetKey((k) => k + 1);
  };

  return (
    <section id="avaliacoes" className="bg-white section-padding">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Quem Vem, Recomenda"
          subtitle={`Nota ${SITE_CONFIG.googleRating}★ | ${SITE_CONFIG.googleReviewCount} avaliações no Google`}
        />

        <div
          className="relative mt-12 px-10 md:px-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Track deslizante */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {REVIEWS.map((review, i) => (
                <div key={i} className="w-full shrink-0">
                  <div className="bg-areia rounded-xl p-8 md:p-14 flex flex-col items-center text-center">
                    <Quote
                      className="h-8 w-8 text-terracota/40 mb-4"
                      aria-hidden="true"
                    />

                    <div className="flex items-center gap-1 mb-5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star
                          key={s}
                          className={`h-5 w-5 ${
                            s < review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-gray-700 text-lg md:text-xl italic leading-relaxed mb-8 max-w-2xl">
                      &ldquo;{review.text}&rdquo;
                    </p>

                    <div>
                      <p className="font-heading font-bold text-azul-mar">
                        {review.author}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">{review.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botão anterior */}
          <button
            onClick={() => goTo((current - 1 + total) % total)}
            className="absolute left-0 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-200 shadow-md hover:border-terracota hover:shadow-lg transition-all"
            aria-label="Avaliação anterior"
          >
            <ChevronLeft className="h-5 w-5 text-azul-mar" />
          </button>

          {/* Botão próximo */}
          <button
            onClick={() => goTo((current + 1) % total)}
            className="absolute right-0 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-200 shadow-md hover:border-terracota hover:shadow-lg transition-all"
            aria-label="Próxima avaliação"
          >
            <ChevronRight className="h-5 w-5 text-azul-mar" />
          </button>
        </div>

        {/* Indicadores de posição */}
        <div className="flex justify-center gap-2 mt-6">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-terracota"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ir para avaliação ${i + 1}`}
            />
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <Button variant="outline" href={SITE_CONFIG.googleMapsUrl}>
            Ver todas as avaliações
          </Button>
          <Button variant="outline" href={SITE_CONFIG.googleWriteReviewUrl}>
            Deixe sua avaliação
          </Button>
        </div>
      </div>
    </section>
  );
}
