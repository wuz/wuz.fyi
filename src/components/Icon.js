import React from "react";
import feather from "feather-icons";

const Icon = ({ name = "circle", alt }) => {
  return (
    <i
      dangerouslySetInnerHTML={{
        __html: feather.icons[name].toSvg({ title: alt }),
      }}
    />
  );
};

export default Icon;
