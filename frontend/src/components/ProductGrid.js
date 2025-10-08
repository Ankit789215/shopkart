import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, currentSort, onSortChange }) => {
  const sortOptions = [
    { id: 'popularity', name: 'Popularity', icon: 'fa-fire' },
    { id: 'price-low', name: 'Price: Low to High', icon: 'fa-arrow-up' },
    { id: 'price-high', name: 'Price: High to Low', icon: 'fa-arrow-down' },
    { id: 'rating', name: 'Rating', icon: 'fa-star' }
  ];

  return (
    <main className="main-content">
      <div className="sort-bar">
        <span><i className="fas fa-sort"></i> Sort By:</span>
        {sortOptions.map(option => (
          <button
            key={option.id}
            className={`sort-btn ${currentSort === option.id ? 'active' : ''}`}
            onClick={() => onSortChange(option.id)}
          >
            <i className={`fas ${option.icon}`}></i> {option.name}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="no-products">
            <i className="fas fa-box-open"></i>
            <p>No products found</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProductGrid;
