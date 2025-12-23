export default function About() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-extrabold text-gray-800 mb-10 text-center">
          About this blog
        </h1>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            こんにちは！これはNext.jsとTypeScriptの学習用ブログです。
            実際に手を動かしながら、モダンなWeb開発技術を学んでいます。
          </p>
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">技術スタック</h2>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">目標</h2>
            <p>
              このブログを通じて、Next.jsとTypeScriptの基本的な使い方を習得し、
              実際の開発現場で活用できるようになることが目標です。
            </p>
          </div>
          <h1 className="text-2xl font-extrabold text-gray-800 mb-10 text-center">
            Author
          </h1>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-gray-600 text-xl">
              Name: <span className="font-bold">Shoya Ueno</span>
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/karake-shoya" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-gray-800"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://qiita.com/shoya_u" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <img src="/qiita-icon.png" alt="Qiita" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}