//Main2.js
import { connect } from 'react-redux';

const Main2 = ({ uploadedImageFront, uploadedImageBack, uploadedImageRight, uploadedImageLeft  }) => {
  // ทำอะไรก็ตามที่คุณต้องการกับ uploadedImageFront
  return (
    <div>
      <img src={uploadedImageFront} alt="" />
      <img src={uploadedImageBack} alt="" />
      <img src={uploadedImageRight} alt="" />
      <img src={uploadedImageLeft} alt="" />
    </div>
  );
};

const mapStateToProps = (state) => ({
  uploadedImageFront: (state.whiteFront && state.whiteFront.images && state.whiteFront.images[0]) || null,
  uploadedImageBack: (state.whiteBack && state.whiteBack.images && state.whiteBack.images[1]) || null,
  uploadedImageRight: (state.whiteRight && state.whiteRight.images && state.whiteRight.images[2]) || null,
  uploadedImageLeft: (state.whiteLeft && state.whiteLeft.images && state.whiteLeft.images[3]) || null,
});

export default connect(mapStateToProps)(Main2);

