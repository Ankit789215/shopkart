import React from 'react';
import { useCart } from '../context/CartContext';

const CartModal = ({ onClose }) => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const handleBackdropClick = (e) => {
    if (e.target.className === 'modal') {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2><i className="fas fa-shopping-cart"></i> Shopping Cart</h2>
          <span className="close" onClick={onClose}>&times;</span>
        </div>

        <div className="modal-body">
          {cart.length === 0 ? (
            <p className="empty-message">
              <i className="fas fa-shopping-basket"></i>
              <br/>Your cart is empty
            </p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-image">{item.image}</div>
                <div className="item-details">
                  <div className="item-name">{item.name}</div>
                  <div className="item-price">₹{item.price.toLocaleString('en-IN')}</div>
                  <div className="item-actions">
                    <div className="qty-controls">
                      <button
                        className="qty-btn"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <i className="fas fa-trash"></i> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="modal-footer">
            <div className="cart-total">
              <span>Total Amount:</span>
              <span className="price">₹{getCartTotal().toLocaleString('en-IN')}</span>
            </div>
            <button className="checkout-btn">
              <i className="fas fa-credit-card"></i> Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
