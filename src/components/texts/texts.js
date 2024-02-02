import React from 'react';

const Text = (props) => {
    const uppercasedText = 'Esse é um parágrafo'.toUpperCase();
  
    return (
      <p style={{ color: props.color }}>
        {uppercasedText}
      </p>
    );
  };

export default Text;