import React, { useState } from 'react';
import styles from '../header/header.module.sass';
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
    <li className={styles['nav-language']}>{language}</li>
  );
}

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles['main-nav']} ${isMenuOpen ? styles.open : ''}`}>
        <a href="#">
          <Logo />
        </a>
        <div className={styles['menu-toggle']} onClick={toggleMenu}>
          <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} />
        </div>
        <ul className={`${styles['nav-list']} ${isMenuOpen ? styles.open : ''}`}>
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
