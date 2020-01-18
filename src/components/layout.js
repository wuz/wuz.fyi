import React from 'react';
import Helmet from 'react-helmet';
import ColorSwitch from './ColorSwitch';
import Footer from './Footer';
import Header from './Header';
import './layout.scss';

class Layout extends React.Component {
  render() {
    const { title, children, hideNewsletter = false } = this.props;
    return (
      <div className="Container">
        <Helmet>
          <script src="https://unpkg.com/feather-icons" />
          <script src="/dark-mode.js" />
          <script src="/favicon.js" />
        </Helmet>
        <Header title={title} />
        {children}
        <ColorSwitch />
        <Footer hideNewsletter={hideNewsletter} />
      </div>
    );
  }
}

export default Layout;
