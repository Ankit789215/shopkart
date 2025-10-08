import React, { useState } from 'react';

const Filters = ({ filters, onFilterChange }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handlePriceApply = () => {
    onFilterChange(prev => ({
      ...prev,
      minPrice: minPrice ? parseFloat(minPrice) : null,
      maxPrice: maxPrice ? parseFloat(maxPrice) : null
    }));
  };

  const handleRatingChange = (e) => {
    const value = e.target.checked ? parseFloat(e.target.value) : null;
    onFilterChange(prev => ({ ...prev, minRating: value }));
    
    document.querySelectorAll('.rating-filter').forEach(checkbox => {
      if (checkbox !== e.target) checkbox.checked = false;
    });
  };

  const handleDiscountChange = (e) => {
    const value = e.target.checked ? parseFloat(e.target.value) : null;
    onFilterChange(prev => ({ ...prev, minDiscount: value }));
    
    document.querySelectorAll('.discount-filter').forEach(checkbox => {
      if (checkbox !== e.target) checkbox.checked = false;
    });
  };

  return (
    <aside className="filters">
      <h3><i className="fas fa-filter"></i> Filters</h3>
      
      <div className="filter-section">
        <h4>Price Range</h4>
        <div className="price-inputs">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min"
            min="0"
          />
          <span>to</span>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max"
            min="0"
          />
        </div>
        <button onClick={handlePriceApply} className="apply-btn">
          <i className="fas fa-check"></i> Apply
        </button>
      </div>

      <div className="filter-section">
        <h4>Customer Ratings</h4>
        <label className="filter-label">
          <input
            type="checkbox"
            className="rating-filter"
            value="4"
            onChange={handleRatingChange}
          />
          <span>4★ & above</span>
        </label>
        <label className="filter-label">
          <input
            type="checkbox"
            className="rating-filter"
            value="3"
            onChange={handleRatingChange}
          />
          <span>3★ & above</span>
        </label>
      </div>

      <div className="filter-section">
        <h4>Discount</h4>
        <label className="filter-label">
          <input
            type="checkbox"
            className="discount-filter"
            value="50"
            onChange={handleDiscountChange}
          />
          <span>50% or more</span>
        </label>
        <label className="filter-label">
          <input
            type="checkbox"
            className="discount-filter"
            value="30"
            onChange={handleDiscountChange}
          />
          <span>30% or more</span>
        </label>
        <label className="filter-label">
          <input
            type="checkbox"
            className="discount-filter"
            value="10"
            onChange={handleDiscountChange}
          />
          <span>10% or more</span>
        </label>
      </div>
    </aside>
  );
};

export default Filters;
