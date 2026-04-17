import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Fiction from './pages/Fiction';
import NonFiction from './pages/NonFiction';
import KidsBooks from './pages/KidsBooks';
import Academic from './pages/Academic';
import Cart from './pages/Cart';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiction" element={<Fiction />} />
        <Route path="/nonfiction" element={<NonFiction />} />
        <Route path="/kidsbooks" element={<KidsBooks />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;