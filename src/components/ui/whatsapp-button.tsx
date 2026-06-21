import { SITE_CONFIG } from "@/lib/constants";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition-all duration-300 hover:bg-green-600 hover:shadow-xl hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/icone-whatsapp.png" alt="" width={28} height={28} aria-hidden="true" className="brightness-0 invert" />

      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-sm font-body text-white opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100 pointer-events-none">
        Fale conosco
      </span>
    </a>
  );
}
