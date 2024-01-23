// whiteLeftReducer.js
const initialStateLeft = {
  images: [],
  imageStyleOption: "1",
};

const whiteLeftReducer = (state = initialStateLeft, action) => {
  switch (action.type) {
    case "SET_UPLOADED_IMAGE_LEFT":
      return {
        ...state,
        images: state.images ? [...state.images.slice(0, action.index), action.image, ...state.images.slice(action.index + 1)] : [action.image],
      };
    case "SET_IMAGE_STYLE_OPTION_LEFT":
      return {
        ...state,
        imageStyleOption: action.imageStyleOption,
      };
      case "RESET_LEFT_STATE":
        return initialStateLeft; // Reset state to initial state
    default:
      return state;
  }
};

export default whiteLeftReducer;
