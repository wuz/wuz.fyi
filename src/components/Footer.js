import React, { useEffect } from 'react';
import './Footer.scss';
import Newsletter from './Newsletter';
import Social from './Social';

const logPageView = () => {
  return fetch('/.netlify/functions/pageViews', {
    body: JSON.stringify({
      url: window.location.href,
    }),
    method: 'POST',
  }).then(response => {
    return response.json();
  });
};

const Footer = ({ hideNewsletter }) => {
  useEffect(() => {
    logPageView().then(console.log);
  });
  return (
    <footer className="Footer">
      <div className="Footer-content">
        <div className="Footer-left">
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
      </div>
    </footer>
  );
};

export default Footer;
