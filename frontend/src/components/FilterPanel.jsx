import React from 'react';
import './FilterPanel.css';

const FilterPanel = ({ filters, onChange }) => {
  const handleChange = (key, value) => {
    onChange({ ...filters, [key]: value });
  };

  return (
    <aside className="filter-panel">
      <div className="filter-group">
        <h3>Date Range</h3>
        <div className="range-inputs">
          <input 
            type="date" 
            onChange={(e) => handleChange('date_after', e.target.value)} 
          />
          <input 
            type="date" 
            onChange={(e) => handleChange('date_before', e.target.value)} 
          />
        </div>
      </div>

      <div className="filter-group">
        <h3>Price Range</h3>
         <div className="range-inputs">
          <input 
            type="number" 
            placeholder="Min" 
            onChange={(e) => handleChange('min_price', e.target.value)}
          />
          <input 
            type="number" 
            placeholder="Max" 
            onChange={(e) => handleChange('max_price', e.target.value)}
          />
        </div>
      </div>

      <div className="filter-group">
        <h3>Region</h3>
        <select onChange={(e) => handleChange('customer_region', e.target.value)}>
          <option value="">All Regions</option>
          <option value="North">North</option>
          <option value="South">South</option>
          <option value="East">East</option>
          <option value="West">West</option>
        </select>
      </div>

      <div className="filter-group">
        <h3>Category</h3>
        <select onChange={(e) => handleChange('product_category', e.target.value)}>
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Home & Garden">Home & Garden</option>
        </select>
      </div>
      
       <div className="filter-group">
        <h3>Payment Method</h3>
        <select onChange={(e) => handleChange('payment_method', e.target.value)}>
          <option value="">All Methods</option>
          <option value="Credit Card">Credit Card</option>
          <option value="PayPal">PayPal</option>
          <option value="Debit Card">Debit Card</option>
        </select>
      </div>
    </aside>
  );
};

export default FilterPanel;
