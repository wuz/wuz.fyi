import React from 'react';

import './Heading.scss';

const Heading = ({ element = 'h2', size = 'normal', children }) => {
  const HeadingElement = element;
  return (
    <HeadingElement className={`Heading Heading--${size}`}>
      {children}
    </HeadingElement>
  );
};

export default Heading;
