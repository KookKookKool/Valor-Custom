import React from "react";

function Card() {
  return (
    <div>
      <div className="card">
        <div className="image">
          <img src="http://1.bp.blogspot.com/-EhPr4LXcywE/Udr594sPHTI/AAAAAAAAAJ4/Tv4y4CBLTPM/s400/Cristina-Otero-2.jpg" />
        </div>
        <div className="details">
          <div className="center">
            <h1>
              Someone famous<span>team leader</span>
            </h1>
            <p>
              Lorem ipsum is simple dummy text on the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
