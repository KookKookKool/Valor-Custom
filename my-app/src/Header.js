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
        <a href="/Service">OUR SERVICE</a>
      </li>
      <li>
        <a href="/Product">OUR PRODUCTS</a>
      </li>
      <li>
        <a href="/AboutUs">ABOUT US</a>
      </li>
      <li>
        <a href="/Dealer">DEALER</a>
      </li>
      <li>
        <a href="/Contact">CONTACT</a>
      </li>
    
    <li>
    <a href="/login">
    <div>
    <img src="/Picture/user.png" style={{width:"30px",height:"30px"}}/>
  </div>
  </a>
  </li>
  </ul>
  </nav>

</header>

    </div>
  )
}

export default Header