import React from "react";

import "./List.scss";

export const ListItem = ({ children }) => {
  return <li className="ListItem">{children}</li>;
};

const List = ({ element = "ul", children }) => {
  const ListElement = element;
  return <ListElement className={`List`}>{children}</ListElement>;
};

export default List;
