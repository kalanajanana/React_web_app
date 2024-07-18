import React from 'react';
import '../App.css';
import img from '../images/restauranfood.jpg'
 // Adjust the path to your logo file

function Header() {
  return (
    <header>
        <div id='content'>
            <h1>{'Little Lemon'}</h1>
            <h3>{'Chicago'}</h3>
            <p>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</p>
            <button id='reserve'>{'Reserve a Table'}</button>
        </div>
        <div id='image'>
        <a><img src={img} alt='Chef' id="chef"></img></a>
        </div>
    </header>
  );
}

export default Header;