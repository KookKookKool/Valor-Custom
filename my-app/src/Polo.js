import React from "react";
import Products from "./Components/Products-Polo";
import './Main.css';

export default function Main() {
  return (
    <div className="container">
      <img id="Logo" src={require('./logo.png')} alt="img" />
      <Products />
    </div>
  );
}
