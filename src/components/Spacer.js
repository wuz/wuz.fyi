import React from "react";

import "./Spacer.scss";

const Spacer = ({ size = "sm" }) => {
  return <div className={`Spacer Spacer--${size}`} />;
};

export default Spacer;
