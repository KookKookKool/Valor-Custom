// whiteBackReducer.js
const initialState = {
    uploadedImageBack: null,
  };
  
  const whiteBackReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_UPLOADED_IMAGE_BACK':
        return { ...state, uploadedImageBack: action.payload };
      default:
        return state;
    }
  };
  
  export { whiteBackReducer };
  