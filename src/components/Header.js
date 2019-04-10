import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./Header.scss";

import logo from "./logo.svg";

const Header = ({ siteTitle }) => (
  <header className="Header">
    <div className="Header-content">
      <Link to="/">
        <img alt="" src={logo} className="Header-logo" />
      </Link>
      <nav>
        <Link to="/blog">Blog</Link>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
