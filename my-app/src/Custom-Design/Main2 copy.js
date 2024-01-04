import React from 'react';

const Main2 = () => {
  // Retrieve the uploaded image from the query parameters
  const urlSearchParams = new URLSearchParams(window.location.search);
  const uploadedImage = urlSearchParams.get('uploadedImage');

  return (
    <div>
      {/* Display the uploaded image */}
      {uploadedImage && (
        <img src={decodeURIComponent(uploadedImage)} alt="Uploaded Design" />
      )}
    </div>
  );
};

export default Main2;
