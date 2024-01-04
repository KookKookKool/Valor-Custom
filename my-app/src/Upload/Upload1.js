// Upload1.js
import React from "react";
import "./Upload1.css";
import { connect } from 'react-redux';
import { setUploadedImage } from '../Actions/actions';

function Upload({ onUpload, setUploadedImage }) {
  function handleChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const fileURL = URL.createObjectURL(selectedFile);
      onUpload(selectedFile);
      setUploadedImage(fileURL);
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

export default connect(null, { setUploadedImage })(Upload);
