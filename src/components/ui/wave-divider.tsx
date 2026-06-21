type WaveDividerProps = {
  /** Cor de preenchimento (hex da cor abaixo) */
  fill?: string;
  /** Inverte a direção da onda */
  flip?: boolean;
};

export default function WaveDivider({
  fill = "#F5EFE6",
  flip = false,
}: WaveDividerProps) {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden leading-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={`block w-full h-12 md:h-20 ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
