// Upload1.js
import React from 'react';
import './Upload1.css';
import { connect } from 'react-redux';  // Make sure to import connect
import { setUploadedImageFront } from '../Actions/actionsFront';  // Import your action creators
import { setUploadedImageBack } from '../Actions/actionsBack';  // Import your action creators
import { setUploadedImageRight } from '../Actions/actionsRight'; 
import { setUploadedImageLeft } from '../Actions/actionsLeft'; 

function Upload({ onUpload, setUploadedImageFront, setUploadedImageBack, setUploadedImageRight, setUploadedImageLeft, index }) {
  function handleChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const fileURL = URL.createObjectURL(selectedFile);
      onUpload(selectedFile);
      setUploadedImageFront(fileURL, index);
      setUploadedImageBack(fileURL, index);
      setUploadedImageRight(fileURL, index);
      setUploadedImageLeft(fileURL, index);
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

export default connect(null, { setUploadedImageFront, setUploadedImageBack, setUploadedImageRight, setUploadedImageLeft })(Upload);
