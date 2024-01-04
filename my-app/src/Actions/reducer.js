// reducer.js
import { SET_UPLOADED_IMAGE_FRONT, SET_UPLOADED_IMAGE_BACK } from './types';

const initialState = {
  uploadedImageFront: null,
  uploadedImageBack: null,
};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_UPLOADED_IMAGE_FRONT:
      return { ...state, uploadedImageFront: action.payload };
    case SET_UPLOADED_IMAGE_BACK:
      return { ...state, uploadedImageBack: action.payload };
    default:
      return state;
  }
};

export default imagesReducer;
