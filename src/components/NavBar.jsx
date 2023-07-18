import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
      <nav>
       <ul >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/articles">Articles</Link></li>
         	</ul>
          <hr />
      </nav>
  );
};

export default NavBar;