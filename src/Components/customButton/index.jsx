import React, { useState } from 'react';

const CustomButton = ({ backgroundImage, activeImage = null, children, onClick, style }) => {
  const [currentImage, setCurrentImage] = useState(backgroundImage);

  const handleMouseEnter = () => {
    if (activeImage) setCurrentImage(activeImage);
  };

  const handleMouseLeave = () => {
    setCurrentImage(backgroundImage);
  };

  const handleMouseDown = () => {
    if (activeImage) setCurrentImage(activeImage);
  };

  const handleMouseUp = () => {
    setCurrentImage(activeImage || backgroundImage);
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{
        backgroundImage: `url(${currentImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: 'none',
        color: '#fff',
        padding: '10px 15px',
        fontSize: '14px',
        fontWeight: 'bold',
        cursor: 'pointer',
        borderRadius: '8px',
        transition: 'background-image 0.3s ease',
        ...style,
      }}
    >
      {children}
    </button>
  );
};

export default CustomButton;