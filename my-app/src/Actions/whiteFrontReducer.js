// whiteFrontReducer.js (หรือตำแหน่งที่นำ reducer มาใช้)
const initialStateFront = {
  images: [],
  imageStyleOption: "1", // ค่าเริ่มต้น
};

const whiteFrontReducer = (state = initialStateFront, action) => {
  switch (action.type) {
    case "SET_UPLOADED_IMAGE_FRONT":
      return {
        ...state,
        images: [...state.images.slice(0, action.index), action.image, ...state.images.slice(action.index + 1)],
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
