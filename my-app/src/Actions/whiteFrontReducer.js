
// whiteFrontReducer.js
const initialState = {
  uploadedImageFront: null,
};

const whiteFrontReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_UPLOADED_IMAGE_FRONT':
      return { ...state, uploadedImageFront: action.payload };
    default:
      return state;
  }
};

export { whiteFrontReducer };


