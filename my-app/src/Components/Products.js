import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "../Components/Products.css";
import Card1 from "../T-shirt/Index";
import Card2 from "../Combatshirt/Index";
import Card3 from "../Cup/Index";

import White from "../T-shirt/White-Front";
import WhiteBack from "../T-shirt/White-Back";
import WhiteRight from "../T-shirt/White-Right";
import WhiteLeft from "../T-shirt/White-Left";

import Combatshirt from "../Combatshirt/Combatshirt";
import Cup from "../Cup/Cup";

import Black from "../T-shirt/Black-Front";
import Navy from "../T-shirt/Navy-Front";



export default function Products() {
  const [isProductsitemOpen, setIsProductsitemOpen] = useState(true);

  const handleGoBack = () => {
    setIsProductsitemOpen(true); // เปิด ul อีกครั้งเมื่อกดปุ่ม "ย้อนกลับ"
    window.history.back();
  };

  return (
    <Router>
      <div className="Frame1">
        <h3 className="CenteredHeader">CUSTOM DESIGN</h3>
        <ul className="Productsitem" style={{ display: isProductsitemOpen ? "" : "none" }}>
          <div className="Link">
            <Link to="/T-shirt/White-Front" onClick={() => setIsProductsitemOpen(false)}>
              <Card1 />
            </Link>
          </div>
          <div className="Link">
            <Link to="/Combatshirt/Combatshirt" onClick={() => setIsProductsitemOpen(false)}>
              <Card2 />
            </Link>
          </div>
          <div className="Link">
            <Link to="/Cup/Cup" onClick={() => setIsProductsitemOpen(false)}>
              <Card3 />
            </Link>
          </div>
        </ul>
        <Routes>

          <Route path="/T-shirt/White-Front" element={<White setProductsitemOpen={setIsProductsitemOpen} />} />
          <Route path="/T-shirt/White-Back" element={<WhiteBack setProductsitemOpen={setIsProductsitemOpen} />} />
          <Route path="/T-shirt/White-Right" element={<WhiteRight setProductsitemOpen={setIsProductsitemOpen} />} /> 
          <Route path="/T-shirt/White-Left" element={<WhiteLeft setProductsitemOpen={setIsProductsitemOpen} />} />          

          <Route path="/Combatshirt/Combatshirt" element={<Combatshirt setProductsitemOpen={setIsProductsitemOpen} />} />
          <Route path="/Cup/Cup" element={<Cup setProductsitemOpen={setIsProductsitemOpen} />} />

          <Route path="/T-shirt/Black-Front" element={<Black setProductsitemOpen={setIsProductsitemOpen} />} />
          <Route path="/T-shirt/Navy-Front" element={<Navy setProductsitemOpen={setIsProductsitemOpen} />} />



            
        </Routes>
        <button onClick={handleGoBack} style={{ display: "none" }}>ย้อนกลับ</button>
      </div>
    </Router>
  );
}
