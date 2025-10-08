import React from 'react';
import { useCart } from '../context/CartContext';

const WishlistModal = ({ onClose }) => {
  const { wishlist, toggleWishlist, addToCart } = useCart();

  const handleBackdropClick = (e) => {
    if (e.target.className === 'modal') {
      onClose();
    }
  };

  const handleMoveToCart = (item) => {
    addToCart(item);
    toggleWishlist(item);
  };

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2><i className="fas fa-heart"></i> My Wishlist</h2>
          <span className="close" onClick={onClose}>&times;</span>
        </div>

        <div className="modal-body">
          {wishlist.length === 0 ? (
            <p className="empty-message">
              <i className="fas fa-heart-broken"></i>
              <br/>Your wishlist is empty
            </p>
          ) : (
            wishlist.map(item => (
              <div key={item.id} className="wishlist-item">
                <div className="item-image">{item.image}</div>
                <div className="item-details">
                  <div className="item-name">{item.name}</div>
                  <div className="item-price">₹{item.price.toLocaleString('en-IN')}</div>
                  <div className="item-actions">
                    <button
                      className="move-to-cart-btn"
                      onClick={() => handleMoveToCart(item)}
                    >
                      <i className="fas fa-shopping-cart"></i> Move to Cart
                    </button>
                    <button
                      className="remove-btn"
                      onClick={() => toggleWishlist(item)}
                    >
                      <i className="fas fa-trash"></i> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistModal;
