import React from 'react';

const CustomButton = ({ onClick, label }) => {
  const buttonStyle = {
    padding: '10px 15px',
    backgroundColor: '#000000',
    color: '#FFFFFF',
    cursor: 'pointer',
    textAlign: 'center',
    display: 'inline-block',
    userSelect: 'none',
  };

  if (label === "Settings") {
    buttonStyle.backgroundColor = '#808080';
  } else if (label === "Thread") {
    buttonStyle.backgroundColor = '#0000FF';
  } 

  return (
    <div style={buttonStyle} onClick={onClick} role="button" tabIndex="0" >
      {label}
    </div>
  );
};

export default CustomButton;
