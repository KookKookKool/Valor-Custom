// whiteFrontReducer.js
const initialState = {
  images: [], // บันทึกรูปทั้งหมดใน array
  // other state properties specific to whiteFront
};

const whiteFrontReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_UPLOADED_IMAGE_FRONT':
      const { image, index } = action.payload;
      const updatedImagesFront = [...state.images];
      updatedImagesFront[index] = image;

      return {
        ...state,
        images: updatedImagesFront,
      };

    // handle other action types if needed
    default:
      return state;
  }
};

export { whiteFrontReducer };
