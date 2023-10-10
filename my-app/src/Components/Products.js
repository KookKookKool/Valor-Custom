//Products.js

import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "../Components/Products.css";
import Card1 from "../T-shirt/Index";
import Card2 from "../Combatshirt/Index"
import Card3 from "../Cup/Index"

import White from "../T-shirt/White";
import Combatshirt from "../Combatshirt/Combatshirt";
import Cup from "../Cup/Cup";

export default function Products() {
  return (

    <Router>

      <div className="Frame1">
      <h3 className="CenteredHeader">CUSTOM DESIGN</h3>
          <ul className="Productsitem">
          <div>
            <Link to="/T-shirt/White">
            <Card1/>
            </Link>
            </div>

            <div>
            <Link to="/Combatshirt/Combatshirt">
            <Card2/>
            </Link>
            </div>

            <div>
            <Link to="/Cup/Cup">
            <Card3/>
            </Link>
            </div>

          </ul>
          <Routes>
          <Route path="/T-shirt/White" element={<White />} />
          <Route path="/Combatshirt/Combatshirt" element={<Combatshirt />} />
          <Route path="Cup/Cup" element={<Cup />} />
        </Routes>
      </div>

      </Router>
  );
}