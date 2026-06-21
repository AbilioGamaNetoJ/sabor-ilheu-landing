import { MenuItem } from "@/types";

export const MENU_ITEMS: MenuItem[] = [
  // Pratos
  {
    name: "Moqueca de Peixe",
    description:
      "Moqueca típica com peixe fresco, leite de coco, dendê, pimentões e tomates. Acompanha arroz e pirão.",
    price: "R$ 79,90",
    image: "/images/menu/moqueca-peixe.jpg",
    category: "pratos",
  },
  {
    name: "Caldeirada de Frutos do Mar",
    description:
      "Caldo encorpado com peixe, camarão, mariscos e legumes frescos. Prato típico açoriano.",
    price: "R$ 94,90",
    image: "/images/menu/prato-frutos-mar.jpg",
    category: "pratos",
  },
  {
    name: "Sequência de Camarão",
    description:
      "Camarão à milanesa, alho e óleo, e ao molho especial. Acompanha arroz, batata frita e salada.",
    price: "R$ 89,90",
    image: "/images/menu/sequencia-camarao.jpg",
    category: "pratos",
  },
  {
    name: "Peixe Grelhado",
    description:
      "Filé de peixe grelhado na manteiga com legumes salteados. Acompanha arroz e salada da casa.",
    price: "R$ 69,90",
    image: "/images/menu/peixe-grelhado.jpg",
    category: "pratos",
  },
  // Porções
  {
    name: "Porção de Camarão",
    description:
      "Camarão empanado ou alho e óleo. Porção generosa para compartilhar.",
    price: "R$ 59,90",
    image: "/images/menu/porcao-camarao.jpg",
    category: "porcoes",
  },
  {
    name: "Porção de Ostras",
    description:
      "Ostras frescas da região servidas com limão e molho especial.",
    price: "R$ 49,90",
    image: "/images/menu/porcao-ostras.jpg",
    category: "porcoes",
  },
  {
    name: "Pastéis de Camarão",
    description:
      "Pastéis crocantes recheados com camarão e catupiry. Acompanha molho especial.",
    price: "R$ 34,90",
    image: "/images/menu/pasteis.jpg",
    category: "porcoes",
  },
  // Bebidas
  {
    name: "Caipirinha de Limão",
    description:
      "Caipirinha tradicional de limão com cachaça artesanal e muito gelo.",
    price: "R$ 18,90",
    image: "/images/menu/caipirinha-limao.jpg",
    category: "bebidas",
  },
  {
    name: "Caipirinha de Maracujá",
    description:
      "Caipirinha tropical de maracujá com morango, cachaça artesanal e gelo.",
    price: "R$ 22,90",
    image: "/images/menu/caipirinha-maracuja.jpg",
    category: "bebidas",
  },
  {
    name: "Drink de Morango",
    description:
      "Drink refrescante de morango com frutas, vodka e muito gelo — com vista para o mar.",
    price: "R$ 24,90",
    image: "/images/menu/drink-morango.jpg",
    category: "bebidas",
  },
];

export const MENU_CATEGORIES = [
  { id: "pratos", label: "Pratos" },
  { id: "porcoes", label: "Porções" },
  { id: "bebidas", label: "Bebidas" },
] as const;
