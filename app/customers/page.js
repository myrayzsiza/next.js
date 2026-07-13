export default function CustomersPage() {
  return (
    <section>
      <div className="section-header">
        <div>
          <p style={{ margin: 0, color: '#64748b' }}>Customers</p>
          <h1>Customer management</h1>
        </div>
      </div>
      <div className="card">
        <p>Placeholder content for customers page.</p>
        <table className="table" style={{ marginTop: '1rem' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jane Doe</td>
              <td>jane@example.com</td>
              <td><span className="badge">Active</span></td>
            </tr>
            <tr>
              <td>John Smith</td>
              <td>john@example.com</td>
              <td><span className="badge">Pending</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
