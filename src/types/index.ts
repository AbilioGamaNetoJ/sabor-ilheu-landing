export interface MenuItem {
  name: string;
  description: string;
  price?: string;
  image: string;
  category: "pratos" | "porcoes" | "bebidas";
}

export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: "ambiente" | "pratos" | "praia";
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  slogan: string;
  description: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    full: string;
  };
  hours: string;
  phone: string;
  whatsapp: string;
  email?: string;
  social: {
    instagram: string;
    facebook: string;
  };
  googleMapsEmbedUrl: string;
  googleMapsDirectionsUrl: string;
  googleMapsUrl: string;
  googleWriteReviewUrl: string;
  googleRating: number;
  googleReviewCount: number;
}
