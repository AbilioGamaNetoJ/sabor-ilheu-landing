"use client";

import { useState, type JSX } from "react";
import SectionHeading from "@/components/ui/section-heading";
import ScrollReveal from "@/components/ui/scroll-reveal";
import WaveDivider from "@/components/ui/wave-divider";
import Button from "@/components/ui/button";
import { MENU_ITEMS, MENU_CATEGORIES } from "@/lib/menu-data";
import { SITE_CONFIG } from "@/lib/constants";
import { formatWhatsAppUrl } from "@/lib/utils";

type MenuItem = (typeof MENU_ITEMS)[number];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] =
    useState<string>("pratos");

  const filteredItems = MENU_ITEMS.filter(
    (item) => item.category === activeCategory
  );

  const whatsappUrl = formatWhatsAppUrl(
    SITE_CONFIG.whatsapp,
    "Olá! Gostaria de saber mais sobre o cardápio do Sabor Ilhéu."
  );

  return (
    <section id="cardapio" className="relative bg-white section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Nosso Cardápio"
            subtitle="Frutos do mar frescos preparados com receitas caseiras"
          />
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full font-body font-semibold text-sm md:text-base transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-azul-mar focus-visible:ring-offset-2 ${
                  activeCategory === cat.id
                    ? "bg-azul-mar text-white shadow-md"
                    : "bg-areia text-azul-mar hover:bg-azul-mar/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 80}>
                <MenuItemCard item={item} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 font-body py-12">
            Nenhum item encontrado nesta categoria.
          </p>
        )}

        {/* WhatsApp CTA */}
        <ScrollReveal delay={200}>
          <div className="mt-16 text-center">
            <p className="text-gray-600 font-body mb-6">
              Consulte o cardápio completo no restaurante ou via WhatsApp
            </p>
            <Button variant="primary" href={whatsappUrl}>
              Falar no WhatsApp
            </Button>
          </div>
        </ScrollReveal>
      </div>

      <WaveDivider fill="#F5EFE6" />
    </section>
  );
}

function MenuItemCard({ item }: { item: MenuItem }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="bg-areia rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-l-4 border-terracota">
      {/* Image */}
      {imgError || !item.image ? (
        <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
          <span className="text-sm text-gray-400 font-body">
            Foto em breve
          </span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.image}
          alt={item.name}
          className="h-48 w-full object-cover"
          onError={() => setImgError(true)}
          loading="lazy"
        />
      )}

      {/* Content */}
      <div className="px-5 pt-4">
        <h3 className="font-heading font-bold text-lg text-azul-mar">
          {item.name}
        </h3>
        <p className="text-sm text-gray-700 mt-1 font-body leading-relaxed">
          {item.description}
        </p>
      </div>
      <div className="px-5 pb-4 mt-2">
        <span className="font-bold text-terracota font-body text-base">
          {item.price}
        </span>
      </div>
    </article>
  );
}
