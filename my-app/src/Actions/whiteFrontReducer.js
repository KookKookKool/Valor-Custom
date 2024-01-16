// whiteFrontReducer.js 
const initialStateFront = {
  images: [],
  imageStyleOption: "1", 
};

const whiteFrontReducer = (state = initialStateFront, action) => {
  switch (action.type) {
    case "SET_UPLOADED_IMAGE_FRONT":
      return {
        ...state,
        images: state.images ? [...state.images.slice(0, action.index), action.image, ...state.images.slice(action.index + 1)] : [action.image],
      };
    case "SET_IMAGE_STYLE_OPTION_FRONT":
      return {
        ...state,
        imageStyleOption: action.imageStyleOption,
      };
    default:
      return state;
  }
};

export default whiteFrontReducer;