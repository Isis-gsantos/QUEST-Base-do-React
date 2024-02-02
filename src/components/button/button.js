import React from 'react';

const theLabelIs = (event, label) => {
  console.log('A label desse botão é', label);
};

const Button = (props) => {
  return (
    <button onClick={(e) => theLabelIs(e, props.label)}>
      {props.label}
    </button>
  );
};

export default Button;