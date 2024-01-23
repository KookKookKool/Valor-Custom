// whiteBackReducer.js
const initialStateBack = {
  images: [],
  imageStyleOption: "1",
};

const whiteBackReducer = (state = initialStateBack, action) => {
  switch (action.type) {
    case "SET_UPLOADED_IMAGE_BACK":
      return {
        ...state,
        images: state.images ? [...state.images.slice(0, action.index), action.image, ...state.images.slice(action.index + 1)] : [action.image],
      };
    case "SET_IMAGE_STYLE_OPTION_BACK":
      return {
        ...state,
        imageStyleOption: action.imageStyleOption,
      };
      case "RESET_BACK_STATE":
        return initialStateBack; // Reset state to initial state
    default:
      return state;
  }
};

export default whiteBackReducer;
