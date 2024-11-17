import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/catalog">Products</Link></li> 
        <li><a href="#contact">Contact</a></li> 
      </ul>
    </nav>
  );
};

export default Navigation;
