// actionsBack.js
export const setImageStyleOptionBack = (imageStyleOption) => ({
  type: "SET_IMAGE_STYLE_OPTION_BACK",
  imageStyleOption,
});

export const setUploadedImageBack = (image, index) => ({
  type: "SET_UPLOADED_IMAGE_BACK",
  image,
  index,
});