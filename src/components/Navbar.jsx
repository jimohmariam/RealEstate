
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">My Blog</Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/admin/dashboard">Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
