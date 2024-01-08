// whiteFrontReducer.js
const initialState = {
  uploadedImageFront: null,
  // other state properties specific to whiteFront
};

const whiteFrontReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_UPLOADED_IMAGE_FRONT':
      return {
        ...state,
        uploadedImageFront: action.payload,
      };
    // handle other action types if needed
    default:
      return state;
  }
};

export { whiteFrontReducer };
