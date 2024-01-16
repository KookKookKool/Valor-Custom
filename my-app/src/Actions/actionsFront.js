// actionsFront.js
export const setImageStyleOptionFront = (imageStyleOption) => ({
  type: "SET_IMAGE_STYLE_OPTION_FRONT",
  imageStyleOption,
});

export const setUploadedImageFront = (image, index) => ({
  type: "SET_UPLOADED_IMAGE_FRONT",
  image,
  index,
});
