import React, { useState } from "react";
import { Link } from "react-router-dom"; // ลบ BrowserRouter ออก
import { useNavigate } from "react-router-dom";
import "./Products.css";
import Card1 from "../T-shirt/Index";
//import Card2 from "../Combatshirt/Index";
//import Card3 from "../Cup/Index";
import Card4 from "../LaserPatch/Index";

import Back from "../Asset/icon/Back.png";

// Main component
export default function Products() {
  const [isProductsitemOpen, setIsProductsitemOpen] = useState(true);

  const navigate = useNavigate();

  const handleGoBack = () => {
      navigate("/");
  };

  return (
    <>
    
    <div className="Frame1">
      <h3 className="CenteredHeader">เลือก ผลิตภัณฑ์</h3>
      <div className="">
            <button id="" style={{ marginLeft:'5%' }}>
            <img src={Back} alt="Back" onClick={handleGoBack} />
            </button>
          </div>
      <ul
        className="Productsitem"
        style={{ display: isProductsitemOpen ? "" : "none" }}
      >

        <div className="Link">
          <Link
            to="/Shirt"
            onClick={() => setIsProductsitemOpen(false)}
          >
            <Card1 />
          </Link>
        </div>
        <div className="Link">
          <Link
            to="/LaserPatch"
            onClick={() => setIsProductsitemOpen(false)}
          >
            <Card4 />
          </Link>
        </div>
        {/*<div className="Link">
          <Link to="/Cup/Cup" onClick={() => setIsProductsitemOpen(false)}>
            <Card3 />
          </Link>
        </div>*/}
      </ul>
     
      
      <button onClick={handleGoBack} style={{ display: "none" }}>
        ย้อนกลับ
      </button>
      </div>
    </>
  );
}
