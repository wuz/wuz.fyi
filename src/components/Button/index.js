import React from 'react';

import './Button.scss';

const Button = ({ children, type = 'button' }) => {
  return (
    <button type={type} className="Button">
      {children}
    </button>
  );
};

export default Button;
