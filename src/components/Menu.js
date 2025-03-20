import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './Menu.css';
import heroImage from '../assets/images/hero.jpg';

const MenuPage = () => {
  const [drinks, setDrinks] = useState([]);
  const [kebabs, setKebabs] = useState([]);
  const [packages, setPackages] = useState([]);
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.53.179:9999/api/Drink')
      .then(response => setDrinks(response.data))
      .catch(error => console.error('Error fetching drinks:', error));

    axios.get('http://192.168.53.179:9999/api/Kebab')
      .then(response => setKebabs(response.data))
      .catch(error => console.error('Error fetching kebabs:', error));

    axios.get('http://192.168.53.179:9999/api/PaketMakanan')
      .then(response => setPackages(response.data))
      .catch(error => console.error('Error fetching packages:', error));

    axios.get('http://192.168.53.179:9999/api/Snack')
      .then(response => setSnacks(response.data))
      .catch(error => console.error('Error fetching snacks:', error));
  }, []);

  const formatHarga = (harga) => `Rp ${harga.toLocaleString('id-ID')}`;

  const renderMenu = (title, items, nameKey, priceKey) => (
    <>
      <h2 className="menu-section-title">{title}</h2>
      <Row>
        {items.map((item, index) => (
          <Col key={index} lg={4} md={6} sm={12} className="mb-4">
            <div className="menu-card">
              <h4>{item[nameKey]}</h4>
              <p className="menu-price">{formatHarga(item[priceKey])}</p>
              <Button className="order-btn">Pesan Sekarang</Button>
            </div>
          </Col>
        ))}
      </Row>
      <hr className="menu-divider" />
    </>
  );

  return (
    <>
      <Container className="menu-container">
        {/* Bagian Hero di dalam Kontainer */}
        <div className="menu-hero">
          <img src={heroImage} alt="Menu Kami" className="hero-image" />
          <div className="hero-content">
            <h1>Menu Kami</h1>
            <p>Cari, Pilih dan Pesan Menu Yang Telah Kami Sediakan</p>
            <Button className="lihat-menu-btn">Lihat Menu</Button>
          </div>
        </div>

        {renderMenu("Minuman", drinks, 'nama_Minuman', 'harga', 'gambar_Minuman')}
        {renderMenu("Kebab", kebabs, 'nama_Kebab', 'harga', 'gambar_Kebab')}
        {renderMenu("Paket Makanan", packages, 'nama_Paket', 'harga_Paket', 'gambar_Paket')}
        {renderMenu("Snack", snacks, 'nama_Snack', 'harga', 'gambar_Snack')}
      </Container>
    </>
  );
};

export default MenuPage;