import type { Metadata } from "next";
import { Noto_Sans_JP, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import SocialLinks from "./components/SocialLinks";

const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "U-Tech Blog | モダンなテック情報を発信",
  description: "Next.jsとTypeScriptで構築されたモダンなテックブログ。最新の技術トレンドや学習記録を発信しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSans.variable} ${jetBrainsMono.variable} antialiased`}>
        <Header />
        {children}
        <footer className="glass border-t border-white/5 mt-20">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-text-muted text-sm">
                © 2025 U-Tech Blog. All rights reserved.
              </p>
              <SocialLinks size="sm" variant="simple" />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
