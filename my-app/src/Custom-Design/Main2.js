// Main2.js
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main2 extends Component {
  render() {
    const { uploadedImageFront } = this.props;

    return (
      <div>
        {uploadedImageFront && <img src={uploadedImageFront} alt="" />}
        {/* ทำอะไรต่อไป */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  uploadedImageFront: state.images.uploadedImageFront,
});

export default connect(mapStateToProps)(Main2);

