import React, { useState } from 'react';
import './Popover.scss';

const Popover = ({ title, children }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`Popover ${hovered ? 'Popover--hovered' : ''}`}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <aside>{children}</aside>
      <span className="Popover-title bg-forest c-cream">{title}</span>
    </div>
  );
};

export default Popover;
