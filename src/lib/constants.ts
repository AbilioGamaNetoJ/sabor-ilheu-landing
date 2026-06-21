import { SiteConfig } from "@/types";

export const SITE_CONFIG: SiteConfig = {
  name: "Sabor Ilhéu Bar & Restaurante",
  slogan: "Ilhéu, um sabor à beira-mar",
  description:
    "Restaurante 100% nativo especializado em frutos do mar. Cozinha caseira manezinha, ambiente rústico e acolhedor à beira-mar na Barra da Lagoa, Florianópolis.",
  address: {
    street: "Rua Amaro Coelho, 237",
    neighborhood: "Barra da Lagoa",
    city: "Florianópolis",
    state: "SC",
    full: "Rua Amaro Coelho, 237 — Barra da Lagoa, Florianópolis - SC",
  },
  hours: "Todos os dias, das 10h às 18h",
  phone: "(48) 9-9120-5700",
  whatsapp: "5548991205700",
  email: "ilheusabor@gmail.com",
  social: {
    instagram: "https://www.instagram.com/saborilheu.restaurante/",
    facebook: "https://www.facebook.com/saborilheufloripa/",
  },
  // Embed por endereço — não requer API key
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=Rua+Amaro+Coelho+237+Barra+da+Lagoa+Florianopolis+SC&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleMapsDirectionsUrl:
    "https://www.google.com/maps/dir//Rua+Amaro+Coelho+237,+Barra+da+Lagoa,+Florian%C3%B3polis+-+SC",
  // URL da listagem no Maps — atualizar com URL do Google Business Profile quando disponível
  googleMapsUrl:
    "https://www.google.com/maps/search/Sabor+Ilh%C3%A9u+Bar+e+Restaurante+Barra+da+Lagoa+Florian%C3%B3polis+SC",
  // Substituir pelo link "Escreva uma avaliação" do Google Business Profile
  googleWriteReviewUrl:
    "https://www.google.com/maps/search/Sabor+Ilh%C3%A9u+Bar+e+Restaurante+Barra+da+Lagoa+Florian%C3%B3polis+SC",
  googleRating: 4.3,
  googleReviewCount: 97,
};

export const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
] as const;
