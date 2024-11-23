// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
// import Login from './Components/Login';
// import Register from './Components/Register';
import RestaurantList from './Components/RestaurantList';
import Menu from './Components/Menu';
// import Cart from './Components/Cart';
import Checkout from './Components/Checkout';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<RestaurantList />} />
        <Route path="/menu/:restaurantId" element={<Menu />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
