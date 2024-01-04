// reducer.js
import { SET_UPLOADED_IMAGE } from './types';

const initialState = {
  uploadedImage: null,
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_UPLOADED_IMAGE:
      return {
        ...state,
        uploadedImage: action.payload,
      };
    default:
      return state;
  }
};

export default imageReducer;
