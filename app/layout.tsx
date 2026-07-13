import './ui/global.css';
import SideNav from './ui/sidenav';
import AcmeLogo from './ui/acme-logo';
import RemoveLargeImages from './ui/remove-large-images';
import { inter } from './ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <RemoveLargeImages />
        {/* Mobile top header (visible on small screens only) */}
        <div className="md:hidden px-4 py-3">
          <div className="flex items-center justify-between">
            <AcmeLogo />
            <div className="flex items-center gap-3">
              <button aria-hidden className="p-2 rounded-lg bg-white/10 text-white">🏠</button>
              <button aria-hidden className="p-2 rounded-lg bg-white/10 text-white">🧾</button>
              <button aria-hidden className="p-2 rounded-lg bg-white/10 text-white">👥</button>
            </div>
          </div>
        </div>
        <div className="app-shell">
          <SideNav />
          <main className="page-content">
            <div className="main-content">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
