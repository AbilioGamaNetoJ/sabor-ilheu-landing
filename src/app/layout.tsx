import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Sabor Ilhéu | Restaurante de Frutos do Mar — Barra da Lagoa, Floripa",
  description:
    "Restaurante 100% nativo especializado em frutos do mar à beira-mar na Barra da Lagoa, Florianópolis. Comida caseira, atendimento familiar, quase 10 anos de tradição. Das 10h às 18h.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Sabor Ilhéu — Um sabor à beira-mar",
    description: "Restaurante 100% nativo de frutos do mar na Barra da Lagoa, Floripa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Sabor Ilhéu Bar & Restaurante",
    description:
      "Restaurante 100% nativo especializado em frutos do mar à beira-mar na Barra da Lagoa, Florianópolis. Comida caseira, atendimento familiar, quase 10 anos de tradição.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://saborilheu.com.br",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Amaro Coelho",
      addressLocality: "Barra da Lagoa",
      addressRegion: "SC",
      addressCountry: "BR",
    },
    servesCuisine: "Frutos do Mar, Cozinha Manezinha, Açoriana",
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "18:00",
    },
    telephone: "(48) 99999-9999",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.3",
      reviewCount: "97",
    },
    sameAs: [
      "https://www.instagram.com/saborilheu.restaurante/",
      "https://www.facebook.com/saborilheu",
    ],
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${lato.variable} font-body antialiased min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
