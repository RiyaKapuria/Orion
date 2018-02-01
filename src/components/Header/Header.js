import React from 'react';
import NavBar from './NavBar';

function Header() {
  return (
    <header className="main-header">
      <a href="/" className="logo">
        <span className="logo-mini">
          <b>O</b>A</span>
        <span className="logo-lg">
          <b>Orion</b> Application</span>
      </a>
      <NavBar />
    </header>
  )
}

export default Header;
