import { createContext, useContext, useState } from 'react';

const ImageContext = createContext();

const ImageProvider = ({ children }) => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const contextValue = {
    uploadedImage,
    setUploadedImage,
  };

  return (
    <ImageContext.Provider value={contextValue}>
      {children}
    </ImageContext.Provider>
  );
};

const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImageContext must be used within an ImageProvider');
  }
  return context;
};

export { ImageProvider, useImageContext };
