import React from 'react';

const CategoryNav = ({ currentCategory, onCategoryChange }) => {
  const categories = [
    { id: 'all', name: 'All Products', icon: 'fa-th' },
    { id: 'electronics', name: 'Electronics', icon: 'fa-laptop' },
    { id: 'fashion', name: 'Fashion', icon: 'fa-tshirt' },
    { id: 'home', name: 'Home & Living', icon: 'fa-home' },
    { id: 'sports', name: 'Sports', icon: 'fa-dumbbell' }
  ];

  return (
    <nav className="category-nav">
      {categories.map(category => (
        <button
          key={category.id}
          className={`category-btn ${currentCategory === category.id ? 'active' : ''}`}
          onClick={() => onCategoryChange(category.id)}
        >
          <i className={`fas ${category.icon}`}></i> {category.name}
        </button>
      ))}
    </nav>
  );
};

export default CategoryNav;
