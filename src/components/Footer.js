import React from 'react';

import Newsletter from './Newsletter';
import Social from './Social';

import './Footer.scss';

const Footer = () => (
  <footer className="Footer">
    <div className="Footer-content">
      <div className="Footer-right">
        <Social />
        <div className="Footer-copyright">
          <a href="/copy-what-you-want" className="Footer-licenseLink">
            ¯\_(ツ)_/¯ {new Date().getFullYear()}
          </a>
          <div className="Footer-badges">
            Code:
            <a href="https://opensource.org/licenses/MIT">
              <img
                alt="License: MIT"
                src="https://img.shields.io/badge/License-MIT-yellow.svg"
              />
            </a>{' '}
            Content:
            <a
              rel="license"
              href="http://creativecommons.org/licenses/by-sa/4.0/"
            >
              <img
                alt="Creative Commons License"
                src="https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg"
              />
            </a>
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  </footer>
);

export default Footer;
