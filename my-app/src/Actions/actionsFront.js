// actionsFront.js
export const setUploadedImageFront = (image, index) => {
  return {
    type: "SET_UPLOADED_IMAGE_FRONT",
    image,
    index,
  };
};

export const setImageStyleOptionFront = (imageStyleOption) => ({
  type: "SET_IMAGE_STYLE_OPTION_FRONT",
  imageStyleOption,
});