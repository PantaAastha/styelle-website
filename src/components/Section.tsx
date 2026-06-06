"use client";

import { ReactNode } from "react";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  bg?: "default" | "muted" | "gradient";
}

export default function Section({ id, className = "", children, bg = "default" }: SectionProps) {
  const { ref, isVisible } = useAnimateOnScroll();

  const bgStyles = {
    default: "bg-background",
    muted: "bg-muted",
    gradient: "bg-gradient-to-b from-background to-muted",
  };

  return (
    <section id={id} className={`w-full py-20 md:py-32 ${bgStyles[bg]} ${className}`}>
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 max-w-6xl animate-on-scroll ${isVisible ? "is-visible" : ""}`}
      >
        {children}
      </div>
    </section>
  );
}
