import { Link } from "react-router-dom";
//import { useState, useEffect } from 'react';
import './styles/NavBar.css'

function NavBar(){

  return(
  <div className="NavBar">
    <div className="logo">Bozelli's Shop</div>
    <div className="nav-links">
      <Link to="home" className="nav-link">Home</Link>
      <Link to="shop" className="nav-link">Shop</Link>
    </div>
  </div>
  )
}

export default NavBar;