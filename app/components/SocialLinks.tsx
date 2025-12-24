import { GitHubIcon } from "./icons";

type Props = {
  size?: "sm" | "md";
  variant?: "simple" | "glass";
  className?: string;
};

const links = [
  {
    href: "https://github.com/karake-shoya",
    label: "GitHub",
    icon: GitHubIcon,
    hoverColor: "hover:text-accent-primary",
  },
  {
    href: "https://qiita.com/shoya_u",
    label: "Qiita",
    icon: null,
    hoverColor: "hover:text-accent-secondary",
  },
];

export default function SocialLinks({
  size = "sm",
  variant = "simple",
  className = "",
}: Props) {
  const iconSize = size === "sm" ? "w-5 h-5" : "w-6 h-6";
  const imgSize = size === "sm" ? 20 : 24;
  const gap = size === "sm" ? "gap-6" : "gap-4";

  const baseStyles = "transition-all duration-300";
  const variantStyles =
    variant === "glass"
      ? "glass glass-hover p-3 rounded-xl hover:scale-110"
      : "";

  return (
    <div className={`flex items-center ${gap} ${className}`}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-text-muted ${link.hoverColor} ${baseStyles} ${variantStyles}`}
        >
          {link.icon ? (
            <link.icon className={iconSize} />
          ) : (
            <img
              src="/qiita-icon.png"
              alt={link.label}
              width={imgSize}
              height={imgSize}
              className="opacity-60 hover:opacity-100 transition-opacity"
            />
          )}
        </a>
      ))}
    </div>
  );
}

