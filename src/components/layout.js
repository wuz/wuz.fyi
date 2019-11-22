import React from 'react';
import Helmet from 'react-helmet';
import favicon from '../../content/assets/favicon.png';
import ColorSwitch from './ColorSwitch';
import Footer from './Footer';
import Header from './Header';
import './layout.scss';

class Layout extends React.Component {
  render() {
    const { title, children, hideNewsletter = false } = this.props;
    return (
      <div className="Container">
        <Helmet
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}
        >
          <script src="https://unpkg.com/feather-icons" />
          <script src="/dark-mode.js" />
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
