import React from "react";

import "./Footer.scss";

const Footer = () => (
  <footer className="Footer">
    © Wuz {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
);

export default Footer;
