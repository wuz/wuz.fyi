import React from "react";

import "./SubHeading.scss";

const SubHeading = ({ element = "h3", children }) => {
  const SubHeadingElement = element;
  return (
    <SubHeadingElement className={`SubHeading`}>{children}</SubHeadingElement>
  );
};

export default SubHeading;
