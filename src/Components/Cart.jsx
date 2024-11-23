// src/components/Cart.js
import React from 'react';
import './App.css';

function Cart({ cart, total, onRemoveItem }) {
  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => onRemoveItem(item)}>Remove</button>
            </div>
          ))}
          <h3>Total Amount: ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
