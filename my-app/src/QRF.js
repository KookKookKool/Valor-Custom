import React from "react";
import Products from "./Components/Products-Qrf";
import './Main.css';

export default function Main() {
  return (
    <div className="containerCSS">
      <img id="Logo" src={require('./logo.png')} alt="img" />
      <Products />
    </div>
  );
}
