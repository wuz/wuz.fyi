import React from 'react';

import Newsletter from './Newsletter';
import Social from './Social';

import signature from '../../content/assets/signature.png';

import './Footer.scss';

const Footer = () => (
  <footer className="Footer">
    <div className="Footer-content">
      <div className="Footer-right">
        <Social />
        <a href="/copy-what-you-want" className="Footer-copyright">
          ¯\_(ツ)_/¯ {new Date().getFullYear()} &mdash; Copy what you want
        </a>
      </div>
      <Newsletter />
    </div>
  </footer>
);

export default Footer;
