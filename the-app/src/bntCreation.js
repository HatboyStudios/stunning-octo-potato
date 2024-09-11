


import React from 'react';

const CustomButton = ({ onClick, label }) => {
  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
    display: 'inline-block',
    userSelect: 'none',
  };

  return (
    <div style={buttonStyle} onClick={onClick} role="button" tabIndex="0" onKeyPress={(e) => e.key === 'Enter' && onClick()}>
      {label}
    </div>
  );
};

export default CustomButton;
