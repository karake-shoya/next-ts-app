export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function stripMarkdown(text: string): string {
  return text
    .replace(/^#{1,6}\s+/gm, '')        // 見出し
    .replace(/\*\*(.+?)\*\*/g, '$1')    // 太字
    .replace(/\*(.+?)\*/g, '$1')        // イタリック
    .replace(/`{3}[\s\S]*?`{3}/g, '')   // コードブロック
    .replace(/`(.+?)`/g, '$1')          // インラインコード
    .replace(/\[(.+?)\]\(.+?\)/g, '$1') // リンク
    .replace(/^[-*+]\s+/gm, '')         // リスト
    .replace(/^\d+\.\s+/gm, '')         // 番号付きリスト
    .replace(/^>\s+/gm, '')             // 引用
    .replace(/\n{2,}/g, ' ')            // 複数改行をスペースに
    .trim();
}