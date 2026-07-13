export default function InventoryPage() {
  return (
    <section>
      <div className="section-header">
        <div>
          <p style={{ margin: 0, color: '#64748b' }}>Inventory</p>
          <h1>Inventory overview</h1>
        </div>
      </div>
      <div className="card">
        <p>Placeholder content for inventory page.</p>
        <table className="table" style={{ marginTop: '1rem' }}>
          <thead>
            <tr>
              <th>Item</th>
              <th>Stock</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Widgets</td>
              <td>244</td>
              <td><span className="badge">In stock</span></td>
            </tr>
            <tr>
              <td>Gadgets</td>
              <td>89</td>
              <td><span className="badge">Low</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
