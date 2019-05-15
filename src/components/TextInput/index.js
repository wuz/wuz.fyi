import React from 'react';

import './TextInput.scss';

const TextInput = ({ value, ...props }) => {
  return <input {...props} value={value} className="TextInput" />;
};

export default TextInput;
