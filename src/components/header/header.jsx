import React, { useState } from 'react';
import '../header/header.css';
import logo from '../../assets/svgs/logo.svg';

function Logo() {
  return (
    <img src={logo} alt="logo" />
  );
}

function NavItem({ href, label }) {
  return (
    <li>
      <a href={href}>{label}</a>
    </li>
  );
}

function LanguageIndicator({ language }) {
  return (
    <li className="nav-language">{language}</li>
  );
}

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
        <a href="#">
          <Logo />
        </a>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} />
        </div>
        <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
          <NavItem href="#" label="Home" />
          <NavItem href="#" label="Services" />
          <NavItem href="#" label="StartUp" />
          <NavItem href="#" label="Career" />
          <NavItem href="#" label="Company" />
          <NavItem href="#" label="Blog" />
          <LanguageIndicator language="cg" />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
