//Products.js

import React from "react";
import "../Components/Products.css";
import Card1 from "../Components/T-shirt/Index";
import Card2 from "../Components/Combatshirt/Index"
import Card3 from "../Components/Cup/Index"


export default function Products() {
  return (
    <div>
      
      <div className="Frame1">
      <h3 className="CenteredHeader">CUSTOM DESIGN</h3>
          <div className="Productsitem">
          <div>
            <Card1/>
            </div>

            <div>
            <Card2/>
            </div>
            <div >
            <Card3/>
            </div>
          </div>

      </div>
    </div>
  );
}