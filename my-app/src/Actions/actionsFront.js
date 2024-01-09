// actionsFront.js
const setUploadedImageFront = (image, index) => ({
  type: 'SET_UPLOADED_IMAGE_FRONT',
  payload: { image, index },
});

export { setUploadedImageFront };
