import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Menu from './components/Menu';
import Promo from './components/Promo';
import AboutUs from './components/AboutUs';
import OrderButton from './components/OrderButton';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <OrderButton />
    </Router>
  );
}

export default App;