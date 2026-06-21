import { Phone, Clock } from "lucide-react";

import { SITE_CONFIG } from "@/lib/constants";
import { formatWhatsAppUrl } from "@/lib/utils";
import Button from "@/components/ui/button";
import ScrollReveal from "@/components/ui/scroll-reveal";
import WaveDivider from "@/components/ui/wave-divider";
import SectionHeading from "@/components/ui/section-heading";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section id="contato" className="relative bg-areia bg-texture-waves section-padding">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Venha nos Visitar"
            subtitle="Todos os dias, das 10h as 18h"
          />
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Card 1 - WhatsApp */}
          <ScrollReveal delay={100}>
            <div className="rounded-xl bg-white p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-4 border-verde-agua">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icone-whatsapp.png" alt="" width={40} height={40} className="mx-auto brightness-0 invert" aria-hidden="true" />
              <h3 className="mt-4 font-heading text-xl text-azul-mar">
                WhatsApp
              </h3>
              <p className="mt-2 font-body text-sm text-gray-700">
                Faca sua reserva pelo WhatsApp!
              </p>
              <Button
                variant="primary"
                href={formatWhatsAppUrl(SITE_CONFIG.whatsapp)}
                className="mt-4 w-full"
              >
                Chamar no WhatsApp
              </Button>
            </div>
          </ScrollReveal>

          {/* Card 2 - Telefone */}
          <ScrollReveal delay={200}>
            <div className="rounded-xl bg-white p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-4 border-azul-mar">
              <Phone
                className="mx-auto h-10 w-10 text-azul-mar"
                aria-hidden="true"
              />
              <h3 className="mt-4 font-heading text-xl text-azul-mar">
                Telefone
              </h3>
              <p className="mt-2 font-body text-lg font-bold">
                {SITE_CONFIG.phone}
              </p>
              <p className="mt-1 font-body text-sm text-gray-700">
                Ligue para informacoes
              </p>
            </div>
          </ScrollReveal>

          {/* Card 3 - Horario */}
          <ScrollReveal delay={300}>
            <div className="rounded-xl bg-white p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-4 border-terracota">
              <Clock
                className="mx-auto h-10 w-10 text-terracota"
                aria-hidden="true"
              />
              <h3 className="mt-4 font-heading text-xl text-azul-mar">
                Horario
              </h3>
              <p className="font-body text-lg font-bold">Todos os dias</p>
              <p className="mt-1 font-body text-2xl font-bold text-terracota">
                10h as 18h
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Redes Sociais */}
        <ScrollReveal delay={400}>
          <div className="mt-12 space-y-4">
            <p className="text-center font-body text-base text-gray-700 md:text-lg">
              Siga a gente nas redes sociais!
            </p>
            <div className="flex justify-center gap-4">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-azul-mar/30 text-azul-mar transition-colors hover:border-terracota hover:text-terracota"
                aria-label="Instagram do Sabor Ilheu"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-azul-mar/30 text-azul-mar transition-colors hover:border-terracota hover:text-terracota"
                aria-label="Facebook do Sabor Ilheu"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <WaveDivider fill="#1B5E6B" />
    </section>
  );
}
