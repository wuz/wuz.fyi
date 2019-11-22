import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import './Header.scss';
import Logo from './Logo';

const Header = ({ title, showHeaderCallout }) => (
  <header className="Header">
    <section className="Header-content">
      <Link to="/" className="Header-logoLink">
        <Logo alt={title} className="Header-logo" />
      </Link>
      <nav className="Header-nav">
        <a href="/blog" className="no-hover">
          Blog
        </a>
      </nav>
    </section>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: ``,
};

export default Header;
