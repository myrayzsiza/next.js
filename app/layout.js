import './globals.css';
import SideNav from './ui/sidenav';

export const metadata = {
  title: 'Acme Dashboard',
  description: 'A financial dashboard app built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <SideNav />
          <main className="page-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
