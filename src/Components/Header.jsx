import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Header() {
  return (
    <header>
      <h1>Food Delivery App</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/restaurant-list">Restaurant List</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
