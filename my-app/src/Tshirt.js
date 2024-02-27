import React from "react";
import Products from "./Components/Products-Tshirt";
import './Main.css';

export default function Shirt() {
  return (
    <div className="container">
      <img id="Logo" src={require('./logo.png')} alt="img" />
      <Products />
    </div>
  );
}
