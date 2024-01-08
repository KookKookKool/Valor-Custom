// Main2.js
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main2 extends Component {
  render() {
    const { uploadedImageFront, uploadedImageBack } = this.props;

    return (
      <div>
        {uploadedImageFront && <img src={uploadedImageFront} alt="" />}
        {uploadedImageBack && <img src={uploadedImageBack} alt="" />}
        {/* Add more images if needed */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  uploadedImageFront: state.whiteFront.uploadedImageFront,
  uploadedImageBack: state.whiteBack.uploadedImageBack,
  // Add more mappings for other images if needed
});

export default connect(mapStateToProps)(Main2);
