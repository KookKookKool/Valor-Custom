// actionsPacth.js
export const setImageStyleOptionPatch = (imageStyleOption) => ({
  type: "SET_IMAGE_STYLE_OPTION_PATCH",
  imageStyleOption,
});

export const setUploadedImagePatch = (image, index) => ({
  type: "SET_UPLOADED_IMAGE_PATCH",
  image,
  index,
});

export const resetPatchState = () => ({
  type: "RESET_PATCH_STATE",
});