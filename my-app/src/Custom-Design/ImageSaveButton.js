// ImageSaveButton.js
import React from "react";
import { Link } from "react-router-dom";


const ImageSaveButton = ({ onSave, savedImage }) => {
  return (
    <div className="ImageSaveButton">
      {savedImage && <img src={savedImage} alt="SavedImage" />}
       <Link to="/Custom-Design/Main2" >
       <button onClick={onSave}>หน้าต่อไป</button>
       </Link>
    </div>
  );
};

export default ImageSaveButton;
