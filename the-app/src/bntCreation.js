import React from 'react';

const CustomButton = ({ onClick, label, id }) => {
  const buttonStyle = {
    padding: '10px 15px',
    color: '#FFFFFF',
    cursor: 'pointer',
    textAlign: 'center',
    backgroundColor: '#808080',
    display: 'inline-block',
    userSelect: 'none',
  };

    switch (id) {
      case 'NavHome':
        buttonStyle.backgroundColor = '#808080';
      break;
      case 'NavSettings':
        buttonStyle.backgroundColor = '#FF0000';
      break;
      case 'NavThread':
        buttonStyle.backgroundColor = '#0000FF';
      break;
      case 'ThreadBut':
        buttonStyle.margin = '5px';  
    }
  

  return (
    <div style={buttonStyle} onClick={onClick} role="button" tabIndex="0" id={id} >
      {label}
    </div>
  );
};

export default CustomButton;
