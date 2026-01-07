import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import CarDetail from './CarDetail';
import CartItem from './CartItem';
// CORECTAT: Importăm AboutUs direct din src (fără /components) conform pozei tale
import AboutUs from './AboutUs.jsx'; 
import Footer from './components/Footer.jsx'; 
import LegalPage from './LegalPage.jsx'; 

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cars" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/cars/:id" element={<CarDetail />} />
          
          {/* Ruta pentru About Us */}
          <Route path="/about" element={<AboutUs />} />
          
          <Route path="/termeni" element={<LegalPage title="Termeni și Condiții" />} />
          <Route path="/confidentialitate" element={<LegalPage title="Politica de Confidențialitate" />} />
          <Route path="/faq" element={<LegalPage title="Întrebări Frecvente" />} />
          <Route path="/contact" element={<LegalPage title="Contact" />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;