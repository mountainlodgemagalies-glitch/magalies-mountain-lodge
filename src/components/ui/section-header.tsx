import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accent?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeader({ title, subtitle, accent = false, className, light = false }: SectionHeaderProps) {
  return (
    <div className={cn("text-center max-w-3xl mx-auto mb-12 md:mb-16", className)}>
      {accent && (
        <span className={cn("text-xs font-semibold uppercase tracking-[0.5em] block mb-3", light ? "text-white/60" : "text-primary")}>
          {title}
        </span>
      )}
      {!accent && (
        <h2 className={cn("text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4", light ? "text-white" : "text-foreground")}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={cn("text-lg leading-relaxed", light ? "text-white/70" : "text-muted-foreground")}>
          {subtitle}
        </p>
      )}
      <div className={cn("w-16 h-1 mx-auto mt-6", light ? "bg-white/40" : "bg-primary")} />
    </div>
  );
}
