import React from 'react';
import './Index.css';

export default function Index() {
  return (
    <div>
      <div className="Card2">
        <img id="Logo2" src={require("./LaserPatch.png")} alt="img" className="default-img" />
        <img id="Logo2Hover" src={require("./LaserPatchHover.png")} alt="img" className="hover-img" />
        <h5>Patches</h5>
      </div>
    </div>
  );
}
