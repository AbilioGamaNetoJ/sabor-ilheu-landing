import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
};

type ButtonAsLink = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

type ButtonProps = {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
} & (ButtonAsButton | ButtonAsLink);

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-azul-mar text-white hover:bg-azul-mar/90 shadow-md hover:shadow-lg",
  secondary:
    "bg-terracota text-white hover:bg-terracota/90 shadow-md hover:shadow-lg",
  outline:
    "border-2 border-azul-mar text-azul-mar hover:bg-azul-mar hover:text-white",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-body font-bold text-sm md:text-base transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-azul-mar focus-visible:ring-offset-2";

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props as ButtonAsLink;
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClassName}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const { href: _unused, ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={combinedClassName} {...buttonProps}>
      {children}
    </button>
  );
}
