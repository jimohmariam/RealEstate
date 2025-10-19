
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar" style={{backgroundColor:'#949baeff', paddingBlock:'10px'}}>
      <Link to="/" className="logo" style={{color:"black"}}>Tees Homes</Link>
      <div>
        <Link to="/">Home</Link>
          <Link to="/propertise">Propertise</Link>
        <Link to="/admin/dashboard">Admin</Link>
         <Link to="/contact">Contact</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
