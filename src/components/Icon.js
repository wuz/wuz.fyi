import React from 'react';
import feather from 'feather-icons';

const Icon = ({ name = 'circle', alt, ...props }) => {
  return (
    <i
      {...props}
      dangerouslySetInnerHTML={{
        __html: feather.icons[name].toSvg({
          title: alt,
          strokeWidth: 0,
        }),
      }}
    />
  );
};

export default Icon;
