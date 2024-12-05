// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import RestaurantList from './Components/RestaurantList';
import Menu from './Components/Menu';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Register from './Components/Register';
import Login from './Components/Login';

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addItemToCart = (item) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((cartItem) => cartItem.id === item.id);
      if (itemExists) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeItemFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== item.id));
  };

  // Function to clear the cart
  const onClearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  }, [cart]);

  return (
    <Router>
      <nav>
        {!isLoggedIn && (
          <>
            <Link to="/register">Register</Link> | <Link to="/login">Login</Link> |{' '}
          </>
        )}
        <Link to="/">Home</Link> | <Link to="/restaurantList">Restaurant List</Link> |{' '}
        <Link to="/cart">Cart</Link> | <Link to="/checkout">Checkout</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Welcome to Swiggy</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/restaurantList" element={<RestaurantList />} />
        <Route path="/menu/:restaurantId" element={<Menu addItemToCart={addItemToCart} />} />
        <Route
          path="/cart"
          element={
            cart.length > 0 ? (
              <Cart cart={cart} total={total} onRemoveItem={removeItemFromCart} />
            ) : (
              <h2>Your cart is empty!</h2>
            )
          }
        />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} total={total} onClearCart={onClearCart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
