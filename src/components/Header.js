import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (

    <header>  
      <NavLink to="/">Search</NavLink>
      <NavLink to="/login">Login</NavLink>
    </header>
)

export default Header;