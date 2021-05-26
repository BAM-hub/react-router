import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Nav() {
  return (
    <div className="nav">
      <h3>Nav</h3>
      <div className="links">
          <ul>
            <Link to="/shop">
              <li>Shop</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>  
          </ul>
      </div>
    </div>
  );
}

export default Nav;
