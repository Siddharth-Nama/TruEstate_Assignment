import React from 'react';
import { LayoutDashboard } from 'lucide-react';

const Header = () => {
  return (
    <header style={{ 
      padding: '1.5rem', 
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      backgroundColor: 'white'
    }}>
      <LayoutDashboard size={24} color="var(--accent)" />
      <h1 style={{ fontSize: '1.25rem', fontWeight: '600' }}>TruEstate Retail Manager</h1>
    </header>
  );
};

export default Header;
