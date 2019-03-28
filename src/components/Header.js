import React from 'react';
import { NavLink } from 'react-router-dom';
import { history } from '../routers/AppRouter';

import axios from 'axios';

const Header = (props) => (

    <header>  
      <NavLink to="/">Search</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <button onClick={async() => {
          try {
            await axios({
                method: 'POST',
                url: 'http://localhost:3000/logout',
                data: {},
                withCredentials: true
            });

            history.push('/login');
          }catch(err) {
              console.log(err)
          }
      }}>Logout</button>
    </header>
)

export default Header;