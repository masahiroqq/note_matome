import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Note Matome",
  description: "Quiet editorial interface for notes"
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <a href="/" className="site-title">
              Note Matome
            </a>
            <nav className="site-nav" aria-label="Primary">
              <a href="/notes">Articles</a>
              <a href="#popular-notes">Popular Notes</a>
              <a href="#popular-creators">Popular Creators</a>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
