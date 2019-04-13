import React from "react";

import "./Heading.scss";

const Heading = ({ element = "h2", children }) => {
  const HeadingElement = element;
  return <HeadingElement className={`Heading`}>{children}</HeadingElement>;
};

export default Heading;
