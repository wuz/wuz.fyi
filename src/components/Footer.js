import React from "react";

import Social from "./Social";

import "./Footer.scss";

const Footer = () => (
  <footer className="Footer">
    <div>© Wuz {new Date().getFullYear()}</div>
    <div className="Footer-divider" />
    <Social />
  </footer>
);

export default Footer;
