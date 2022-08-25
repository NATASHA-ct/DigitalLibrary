import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <h1 className="mainhg">Bookstore CMS</h1>
    <NavLink className="navbook" to="/">
      BOOKS
    </NavLink>
    <NavLink className="navcate" to="/Category">
      CATEGORIES
    </NavLink>
    <div className="Oval">
      <div className="Mask" />
    </div>
  </div>
);

export default Navbar;
