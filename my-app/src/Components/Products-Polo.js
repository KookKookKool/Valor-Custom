import React, { useState } from "react";
import { Link } from "react-router-dom"; // ลบ BrowserRouter ออก
import { useNavigate } from "react-router-dom";
import "../Components/Products.css";
import Card1 from "../Downrange-Polo-Shirt/Card";
import Card2 from "../Proper-Polo/CardMenu";
import Card3 from "../Performance-Polo-Shirt/CardMenu";


import Back from "../Asset/icon/Back.png";

// Main component
export default function Products() {
  const [isProductsitemOpen, setIsProductsitemOpen] = useState(true);

  const navigate = useNavigate();

  const handleGoBack = () => {
      navigate("/Shirt");
  };

  return (
    <>
    <div className="Frame1">
      <h3 className="CenteredHeader">Polo Shirt Products</h3>
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
            to="/Shirt/DownFrontBlack"
            onClick={() => setIsProductsitemOpen(false)}
          >
            <Card1 />
          </Link>
        </div>

        <div className="Link">
          <Link
            to="/Shirt/Proper"
            onClick={() => setIsProductsitemOpen(false)}
          >
            <Card2 />
          </Link>
        </div>

        <div className="Link">
          <Link
            to="/Shirt/Performance"
            onClick={() => setIsProductsitemOpen(false)}
          >
            <Card3 />
          </Link>
        </div>

      </ul>
     
      
      <button onClick={handleGoBack} style={{ display: "none" }}>
        ย้อนกลับ
      </button>
      </div>
    </>
  );
}
