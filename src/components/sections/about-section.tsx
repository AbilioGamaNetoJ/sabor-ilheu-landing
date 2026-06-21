import { Fish, MapPin, House, ChefHat, Anchor, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import ScrollReveal from "@/components/ui/scroll-reveal";
import WaveDivider from "@/components/ui/wave-divider";

type Differential = {
  icon: LucideIcon;
  color: string;
  iconColor: string;
  title: string;
  description: string;
};

const DIFFERENTIALS: Differential[] = [
  {
    icon: Fish,
    color: "bg-azul-mar/10",
    iconColor: "text-azul-mar",
    title: "Cozinha 100% Nativa",
    description: "Identidade manezinha autêntica",
  },
  {
    icon: MapPin,
    color: "bg-terracota/10",
    iconColor: "text-terracota",
    title: "A Beira-Mar",
    description: "Localização privilegiada na Barra da Lagoa",
  },
  {
    icon: House,
    color: "bg-verde-agua/10",
    iconColor: "text-verde-agua",
    title: "Ambiente Rústico",
    description: "Espaço acolhedor e familiar",
  },
  {
    icon: ChefHat,
    color: "bg-azul-mar/10",
    iconColor: "text-azul-mar",
    title: "Chef Carol",
    description: "Atendimento personalizado",
  },
  {
    icon: Anchor,
    color: "bg-terracota/10",
    iconColor: "text-terracota",
    title: "Pesca Local",
    description: "Frescor dos ingredientes do dia",
  },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="relative py-16 md:py-24 bg-areia bg-texture-waves">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading title="Nossa História" />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="drop-cap text-base md:text-lg text-gray-700 max-w-4xl mx-auto text-center md:text-left font-body leading-relaxed">
            Fundado em setembro de 2016 por Daniel Souza da Conceição, o Sabor
            Ilhéu nasceu do sonho de levar a{" "}
            <strong className="text-terracota font-bold">
              autêntica cozinha manezinha
            </strong>{" "}
            à beira-mar da Barra da Lagoa. Há quase 10 anos, o restaurante é
            referência em frutos do mar frescos, preparados com receitas caseiras
            que passam de geração em geração. Sob o comando da{" "}
            <strong className="text-azul-mar font-bold">Chef Carol</strong>, cada
            prato é uma experiência única que celebra a cultura açoriana de
            Florianópolis.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {DIFFERENTIALS.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={i * 120}>
                <div
                  className="bg-white rounded-lg pt-0 pb-6 px-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center overflow-hidden border-t-4 border-terracota"
                >
                  <div
                    className={`mx-auto mt-6 mb-4 flex h-14 w-14 items-center justify-center rounded-full ${item.color}`}
                  >
                    <Icon className={`h-7 w-7 ${item.iconColor}`} aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-azul-mar mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 font-body">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <WaveDivider fill="#FAFAFA" />
    </section>
  );
}
