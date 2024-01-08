// whiteBackReducer.js
const initialState = {
  uploadedImageBack: null,
  // other state properties specific to whiteBack
};

const whiteBackReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_UPLOADED_IMAGE_BACK':
      return {
        ...state,
        uploadedImageBack: action.payload,
      };
    // handle other action types if needed
    default:
      return state;
  }
};

export { whiteBackReducer };
