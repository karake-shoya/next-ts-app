import Link from "next/link";
import { TocItem } from "@/libs/toc";

type Props = {
  items: TocItem[];
};

export default function Toc({ items }: Props) {
  if (items.length === 0) {
    return null;
  }

  return (
    <aside className="rounded-2xl border border-border/60 bg-card-bg p-5 text-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
        目次
      </p>
      <ul className="mt-3 space-y-2 text-text-muted">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? "pl-3" : ""}>
            <Link href={`#${item.id}`} className="transition hover:text-foreground">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
