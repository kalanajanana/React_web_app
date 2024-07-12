import React from "react";
import logo from  "../images/Logo.svg";

export default function Nav() {
    return(
        <nav>
            <a href="/">
            <img src={logo}></img>
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