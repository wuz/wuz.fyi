import React from "react";

import "./Text.scss";

const Text = ({ element = "h2", children }) => {
  return <p className={`Text`}>{children}</p>;
};

export default Text;
