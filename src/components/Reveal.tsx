import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  delayMs?: number;
  className?: string;
}

export default function Reveal({ children, delayMs = 0, className = "" }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${isVisible ? "fade-up" : "opacity-0"} ${className}`}
      style={{ animationDelay: isVisible ? `${delayMs}ms` : undefined }}
    >
      {children}
    </div>
  );
}
