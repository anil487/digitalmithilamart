import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './layout/Layout';
import App from '../App';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import Login from '../Pages/Log_in';
import Register from './Register';
import Cart from '../Pages/Cart';
import Products from '../Pages/Products';
import { Navbar } from 'react-bootstrap';
import AboutUs from '../Pages/AboutUs';


 export const MyRoutes = () => {
  return (
    <BrowserRouter>
    <Navbar ></Navbar>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


