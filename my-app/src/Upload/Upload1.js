import React from "react";
import "./Upload1.css";

function Upload({ onUpload }) {
  function handleChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // const fileURL = URL.createObjectURL(selectedFile);
      onUpload(selectedFile);
    }
  }

  return (
    <div className="Upload">
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <label htmlFor="fileInput" className="upload-button center-text">
        อัพโหลดรูปภาพ
      </label>
    </div>
  );
}

export default Upload;
