import React from 'react';

import './BlogPost.scss';

const BlogPost = ({ children, innerRef }) => (
  <div ref={innerRef} className="BlogPost">
    {children}
  </div>
);

export default BlogPost;
