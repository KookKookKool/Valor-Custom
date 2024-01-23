// actionsLeft.js
export const setImageStyleOptionLeft = (imageStyleOption) => ({
  type: "SET_IMAGE_STYLE_OPTION_LEFT",
  imageStyleOption,
});

export const setUploadedImageLeft = (image, index) => ({
  type: "SET_UPLOADED_IMAGE_LEFT",
  image,
  index,
});

export const resetLeftState = () => ({
  type: "RESET_LEFT_STATE",
});