import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/Logo.svg";
import '../Style/Navbar.css';
import burger from '../images/burger-menu-left-svgrepo-com.svg';

function Nav() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => {
        if (window.innerWidth <= 768) {
            setIsOpen(false);
        }
    };

    return (
        <nav className="nav-bar">
            <img src={logo} alt="Little Lemon logo" className="logo" />
            <button className="hamburger" onClick={toggleMenu}>
                <img src={burger} alt="Menu" />
            </button>
            <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
                <li>
                    <Link to='/' className={`nav-items ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>Home</Link>
                </li>
                <li>
                    <Link to='/about' className={`nav-items ${location.pathname === '/about' ? 'active' : ''}`} onClick={closeMenu}>About</Link>
                </li>
                <li>
                    <Link to='/menu' className={`nav-items ${location.pathname === '/menu' ? 'active' : ''}`} onClick={closeMenu}>Menu</Link>
                </li>
                <li>
                    <Link to='/reservation' className={`nav-items ${location.pathname === '/reservation' ? 'active' : ''}`} onClick={closeMenu}>Reservation</Link>
                </li>
                <li>
                    <Link to='/order' className={`nav-items ${location.pathname === '/order' ? 'active' : ''}`} onClick={closeMenu}>Order Online</Link>
                </li>
                <li>
                    <Link to='/login' className={`nav-items ${location.pathname === '/login' ? 'active' : ''}`} onClick={closeMenu}>Login</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
