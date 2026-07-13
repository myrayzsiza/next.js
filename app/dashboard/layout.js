import SideNav from '../ui/sidenav';

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc' }}>
      <SideNav />
      <div style={{ flex: 1, padding: '2rem' }}>{children}</div>
    </div>
  );
}
