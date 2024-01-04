import React from 'react';
import { connect } from 'react-redux';

const Main2 = ({ uploadedImage }) => {
  return (
    <div>
      {uploadedImage && (
        <img src={decodeURIComponent(uploadedImage)} alt="Uploaded Design" />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  uploadedImage: state.uploadedImage,
});

export default connect(mapStateToProps)(Main2);
