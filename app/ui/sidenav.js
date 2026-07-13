'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './sidenav.module.css';

const links = [
  { href: '/', label: 'Home', icon: '🏠' },
  { href: '/invoices', label: 'Invoices', icon: '🧾' },
  { href: '/customers', label: 'Customers', icon: '👥' },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidenav}>
      <div className={styles.brandCard}>
        <span className={styles.brandIcon} aria-hidden="true">🌐</span>
        <span className={styles.brandLogo}>Acme</span>
      </div>
      <nav className={styles.nav} aria-label="Sidebar navigation">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${isActive ? styles.active : ''}`}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className={styles.icon} aria-hidden="true">
                {link.icon}
              </span>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>
      <button type="button" className={styles.signout}>
        <span className={styles.icon} aria-hidden="true">⎋</span>
        Sign Out
      </button>
    </aside>
  );
}
