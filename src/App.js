import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavigationBar from './components/Navbar';
import Menu from './components/Menu';
import Promo from './components/Promo';
import AboutUs from './components/AboutUs';
import OrderButton from './components/OrderButton';
import Login from './components/Login'; // Tambahkan import Login
import Register from './components/Register'; // Tambahkan import Register

function App() {
    return (
        <Router>
            <NavigationBar />
            <Container className="mt-4">
                <Routes>
                    <Route path="/" element={<Menu />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/promo" element={<Promo />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Container>
            <OrderButton />
        </Router>
    );
}

export default App;
