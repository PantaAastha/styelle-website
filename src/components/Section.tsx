import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  bg?: "default" | "muted" | "gradient";
}

export default function Section({ id, className = "", children, bg = "default" }: SectionProps) {
  const bgStyles = {
    default: "bg-background",
    muted: "bg-black/5",
    gradient: "bg-gradient-to-b from-background to-[#f5f0ed]",
  };

  return (
    <section id={id} className={`w-full py-20 md:py-32 ${bgStyles[bg]} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {children}
      </div>
    </section>
  );
}
