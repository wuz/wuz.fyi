import React from 'react';
import useDarkMode from 'use-dark-mode';

import './ColorSwitch.scss';

const ColorSwitch = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="ColorSwitch-container">
      <button
        className="ColorSwitch"
        onClick={darkMode.toggle}
        aria-label="Toggle Dark Mode"
      >
        <span role="img" aria-label="dark mode">
          🌝
        </span>
        <span role="img" aria-label="light mode">
          🌞
        </span>
      </button>
    </div>
  );
};

export default ColorSwitch;
