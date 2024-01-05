// actions.js
export const setUploadedImageFront = (image) => ({
  type: 'SET_UPLOADED_IMAGE_FRONT',
  payload: image,
});

export const setUploadedImageBack = (image) => ({
  type: 'SET_UPLOADED_IMAGE_BACK',
  payload: image,
});

export const setUploadedImageRight = (image) => ({
  type: 'SET_UPLOADED_IMAGE_RIGHT',
  payload: image,
});

export const setUploadedImageLeft = (image) => ({
  type: 'SET_UPLOADED_IMAGE_LEFT',
  payload: image,
});
