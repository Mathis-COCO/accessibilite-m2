import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        
      </div>
      <nav className="nav-links">
        <NavLink exact to="/" activeClassName="active" className="nav-button">
          Accueil
        </NavLink>
        <NavLink to="/biographie" activeClassName="active" className="nav-button">
          Biographie
        </NavLink>
        <NavLink to="/recherches" activeClassName="active" className="nav-button">
          Ses Recherches
        </NavLink>
        <NavLink to="/maladie" activeClassName="active" className="nav-button">
          Sa Maladie
        </NavLink>
        <NavLink to="/quiz" activeClassName="active" className="nav-button">
          Quiz
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
