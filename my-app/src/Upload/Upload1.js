// Upload1.js
import React from "react";
import "./Upload1.css";
import { connect } from 'react-redux';
import { setUploadedImageFront } from '../Actions/actionsFront';
import { setUploadedImageBack } from "../Actions/actionsBack";

function Upload({ onUpload, setUploadedImageFront, setUploadedImageBack }) {
  function handleChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const fileURL = URL.createObjectURL(selectedFile);
      onUpload(selectedFile);
      setUploadedImageFront(fileURL, 0);
      setUploadedImageBack(fileURL, 1);
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

export default connect(null, { setUploadedImageFront, setUploadedImageBack })(Upload);
