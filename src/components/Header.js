import React from 'react';
import logo from "../images/Logo.svg";; // Adjust the path to your logo file

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon logo" />
    </header>
  );
}

export default Header;