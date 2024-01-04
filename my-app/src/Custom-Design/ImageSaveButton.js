// ImageSaveButton.js
import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { setUploadedImageFront } from '../Actions/actions';

const ImageSaveButton = ({ onSave, savedImage, setUploadedImageFront }) => {
  const handleSave = () => {
    onSave(savedImage);
    setUploadedImageFront(null); // ล้างรูปภาพที่อัพโหลดเมื่อบันทึกเสร็จ
  };

  return (
    <div className="ImageSaveButton">
      {savedImage && <img src={savedImage} alt="SavedImage" />}
      <Link to="/Custom-Design/Main2">
        <button onClick={handleSave}>หน้าต่อไป</button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  savedImage: state.uploadedImage,
});

export default connect(mapStateToProps, { setUploadedImageFront })(ImageSaveButton);
