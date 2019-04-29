import React from "react";
import Helmet from "react-helmet";

import ColorSwitch from "./ColorSwitch";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import "./layout.scss";

import favicon from "../../content/assets/favicon.png";

class Layout extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className="Container">
        <Helmet
          link={[
            { rel: "shortcut icon", type: "image/png", href: `${favicon}` },
          ]}
        >
          <script src="https://unpkg.com/feather-icons" />
          <script src="/dark-mode.js" />
        </Helmet>
        <Header title={title} />
        <Main>{children}</Main>
        <ColorSwitch />
        <Footer />
      </div>
    );
  }
}

export default Layout;
