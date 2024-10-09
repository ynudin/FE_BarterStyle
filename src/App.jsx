import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import ProductShow from './components/ProductShow';
// import CartList from './components/CartList';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/products" element={<ProductShow />} />
        <Route path="/cart" element={<CartList />} />  */}
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;