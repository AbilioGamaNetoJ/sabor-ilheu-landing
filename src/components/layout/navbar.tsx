"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import MobileMenu from "@/components/layout/mobile-menu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          {/* Logo */}
          <a
            href="/"
            className={`font-heading text-xl transition-colors hover:text-terracota ${
              scrolled ? "text-azul-mar" : "text-white"
            }`}
          >
            Sabor Ilhéu
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative font-body text-sm font-bold transition-colors hover:text-terracota after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-terracota after:transition-all after:duration-300 hover:after:w-full ${
                    scrolled ? "text-[#2D2D2D]" : "text-[#FAFAFA]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="block p-2 md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu
              className={`h-6 w-6 transition-colors ${
                scrolled ? "text-[#2D2D2D]" : "text-[#FAFAFA]"
              }`}
            />
          </button>
        </nav>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}