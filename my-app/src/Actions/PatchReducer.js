// PatchReducer.js
const initialStatePatch = {
  images: [],
  imageStyleOption: "1",
};

const PatchReducer = (state = initialStatePatch, action) => {
  switch (action.type) {
    case "SET_UPLOADED_IMAGE_PATCH":
      return {
        ...state,
        images: state.images ? [...state.images.slice(0, action.index), action.image, ...state.images.slice(action.index + 1)] : [action.image],
      };
    case "SET_IMAGE_STYLE_OPTION_PATCH":
      return {
        ...state,
        imageStyleOption: action.imageStyleOption,
      };
      case "RESET_PATCH_STATE":
        return initialStatePatch; // Reset state to initial state
    default:
      return state;
  }
};

export default PatchReducer;
