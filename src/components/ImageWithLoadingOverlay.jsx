import React, { useState, useEffect } from 'react';

const ImageWithLoadingOverlay = ({ imageUrl }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = imageUrl;

    image.onload = () => {
      // When the image is loaded, remove the loading overlay
      setIsLoading(false);
    };
  }, [imageUrl]);

  return (
    <div className="image-container">
      {isLoading && <div className="loading-overlay">Loading...</div>}
      <img src={imageUrl} alt="Image" className={`image ${isLoading ? 'hidden' : ''}`} />
    </div>
  );
};

export default ImageWithLoadingOverlay;
