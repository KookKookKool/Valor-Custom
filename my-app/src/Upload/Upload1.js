import React, { useState } from "react";
import "./Upload1.css"

function Upload() {
  const [file, setFile] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="Upload">
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        onChange={handleChange}
        style={{ display: "none" }}/>
        <label htmlFor="fileInput" className="upload-button center-text">
            อัพโหลดรูปภาพ
        </label>
      {file && <img src={file} alt="" />}
    </div>
  );
}

export default Upload;
