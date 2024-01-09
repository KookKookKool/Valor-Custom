// actionsBack.js
const setUploadedImageBack = (image, index) => ({
  type: 'SET_UPLOADED_IMAGE_BACK',
  payload: { image, index },
});

export { setUploadedImageBack };
