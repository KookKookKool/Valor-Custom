import React from "react";
import Products from "./Components/Products-shirt";
import './Main.css';

export default function Shirt() {
  return (
    <div className="containerCSS">
      <img id="Logo" src={require('./logo.png')} alt="img" />
      <Products />
    </div>
  );
}
