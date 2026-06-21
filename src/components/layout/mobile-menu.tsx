"use client";

import { useEffect } from "react";
import { X, Home, BookOpen, Images, MapPin, Star, Phone } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const NAV_ICONS: Record<string, React.ElementType> = {
  "/": Home,
  "/#cardapio": BookOpen,
  "/#galeria": Images,
  "/#localizacao": MapPin,
  "/#avaliacoes": Star,
  "/#contato": Phone,
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Side Panel */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-80 flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#2D2D2D]/10">
          <div>
            <p className="font-heading text-xl font-bold text-azul-mar leading-tight">Sabor Ilhéu</p>
            <p className="font-body text-xs text-[#2D2D2D]/60 tracking-widest uppercase mt-0.5">Bar & Restaurante</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2D2D2D]/5 text-[#2D2D2D] transition-colors hover:bg-areia"
            aria-label="Fechar menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-1 flex-col px-4 pt-6">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link, index) => {
              const Icon = NAV_ICONS[link.href] ?? Home;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={onClose}
                    className="group flex items-center gap-4 rounded-xl px-4 py-3.5 font-body text-base font-semibold text-[#2D2D2D] transition-all duration-200 hover:bg-terracota hover:text-white hover:shadow-md active:scale-95"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#2D2D2D]/5 text-[#2D2D2D]/40 transition-colors group-hover:bg-white/20 group-hover:text-white">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="tracking-wide">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="px-6 pb-8 pt-4 border-t border-[#2D2D2D]/10">
          <p className="font-body text-xs text-[#2D2D2D]/55 text-center">
            Barra da Lagoa · Florianópolis - SC
          </p>
        </div>
      </div>
    </>
  );
}
