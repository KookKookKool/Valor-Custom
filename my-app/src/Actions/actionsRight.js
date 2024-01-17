// actionsRight.js
export const setImageStyleOptionRight = (imageStyleOption) => ({
  type: "SET_IMAGE_STYLE_OPTION_RIGHT",
  imageStyleOption,
});

export const setUploadedImageRight = (image, index) => ({
  type: "SET_UPLOADED_IMAGE_RIGHT",
  image,
  index,
});
