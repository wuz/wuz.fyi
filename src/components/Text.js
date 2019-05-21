import React from 'react';

import './Text.scss';

const Text = ({ children }) => {
  return <p className={`Text`}>{children}</p>;
};

export default Text;
