import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import CategoryPage from './Pages/CategoryPage';
import Home from './Pages/Home';
import mensOuterwearData from './data/mensOuterWeardata.json';
import mensTshirtdata from './data/mensTshirtdata.json';
import ladiesOuterwearData from './data/ladiesOuterWeardata.json';
import ladiesTshirtData from './data/ladiesTshirtdata.json';
import CartPage from './Pages/CartPage';
import { CartProvider } from './services/cartContext';

function App() {
  return (
    <Router>
      <CartProvider>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens-outerwear" element={<CategoryPage productData={mensOuterwearData} />} />
          <Route path="/ladies-outerwear" element={<CategoryPage productData={ladiesOuterwearData} />} />
          <Route path="/mens-t-shirts" element={<CategoryPage productData={mensTshirtdata} />} />
          <Route path="/ladies-t-shirts" element={<CategoryPage productData={ladiesTshirtData} />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
