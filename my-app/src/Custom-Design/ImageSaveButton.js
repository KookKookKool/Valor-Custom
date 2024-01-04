// ImageSaveButton.js
import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { setUploadedImage } from '../Actions/actions';

const ImageSaveButton = ({ onSave, savedImage, setUploadedImage }) => {
  const handleSave = () => {
    onSave(savedImage);
    setUploadedImage(null); // ล้างรูปภาพที่อัพโหลดเมื่อบันทึกเสร็จ
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

export default connect(mapStateToProps, { setUploadedImage })(ImageSaveButton);
