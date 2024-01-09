// whiteBackReducer.js
const initialState = {
  images: [], // บันทึกรูปทั้งหมดใน array
  // other state properties specific to whiteBack
};

const whiteBackReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_UPLOADED_IMAGE_BACK':
      const { image, index } = action.payload;
      const updatedImagesBack = [...state.images];
      updatedImagesBack[index] = image;

      return {
        ...state,
        images: updatedImagesBack,
      };

    // handle other action types if needed
    default:
      return state;
  }
};

export { whiteBackReducer };
