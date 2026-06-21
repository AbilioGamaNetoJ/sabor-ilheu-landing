import { MapPin, Navigation, ExternalLink } from "lucide-react";

import { SITE_CONFIG } from "@/lib/constants";
import Button from "@/components/ui/button";
import ScrollReveal from "@/components/ui/scroll-reveal";
import SectionHeading from "@/components/ui/section-heading";

export default function LocationSection() {
  return (
    <section id="localizacao" className="bg-white section-padding">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading title="Onde Estamos" />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          {/* Google Maps Embed */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <iframe
              src={SITE_CONFIG.googleMapsEmbedUrl}
              title="Localizacao do Sabor Ilheu no Google Maps"
              className="h-96 w-full border-none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* Address & Info */}
          <div className="mt-8 space-y-4">
            {/* Endereco completo */}
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-terracota" aria-hidden="true" />
              <p className="font-body text-base text-gray-700 md:text-lg">
                {SITE_CONFIG.address.full}
              </p>
            </div>

            {/* Pontos de referencia */}
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
              <div className="flex items-center gap-3">
                <Navigation className="h-5 w-5 shrink-0 text-terracota" aria-hidden="true" />
                <p className="font-body text-sm text-gray-600">
                  A 5 minutos a pe da Praia da Barra da Lagoa
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Navigation className="h-5 w-5 shrink-0 text-terracota" aria-hidden="true" />
                <p className="font-body text-sm text-gray-600">
                  Proximo a Rodovia SC-406
                </p>
              </div>
            </div>

            {/* Botao Como Chegar */}
            <Button
              variant="outline"
              href={SITE_CONFIG.googleMapsDirectionsUrl}
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Como Chegar
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
