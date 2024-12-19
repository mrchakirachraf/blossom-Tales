import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/page1">Page 1</Link></li>
        
    </ul>
  </nav>
);

export default NavBar;
