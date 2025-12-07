import React from 'react';

const TransactionTable = ({ transactions, sortConfig, onSort }) => {
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    onSort({ key, direction });
  };

  const getSortIndicator = (name) => {
    if (sortConfig.key !== name) {
      return;
    }
    return sortConfig.direction === 'ascending' ? ' ↑' : ' ↓';
  };

  if (transactions.length === 0) {
    return <div style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>No transactions found</div>;
  }

  return (
    <div style={{ overflowX: 'auto', background: 'white', border: '1px solid var(--border)', borderRadius: '8px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--border)', background: '#f8fafc' }}>
            <th style={thStyle} onClick={() => requestSort('date')}>Date{getSortIndicator('date')}</th>
            <th style={thStyle} onClick={() => requestSort('customer_name')}>Customer{getSortIndicator('customer_name')}</th>
            <th style={thStyle}>Product</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle} onClick={() => requestSort('quantity')}>Qty{getSortIndicator('quantity')}</th>
            <th style={thStyle}>Total</th>
            <th style={thStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={tdStyle}>{t.date}</td>
              <td style={tdStyle}>
                <div style={{ fontWeight: '500' }}>{t.customer_name}</div>
                <div style={{ fontSize: '0.75rem', color: '#666' }}>{t.customer_region}</div>
              </td>
              <td style={tdStyle}>{t.product_name}</td>
              <td style={tdStyle}>
                <span style={{ 
                  padding: '2px 8px', 
                  borderRadius: '12px', 
                  background: '#eff6ff', 
                  color: '#1d4ed8',
                  fontSize: '0.75rem'
                }}>
                  {t.product_category}
                </span>
              </td>
              <td style={tdStyle}>{t.quantity}</td>
              <td style={tdStyle}>${t.total_amount}</td>
              <td style={tdStyle}>
                <span style={{ 
                    color: t.order_status === 'Completed' ? '#166534' : '#854d0e',
                    background: t.order_status === 'Completed' ? '#dcfce7' : '#fef9c3',
                    padding: '2px 8px',
                    borderRadius: '4px'
                }}>
                    {t.order_status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  padding: '1rem',
  textAlign: 'left',
  fontWeight: '600',
  color: '#475569',
  cursor: 'pointer',
  userSelect: 'none'
};

const tdStyle = {
  padding: '1rem',
  color: '#334155'
};

export default TransactionTable;
