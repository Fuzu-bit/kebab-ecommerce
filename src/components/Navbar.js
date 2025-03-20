import React, { useState } from 'react';
import { Navbar, Nav, Container, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';

const NavigationBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar fixed-top py-1.5">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="navbar-logo">Kebab Raja</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="navbar-search">
                            <FormControl
                                type="search"
                                placeholder="Cari kebab favoritmu..."
                                className="search-input"
                                aria-label="Search"
                            />
                            <Button variant="warning" className="btn-search">Cari</Button>
                        </div>

                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
                            <Nav.Link as={Link} to="/promo">Promo</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Us</Nav.Link>

                            {/* Shopping Cart Icon */}
                            <Nav.Link as={Link} to="/cart" className="cart-icon">
                                <FaShoppingCart color="white" size={20} />
                            </Nav.Link>

                            {isLoggedIn ? (
                                <Button
                                    variant="outline-light"
                                    className="btn-logout"
                                    onClick={() => setIsLoggedIn(false)}
                                >
                                    Logout
                                </Button>
                            ) : (
                                <>
                                    <Button
                                        variant="outline-light"
                                        className="me-2 btn-login"
                                        as={Link}
                                        to="/login"
                                    >
                                        Login
                                    </Button>
                                    <Button variant="warning" className="btn-register" as={Link} to="/register">
                                        Register
                                    </Button>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Spacer untuk memberi ruang pada konten setelah navbar */}
            <div className="spacer"></div>
        </>
    );
};

export default NavigationBar;
