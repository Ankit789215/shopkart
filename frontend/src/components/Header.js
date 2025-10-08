import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

const Header = ({ onSearch, onCartClick, onWishlistClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { user, logout } = useAuth();
  const { cart, wishlist } = useCart();
  const { isDarkMode, toggleTheme } = useTheme();

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1><i className="fas fa-shopping-bag"></i> ShopKart</h1>
        </div>
        
        <div className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search for products, brands and more..."
          />
          <button onClick={handleSearch}>
            <i className="fas fa-search"></i>
          </button>
        </div>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle Dark Mode">
            <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>

          {user && (
            <div className="user-info">
              <i className="fas fa-user-circle"></i>
              <span>{user.name}</span>
            </div>
          )}

          <div className="wishlist-icon" onClick={onWishlistClick}>
            <i className="fas fa-heart"></i>
            {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
          </div>

          <div className="cart-icon" onClick={onCartClick}>
            <i className="fas fa-shopping-cart"></i>
            {cart.length > 0 && (
              <span className="badge">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </div>

          {user && (
            <button className="logout-btn" onClick={logout}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
