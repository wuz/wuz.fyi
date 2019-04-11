import React from "react";

import ColorSwitch from "./ColorSwitch";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import "./layout.scss";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    return (
      <div className="Container">
        <ColorSwitch />
        <Header title={title} />
        <Main>{children}</Main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
