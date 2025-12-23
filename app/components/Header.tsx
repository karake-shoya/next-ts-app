import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 bacdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-800 hober:text-blue-600 transition-colors">
          Tech Blog
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}