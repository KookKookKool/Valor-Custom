import React from 'react'
import './Home.css'
import CTicon from "./Asset/icon/ValorCustom.png";

function Header() {
  return (
    <div>
      <header className="header">
  <nav>
    <div className="logo">
      <a href="/">
      <img src={CTicon} alt="icon" className="image-overlay" />
      </a>
    </div>
    <input type="checkbox" id="menu-toggle" />
    <label htmlFor="menu-toggle" className="menu-icon">
      ☰
    </label>
    <ul className="menu">
      <li>
        <a href="#">OUR SERVICE</a>
      </li>
      <li>
        <a href="/Product">OUR PRODUCTS</a>
      </li>
      <li>
        <a href="#">ABOUT US</a>
      </li>
      <li>
        <a href="#">DEALER</a>
      </li>
      <li>
        <a href="/Contact">CONTACT</a>
      </li>
    </ul>
  </nav>
</header>

    </div>
  )
}

export default Header