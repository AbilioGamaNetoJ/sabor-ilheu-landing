import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-azul-mar text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        {/* Grid Content */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand & Address */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl text-white">
              Sabor Ilhéu
            </h3>
            <p className="font-body text-sm leading-relaxed text-white/80">
              {SITE_CONFIG.address.full}
            </p>
            <p className="font-body text-sm text-white/80">
              {SITE_CONFIG.hours}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg text-white">Links Rápidos</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/70 transition-colors hover:text-terracota"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg text-white">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors hover:border-terracota hover:text-terracota"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors hover:border-terracota hover:text-terracota"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
            <p className="font-body text-sm text-white/70">
              {SITE_CONFIG.phone}
            </p>
            <p className="font-body text-sm text-white/70">
              {SITE_CONFIG.email}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/20" />

        {/* Copyright */}
        <div className="text-center">
          <p className="font-body text-xs text-white/60">
            &copy; {currentYear} Sabor Ilhéu Bar & Restaurante. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
