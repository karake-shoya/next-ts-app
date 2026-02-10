import { GitHubIcon, XIcon } from "./icons";
import { socialLinks } from "@/app/data/site";

type Props = {
  size?: "sm" | "md";
  variant?: "simple" | "glass";
  className?: string;
};

export default function SocialLinks({
  size = "sm",
  variant = "simple",
  className = "",
}: Props) {
  const iconSize = size === "sm" ? "w-5 h-5" : "w-6 h-6";
  const gap = size === "sm" ? "gap-6" : "gap-4";

  const baseStyles = "transition-all duration-300";
  const variantStyles =
    variant === "glass"
      ? "glass glass-hover p-3 rounded-xl hover:scale-110"
      : "";

  return (
    <div className={`flex items-center ${gap} ${className}`}>
      {socialLinks.map((link) => {
        const Icon =
          link.label === "GitHub"
            ? GitHubIcon
            : link.label === "X"
              ? XIcon
              : null;
        return (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-text-muted hover:text-foreground ${baseStyles} ${variantStyles}`}
        >
          {Icon ? (
            <Icon className={iconSize} />
          ) : (
            <span className="text-xs font-semibold tracking-wide">{link.label}</span>
          )}
        </a>
      )})}
    </div>
  );
}
