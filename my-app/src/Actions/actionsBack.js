// actionsBack.js
export const setUploadedImageBack = (image, index) => {
  return {
    type: "SET_UPLOADED_IMAGE_BACK",
    image,
    index,
  };
};
