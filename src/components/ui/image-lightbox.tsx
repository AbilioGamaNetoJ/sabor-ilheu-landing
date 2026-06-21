"use client";

import { useEffect, useCallback, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type LightboxImage = {
  src: string;
  alt: string;
};

type ImageLightboxProps = {
  images: LightboxImage[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
};

export default function ImageLightbox({
  images,
  initialIndex,
  isOpen,
  onClose,
}: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Sincroniza o índice quando o lightbox abre com uma imagem diferente
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev < images.length - 1 ? prev + 1 : prev
    );
  }, [images.length]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          event.preventDefault();
          goToPrevious();
          break;
        case "ArrowRight":
          event.preventDefault();
          goToNext();
          break;
      }
    },
    [isOpen, onClose, goToPrevious, goToNext]
  );

  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];
  if (!currentImage) return null;

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Visualização ampliada da imagem"
    >
      {/* Botão fechar */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Fechar"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Navegação anterior */}
      {hasPrev && (
        <>
          <div
            className="absolute inset-y-0 left-0 z-10 w-1/4 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
        </>
      )}

      {/* Navegação seguinte */}
      {hasNext && (
        <>
          <div
            className="absolute inset-y-0 right-0 z-10 w-1/4 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </>
      )}

      {/* Imagem */}
      <div
        className="relative flex items-center justify-center max-h-full max-w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={currentIndex}
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl select-none"
          draggable={false}
        />

        {/* Indicador de posição */}
        <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm text-white/80 font-body select-none">
          {currentIndex + 1} / {images.length}
        </span>
      </div>
    </div>
  );
}
