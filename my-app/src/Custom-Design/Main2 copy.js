// Main2.js
import React from 'react';
import { connect } from 'react-redux';

const Main2 = ({ uploadedImageFront }) => {
  return (
    <div>
      {uploadedImageFront && (
        <img src={decodeURIComponent(uploadedImageFront)} alt="Uploaded Design" />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  uploadedImageFront: state.images.uploadedImageFront,
});

export default connect(mapStateToProps)(Main2);
