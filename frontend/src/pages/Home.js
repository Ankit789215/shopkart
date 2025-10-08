import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import CategoryNav from '../components/CategoryNav';
import Filters from '../components/Filters';
import ProductGrid from '../components/ProductGrid';
import CartModal from '../components/CartModal';
import WishlistModal from '../components/WishlistModal';
import { productsData } from '../data/products';
import '../styles/Home.css';

const Home = () => {
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [currentCategory, setCurrentCategory] = useState('all');
  const [currentSort, setCurrentSort] = useState('popularity');
  const [showCartModal, setShowCartModal] = useState(false);
  const [showWishlistModal, setShowWishlistModal] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: null,
    maxPrice: null,
    minRating: null,
    minDiscount: null,
    searchQuery: ''
  });

  useEffect(() => {
    applyFilters();
  }, [currentCategory, currentSort, filters]);

  const applyFilters = () => {
    let filtered = products.filter(p => {
      if (currentCategory !== 'all' && p.category !== currentCategory) return false;
      if (filters.minPrice && p.price < filters.minPrice) return false;
      if (filters.maxPrice && p.price > filters.maxPrice) return false;
      if (filters.minRating && p.rating < filters.minRating) return false;
      if (filters.minDiscount && p.discount < filters.minDiscount) return false;
      if (filters.searchQuery && !p.name.toLowerCase().includes(filters.searchQuery.toLowerCase())) return false;
      return true;
    });

    filtered = sortProducts(filtered);
    setFilteredProducts(filtered);
  };

  const sortProducts = (products) => {
    const sorted = [...products];
    switch (currentSort) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'popularity':
      default:
        return sorted.sort((a, b) => b.discount - a.discount);
    }
  };

  return (
    <div className="home">
      <Header 
        onSearch={(query) => setFilters(prev => ({ ...prev, searchQuery: query }))}
        onCartClick={() => setShowCartModal(true)}
        onWishlistClick={() => setShowWishlistModal(true)}
      />
      
      <CategoryNav 
        currentCategory={currentCategory}
        onCategoryChange={setCurrentCategory}
      />

      <div className="container">
        <Filters 
          filters={filters}
          onFilterChange={setFilters}
        />
        
        <ProductGrid 
          products={filteredProducts}
          currentSort={currentSort}
          onSortChange={setCurrentSort}
        />
      </div>

      {showCartModal && <CartModal onClose={() => setShowCartModal(false)} />}
      {showWishlistModal && <WishlistModal onClose={() => setShowWishlistModal(false)} />}
    </div>
  );
};

export default Home;
