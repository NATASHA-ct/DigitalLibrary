import React from "react";
import {NavLink} from 'react-router-dom';

const Navbar = () => (
  <div>
    <NavLink className="navbook" to="/">Books</NavLink>
    <NavLink className="navcate" to="/Category">Category</NavLink>
  </div>
);

export default Navbar;