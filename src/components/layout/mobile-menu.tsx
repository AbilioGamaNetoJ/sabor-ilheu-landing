"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import Button from "@/components/ui/button";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  /* Prevent body scroll when menu is open */
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

  const whatsappHref = `https://wa.me/${SITE_CONFIG.whatsapp}`;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Side Panel */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        {/* Close Button */}
        <div className="flex items-center justify-end px-4 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-[#2D2D2D] transition-colors hover:bg-areia"
            aria-label="Fechar menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-1 flex-col px-6 pt-6">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={onClose}
                  className="block rounded-lg px-4 py-3 font-body text-base font-bold text-[#2D2D2D] transition-colors hover:bg-areia hover:text-terracota"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* WhatsApp Button */}
        <div className="px-6 pb-8">
          <Button variant="outline" href={whatsappHref} className="w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icone-whatsapp.png" alt="" width={20} height={20} aria-hidden="true" className="brightness-0 invert" />
            Fale Conosco
          </Button>
        </div>
      </div>
    </>
  );
}
