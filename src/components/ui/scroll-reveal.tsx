"use client";

import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  /** Delay em ms para stagger (0 = sem delay) */
  delay?: number;
  /** Classes CSS adicionais no wrapper */
  className?: string;
  /** Tag HTML do wrapper (default: div) */
  as?: ElementType;
};

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respeita prefers-reduced-motion: mostra imediatamente sem animação
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Animação: fade up + escala sutil
  const baseClasses =
    "transition-all duration-700 ease-out";
  const hiddenClasses = "opacity-0 translate-y-8 scale-[0.98]";
  const visibleClasses = "opacity-100 translate-y-0 scale-100";

  const transitionDelay = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <Tag
      ref={ref}
      className={`${baseClasses} ${visible ? visibleClasses : hiddenClasses} ${className}`}
      style={transitionDelay}
    >
      {children}
    </Tag>
  );
}
