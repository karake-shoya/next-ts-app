export type TocItem = {
  id: string;
  text: string;
  level: number;
};

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\u3040-\u30ff\u4e00-\u9faf]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function extractToc(markdown: string): TocItem[] {
  const lines = markdown.split("\n");
  const items: TocItem[] = [];
  lines.forEach((line) => {
    const match = /^(#{2,3})\s+(.*)/.exec(line.trim());
    if (!match) return;
    const level = match[1].length;
    const text = match[2].replace(/#+$/, "").trim();
    items.push({
      id: slugifyHeading(text),
      text,
      level,
    });
  });
  return items;
}
