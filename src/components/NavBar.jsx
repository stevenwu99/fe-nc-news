import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <ul >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/articles">Articles</Link></li>
     	</ul>
      <hr />
    </div>
  );
};

export default NavBar;