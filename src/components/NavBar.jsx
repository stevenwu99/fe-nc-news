import React from 'react';
import { Link } from 'react-router-dom';
import { Login } from './Login';

const NavBar = (props) => {
  return (
      <nav>
       <ul >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/articles">Articles</Link></li>
      </ul>
      <aside>
          <Login />
      </aside>
      <hr/>
      </nav>
      
  );
};

export default NavBar;