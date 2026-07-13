const invoices = [
  { id: '85842ba0', customer: 'Ada Lovelace', email: 'ada@lovelace.com', amount: '$157.95', date: 'Dec 6, 2022', status: 'Pending' },
  { id: '85842ba1', customer: 'Grace Hopper', email: 'grace@hopper.com', amount: '$320.50', date: 'Dec 4, 2022', status: 'Paid' },
  { id: '85842ba2', customer: 'Alan Turing', email: 'alan@turing.com', amount: '$540.00', date: 'Dec 2, 2022', status: 'Paid' },
];

function statusClass(status) {
  if (status === 'Paid') return 'status-pill status-paid';
  if (status === 'Pending') return 'status-pill status-pending';
  return 'status-pill status-draft';
}

export default function InvoicesPage() {
  return (
    <section className="invoice-page">
      <div className="page-header">
        <div>
          <p className="eyebrow">Invoices</p>
          <h1>Invoices</h1>
        </div>
      </div>

      <div className="card invoice-card">
        <div className="toolbar">
          <input className="search-input" type="search" placeholder="Search invoices" />
          <button className="button-primary">Create Invoice +</button>
        </div>

        <div className="table-wrapper">
          <table className="table invoice-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Email</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td>{invoice.id}</td>
                  <td>{invoice.customer}</td>
                  <td>{invoice.email}</td>
                  <td>{invoice.amount}</td>
                  <td>{invoice.date}</td>
                  <td>
                    <span className={statusClass(invoice.status)}>{invoice.status}</span>
                  </td>
                  <td className="table-actions">
                    <button className="icon-button" aria-label="Edit">✎</button>
                    <button className="icon-button" aria-label="Delete">🗑</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <button className="page-button">←</button>
          <button className="page-button active">1</button>
          <button className="page-button">2</button>
          <button className="page-button">...</button>
          <button className="page-button">5</button>
          <button className="page-button">6</button>
          <button className="page-button">→</button>
        </div>
      </div>
    </section>
  );
}
