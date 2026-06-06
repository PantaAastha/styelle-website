import { ReactNode } from "react";

interface CardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  accentColor?: string;
  className?: string;
}

export default function Card({ title, description, icon, accentColor = "#b07d8b", className = "" }: CardProps) {
  return (
    <div
      className={`group flex flex-col bg-card p-8 rounded-3xl shadow-sm border border-[var(--border)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden ${className}`}
    >
      {/* Colored top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
        style={{ background: accentColor }}
      />

      {icon && (
        <div
          className="mb-6 w-12 h-12 flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${accentColor}15`, color: accentColor }}
        >
          {icon}
        </div>
      )}
      <h3 className="text-xl font-medium mb-3 text-foreground">{title}</h3>
      {description && <p className="text-foreground/70 leading-relaxed">{description}</p>}
    </div>
  );
}
