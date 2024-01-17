// whiteRightReducer.js 
const initialStateRight = {
  images: [],
  imageStyleOption: "1", 
};

const whiteRightReducer = (state = initialStateRight, action) => {
  switch (action.type) {
    case "SET_UPLOADED_IMAGE_RIGHT":
      return {
        ...state,
        images: state.images ? [...state.images.slice(0, action.index), action.image, ...state.images.slice(action.index + 1)] : [action.image],
      };
    case "SET_IMAGE_STYLE_OPTION_RIGHT":
      return {
        ...state,
        imageStyleOption: action.imageStyleOption,
      };
    default:
      return state;
  }
};

export default whiteRightReducer;