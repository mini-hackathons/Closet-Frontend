import React from 'react';
import { NavLink } from 'react-router-dom';

import axios from 'axios';

const Header = (props) => (

    <header>  
      <NavLink to="/">Search</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <button onClick={async() => {
          const res = await axios.get('http://localhost:3000/logout')
          console.log(res);
      }}>Logout</button>
    </header>
)

export default Header;