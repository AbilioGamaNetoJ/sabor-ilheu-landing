"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/section-heading";
import ScrollReveal from "@/components/ui/scroll-reveal";
import WaveDivider from "@/components/ui/wave-divider";
import ImageLightbox from "@/components/ui/image-lightbox";

const GALLERY_IMAGES = [
  { src: "/images/gallery/gallery-01.jpg", alt: "Prato de frutos do mar do Sabor Ilhéu" },
  { src: "/images/gallery/gallery-02.jpg", alt: "Momento especial no restaurante à beira-mar" },
  { src: "/images/gallery/gallery-03.jpg", alt: "Sabor Ilhéu — ambiente rústico e acolhedor" },
  { src: "/images/gallery/gallery-04.jpg", alt: "Porção de camarão e frutos do mar frescos" },
  { src: "/images/gallery/gallery-05.jpg", alt: "Cliente saboreando prato típico manezinho" },
  { src: "/images/gallery/gallery-06.jpg", alt: "Cozinha nativa — preparo artesanal" },
  { src: "/images/gallery/gallery-07.jpg", alt: "Drinks tropicais e caipirinhas do bar" },
  { src: "/images/gallery/gallery-08.jpg", alt: "Prato especial de peixe grelhado" },
  { src: "/images/gallery/gallery-09.jpg", alt: "Vista privilegiada da Barra da Lagoa" },
  { src: "/images/gallery/gallery-10.jpg", alt: "Ambiente familiar e atendimento personalizado" },
  { src: "/images/gallery/gallery-11.jpg", alt: "Moqueca e caldeirada — especialidades da casa" },
  { src: "/images/gallery/ambiente-jantar.jpg", alt: "Salão de jantar rústico do Sabor Ilhéu" },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    currentIndex: number;
  }>({
    isOpen: false,
    currentIndex: 0,
  });

  const openLightbox = (index: number) => {
    setLightbox({ isOpen: true, currentIndex: index });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, currentIndex: 0 });
  };

  return (
    <section id="galeria" className="relative bg-areia bg-texture-waves section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Conheça o Ilhéu"
            subtitle="Fotos do ambiente, pratos e da nossa vista privilegiada"
          />
        </ScrollReveal>

        {/* Masonry grid assimétrico */}
        <div className="mt-12 columns-2 md:columns-3 lg:columns-4 gap-4">
          {GALLERY_IMAGES.map((image, index) => {
            // Alterna proporções para efeito masonry
            const ratios = ["aspect-[3/4]", "aspect-square", "aspect-[4/3]", "aspect-square"];
            const ratio = ratios[index % ratios.length];

            return (
              <ScrollReveal key={index} delay={index * 60}>
                <button
                  onClick={() => openLightbox(index)}
                  className={`group relative overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-azul-mar focus-visible:ring-offset-2 w-full mb-4 break-inside-avoid ${ratio}`}
                  aria-label={`Abrir foto: ${image.alt}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-azul-mar/0 group-hover:bg-azul-mar/20 transition-colors duration-300 rounded-lg" />
                </button>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <WaveDivider fill="#FAFAFA" />

      {/* Lightbox */}
      <ImageLightbox
        images={GALLERY_IMAGES}
        initialIndex={lightbox.currentIndex}
        isOpen={lightbox.isOpen}
        onClose={closeLightbox}
      />
    </section>
  );
}
