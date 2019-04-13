import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./Header.scss";

import Logo from "./Logo";

const Header = ({ title }) => (
  <header className="Header">
    <div className="Header-content">
      <Link to="/" className="Header-logoLink no-border">
        <Logo alt={title} className="Header-logo" />
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
