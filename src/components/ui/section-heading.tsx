type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

function WaveIcon() {
  return (
    <svg
      viewBox="0 0 40 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto h-5 w-auto text-terracota"
      aria-hidden="true"
    >
      <path
        d="M0 8 C5 2, 10 7, 15 4 C20 1, 25 8, 30 5 C35 2, 40 7, 40 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16 text-center">
      <WaveIcon />

      <h2 className="mt-3 text-[2rem] md:text-[2.75rem] font-heading font-bold leading-tight text-azul-mar">
        {title}
      </h2>

      {/* Linha dupla decorativa */}
      <div className="mx-auto mt-5 flex items-center justify-center gap-2" aria-hidden="true">
        <span className="block h-0.5 w-14 rounded-full bg-terracota" />
        <span className="block h-0.5 w-8 rounded-full bg-verde-agua" />
      </div>

      {subtitle && (
        <p className="mt-5 text-lg text-gray-700 max-w-2xl mx-auto font-body leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
