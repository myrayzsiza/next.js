export default function DashboardPage() {
  return (
    <section className="dashboard-page">
      <div className="section-header">
        <div>
          <p className="eyebrow">Dashboard</p>
          <h1>Overview</h1>
        </div>
        <button className="button-primary">Create report</button>
      </div>

      <div className="stats-grid">
        <div className="card stats-card">
          <p className="eyebrow">Sales</p>
          <p className="stat-value">$29,430</p>
          <p className="stat-note stat-note-green">+14.2% from last month</p>
        </div>
        <div className="card stats-card">
          <p className="eyebrow">Customers</p>
          <p className="stat-value">1,241</p>
          <p className="stat-note stat-note-blue">New customers this month</p>
        </div>
        <div className="card stats-card">
          <p className="eyebrow">Invoices</p>
          <p className="stat-value">72</p>
          <p className="stat-note stat-note-orange">5 pending approval</p>
        </div>
      </div>

      <div className="card invoice-card">
        <div className="section-header">
          <div>
            <h2>Recent activity</h2>
            <p className="subtext">Latest updates from the Acme dashboard</p>
          </div>
          <span className="badge">Live</span>
        </div>

        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Event</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Invoice #1290 paid</td>
                <td>2026-07-05</td>
                <td><span className="badge">Paid</span></td>
              </tr>
              <tr>
                <td>New customer signed up</td>
                <td>2026-07-04</td>
                <td><span className="badge">Active</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
