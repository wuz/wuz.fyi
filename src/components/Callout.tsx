import { Link } from 'gatsby';
import React from 'react';
import './Callout.scss';

import { useTiltRef } from '~utils/tilt';

const Callout = ({ children, color = 'tonic', to }) => {
  const calloutRef = useTiltRef();
  if (to.includes('http')) {
    return (
      <a
        href={to}
        ref={calloutRef}
        className={`Callout bg-${color} c-dark-${color}`}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      to={to}
      ref={calloutRef}
      className={`Callout bg-${color} c-dark-${color}`}
    >
      {children}
    </Link>
  );
};

export default Callout;
