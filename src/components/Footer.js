import React from "react";

import Social from "./Social";

import "./Footer.scss";

const Footer = () => (
  <footer className="Footer">
    <div className="Footer-content">
      <div>© Wuz {new Date().getFullYear()}</div>
      <Social />
    </div>
  </footer>
);

export default Footer;
