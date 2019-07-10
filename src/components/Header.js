import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import newsletter from '../../content/assets/newsletter.png';
import './Header.scss';
import Logo from './Logo';

const Header = ({ title, showHeaderCallout }) => (
  <header className="Header">
    <section className="Header-content">
      <Link to="/" className="Header-logoLink">
        <Logo alt={title} className="Header-logo" />
      </Link>
      <nav className="Header-nav">
        <a href="/blog">Blog</a>
      </nav>
    </section>
    {showHeaderCallout && (
      <section className="Header-callout">
        <p>
          Hey friends! I just released a podcast! It&apos;s all about everything
          that happens after you run <code>create-react-app</code>. I&apos;d
          love for you to check it out!
          <br />
          <br />
          <a href="https://react.delivery">Visit react.delivery</a>
        </p>
        <img src={newsletter} />
      </section>
    )}
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: ``,
};

export default Header;
