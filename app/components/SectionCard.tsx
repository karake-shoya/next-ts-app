import type { ReactNode } from "react";

type SectionCardProps = {
  title: string;
  icon: string;
  children: ReactNode;
  className?: string;
  animationClassName?: string;
  iconClassName?: string;
};

export default function SectionCard({
  title,
  icon,
  children,
  className,
  animationClassName,
  iconClassName,
}: SectionCardProps) {
  return (
    <section
      className={`rounded-3xl border border-border/60 bg-card-bg p-8 md:p-12 ${
        animationClassName ?? ""
      } ${
        className ?? ""
      }`}
      style={animationClassName ? { opacity: 0 } : undefined}
    >
      <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
        <span
          className={`w-8 h-8 rounded-lg bg-linear-to-br flex items-center justify-center text-white text-sm ${
            iconClassName ?? "from-accent-primary to-accent-secondary"
          }`}
        >
          {icon}
        </span>
        {title}
      </h2>
      {children}
    </section>
  );
}
