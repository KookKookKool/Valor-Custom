// actions.js
import { SET_UPLOADED_IMAGE } from './types';

export const setUploadedImage = (image) => ({
  type: SET_UPLOADED_IMAGE,
  payload: image,
});
