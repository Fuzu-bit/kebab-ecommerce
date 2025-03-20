import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
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
    <div className="menu-category">
      <h2>{title}</h2>
      <Row>
        {items.map((item, index) => (
          <Col key={index} lg={3} md={6} sm={12} className="mb-4">
            <div className="menu-item">
              <img src={item.gambar_Minuman || item.gambar_Kebab || item.gambar_Paket || item.gambar_Snack} alt={item[nameKey]} className="menu-image" />
              <h3>{item[nameKey]}</h3>
              <p className="menu-description">Description of {item[nameKey]}</p>
              <p className="menu-price">{formatHarga(item[priceKey])}</p>
              <Button variant="primary" className="order-now-btn">Pesan Sekarang</Button> {/* Tambahkan tombol */}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );

  return (
    <>
      <div className="menu-hero">
        <img src={heroImage} alt="Menu Kami" className="hero-image" />
        <div className="hero-content">
          <h1>Menu Kami</h1>
          <p>Cari, Pilih dan Pesan Menu Yang Telah Kami Sediakan</p>
          <button className="lihat-menu-btn">Lihat Menu</button>
        </div>
      </div>

      <div className="menu-content-area">
        {renderMenu("Makanan", kebabs, 'nama_Kebab', 'harga')}
        {renderMenu("Minuman", drinks, 'nama_Minuman', 'harga')}
        {renderMenu("Paket Makanan", packages, 'nama_Paket', 'harga_Paket')}
        {renderMenu("Snack", snacks, 'nama_Snack', 'harga')}
      </div>
    </>
  );
};

export default MenuPage;