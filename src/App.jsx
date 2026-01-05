import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CarDetail from './CarDetail';
import CartItem from './CartItem'; // Importăm componenta Coș
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/cars" element={<ProductList />} />
        <Route path="/cars/:id" element={<CarDetail />} />
        {/* RUTA NOUĂ PENTRU COȘ */}
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </div>
  );
}

export default App;