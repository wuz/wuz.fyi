import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Bio from "./Bio";
import "./Header.scss";

import Logo from "./Logo";

const Header = ({ title }) => (
  <header className="Header">
    <Link to="/" className="Header-logoLink">
      <Logo alt={title} className="Header-logo" />
    </Link>
    <div className="Header-content">
      <Bio />
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: ``,
};

export default Header;
