// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import { headerStyles } from './styles'; 
import DrawerMenu from '../DrawerMenu';
import Logo from '../../assets/images/icon.png';

const Header = () => {
  return (
    <header style={headerStyles.header}>
      <div style={headerStyles.headerContainer}>
        <DrawerMenu />
        <Link to="/" >
          <img src={Logo} alt="Logo" style={headerStyles.logoImage} />
        </Link>
        <nav>
          <ul style={headerStyles.navLinks}>
            <li style={headerStyles.navLinkItem}>
              <Link
                to="/"
                style={headerStyles.navLink}
                onMouseEnter={(e) => (e.target.style.color = headerStyles.navLinkHover.color)}
                onMouseLeave={(e) => (e.target.style.color = headerStyles.navLink.color)}
              >
                Home
              </Link>
            </li>
            <li style={headerStyles.navLinkItem}>
              <Link
                to="/about"
                style={headerStyles.navLink}
                onMouseEnter={(e) => (e.target.style.color = headerStyles.navLinkHover.color)}
                onMouseLeave={(e) => (e.target.style.color = headerStyles.navLink.color)}
              >
                About
              </Link>
            </li>
            <li style={headerStyles.navLinkItem}>
              <Link
                to="/contact"
                style={headerStyles.navLink}
                onMouseEnter={(e) => (e.target.style.color = headerStyles.navLinkHover.color)}
                onMouseLeave={(e) => (e.target.style.color = headerStyles.navLink.color)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
