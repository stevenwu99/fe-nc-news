import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
      <nav>
       <ul >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/articles">Articles</Link></li>
          <li><Link to="articles/article_id" onClick={(props) => {props.setArticleById("")}}>Individual Article</Link></li>
         	</ul>
          <hr />
      </nav>
  );
};

export default NavBar;