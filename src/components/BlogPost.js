import React from "react";

import "./BlogPost.scss";

const BlogPost = ({ dangerouslySetInnerHTML }) => (
  <div className="BlogPost" dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
);

export default BlogPost;
