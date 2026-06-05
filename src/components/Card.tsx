import { ReactNode } from "react";

interface CardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
}

export default function Card({ title, description, icon, className = "" }: CardProps) {
  return (
    <div className={`flex flex-col bg-white p-8 rounded-3xl shadow-sm border border-black/5 hover:shadow-md transition-shadow duration-300 ${className}`}>
      {icon && <div className="mb-6 text-accent w-12 h-12 flex items-center justify-center rounded-2xl bg-accent/10">{icon}</div>}
      <h3 className="text-xl font-medium mb-3 text-foreground">{title}</h3>
      {description && <p className="text-foreground/70 leading-relaxed">{description}</p>}
    </div>
  );
}
