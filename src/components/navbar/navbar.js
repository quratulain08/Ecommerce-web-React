import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css';
import logo from '../../assets/logo.png';
import cart_icon from '../../assets/shoppingcart.png';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <a href='/' style={{textDecoration: 'none', color: 'inherit'}}>
          <p>Divine Glow</p>
        </a>
      </div>
      <div className="nav-cart">
        <Link to="/cart" style={{ textDecoration: 'none' }}>
          <img src={cart_icon} alt="cart" />
        </Link>
      </div>
    </div>
  );
};
