import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div className="product-card">
      {showNotification && (
        <div className="add-notification">Added to cart!</div>
      )}
      
      <div className="product-image">
        <span style={{ fontSize: '80px' }}>{product.image}</span>
        {product.discount > 0 && (
          <div className="discount-badge">{product.discount}% OFF</div>
        )}
        <button
          className={`wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
          onClick={handleWishlistToggle}
        >
          <i className={`fas fa-heart ${isInWishlist(product.id) ? 'filled' : ''}`}></i>
        </button>
      </div>

      <div className="product-info">
        <div className="product-name">{product.name}</div>
        
        <div className="product-rating">
          <span>{product.rating}</span>
          <i className="fas fa-star"></i>
        </div>

        <div className="product-price">
          <span className="current-price">₹{product.price.toLocaleString('en-IN')}</span>
          {product.originalPrice && (
            <span className="original-price">₹{product.originalPrice.toLocaleString('en-IN')}</span>
          )}
          {product.discount > 0 && (
            <span className="discount-percent">{product.discount}% off</span>
          )}
        </div>

        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          <i className="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
