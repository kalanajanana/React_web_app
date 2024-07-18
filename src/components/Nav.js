import React from "react";
import '../App.css';
import logo from "../images/Logo.svg";;

export default function Nav() {
    return(
        <nav className={`navbar`}>
            <a>
            <img src={logo} alt="Little Lemon logo" />
            </a>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Menu</a>
                </li>
                <li>
                    <a href="/">Resevation</a>
                </li>
                <li>
                    <a href="/">Order Online</a>
                </li>
                <li>
                    <a href="/">Login</a>
                </li>

            </ul>
        </nav>
    );
};