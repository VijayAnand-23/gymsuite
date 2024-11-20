// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/members">Members</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        <li><Link to="/payments">Payments</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
