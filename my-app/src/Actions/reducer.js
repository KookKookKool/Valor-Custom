// reducer.js
const initialState = {
  uploadedImageFront: null,
  uploadedImageBack: null,
  uploadedImageRight: null,
  uploadedImageLeft: null,
};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_UPLOADED_IMAGE_FRONT':
      return { ...state, uploadedImageFront: action.payload };
    case 'SET_UPLOADED_IMAGE_BACK':
      return { ...state, uploadedImageBack: action.payload };
    case 'SET_UPLOADED_IMAGE_RIGHT':
      return { ...state, uploadedImageRight: action.payload };
    case 'SET_UPLOADED_IMAGE_LEFT':
      return { ...state, uploadedImageLeft: action.payload };
    default:
      return state;
  }
};

export default imagesReducer;

