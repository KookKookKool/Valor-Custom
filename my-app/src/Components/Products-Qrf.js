import React, { useState } from "react";
import { Link } from "react-router-dom"; // ลบ BrowserRouter ออก
import { useNavigate } from "react-router-dom";
import "../Components/Products.css";
import Card1 from "../QRF/QRF1Card";
import Card2 from "../QRF/QRF2Card";
import Card3 from "../QRF/QRF3Card";
import Card4 from "../QRF/QRF4Card";

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
      <h3 className="CenteredHeader">QRF Products</h3>
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
            to="/Shirt/QRF1"
            onClick={() => setIsProductsitemOpen(false)}
          >
            <Card1 />
          </Link>
        </div>

        <div className="Link">
          <Link
            to="/Shirt/QRF2"
            onClick={() => setIsProductsitemOpen(false)}
          >
            <Card2 />
          </Link>
        </div>

        <div className="Link">
          <Link
            to="/Shirt/QRF3"
            onClick={() => setIsProductsitemOpen(false)}
          >
            <Card3 />
          </Link>
        </div>

        <div className="Link">
          <Link
            to="/Shirt/QRF4"
            onClick={() => setIsProductsitemOpen(false)}
          >
            <Card4 />
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
