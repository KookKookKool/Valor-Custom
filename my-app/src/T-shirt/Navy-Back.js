import React from 'react';

import "./Style.css";
import Navigation from "../Components/Navigation2"; //เลือกสี
import Back from "../Asset/icon/Back.png";
import NavyBackMockup from "../Asset/T-shirt/Navy-Back.png";

import MenuB from "../Components/Navy/MenuNavyBack";

function NavyBack({ setProductsitemOpen }) {
  const handleGoBack = () => {
    const confirmed = window.confirm(
      "คุณต้องการย้อนกลับ ?"
    );
    if (confirmed) {
      window.location.href = "/T-shirt/Navy-Front";
    }

  };

  return (
    <>
      <div className="container">
      <img id="Logo" src={require('../logo.png')} alt="img" />
      <div className="Frame1">
      <h3 className="CenteredHeader">CUSTOM DESIGN</h3>

      <div className="Box">
        <div className="Box2">
          <button id="BntBack" onClick={handleGoBack}>
            <img src={Back} alt="Back" />
          </button>
          <div className="Box3">
            <Navigation />
          </div>
        </div>
        <img id="MockupBack3" src={NavyBackMockup} alt="Mockup" />
        <div className="Box3">
          <MenuB />
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default NavyBack;
