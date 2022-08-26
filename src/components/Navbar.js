import React from 'react';
import { NavLink } from 'react-router-dom';
import userProfile from '../assets/userprofile.png';

const Navbar = () => (
  <div className="navContainer">
    <div className="navbar">
      <h1 className="mainhg">Bookstore CMS</h1>
      <NavLink className="navbook" to="/">
        BOOKS
      </NavLink>
      <NavLink className="navcate" to="/Category">
        CATEGORIES
      </NavLink>
    </div>
    <div className="outerNav">
      <img className="imgNav" src={userProfile} alt="user" />
    </div>
  </div>
);

export default Navbar;
