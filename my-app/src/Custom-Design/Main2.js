// Main2.js
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main2 extends Component {
  render() {
    const { uploadedImageFront, uploadedImageBack, uploadedImageRight, uploadedImageLeft } = this.props;

    return (
      <div>
        {uploadedImageFront && <img src={uploadedImageFront} alt="" />}
        {uploadedImageBack && <img src={uploadedImageBack} alt="" />}
        {uploadedImageRight && <img src={uploadedImageRight} alt="" />}
        {uploadedImageLeft && <img src={uploadedImageLeft} alt="" />}
        {/* ทำอะไรต่อไป */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  uploadedImageFront: state.images.uploadedImageFront,
  uploadedImageBack: state.images.uploadedImageBack,
  uploadedImageRight: state.images.uploadedImageRight,
  uploadedImageLeft: state.images.uploadedImageLeft,
});

export default connect(mapStateToProps)(Main2);
