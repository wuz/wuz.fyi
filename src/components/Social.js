import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Icon from "./Icon";
import "./Social.scss";

const Social = () => {
  return (
    <StaticQuery
      query={socialQuery}
      render={data => {
        const { social } = data.site.siteMetadata;
        return (
          <div className="Social">
            <a
              aria-label="Follow me on Twitter"
              className="no-border"
              href={`https://twitter.com/${social.twitter}`}
            >
              <Icon alt="" name="twitter" />
            </a>
            <a
              aria-label="View my work on Github"
              className="no-border"
              href={`https://github.com/${social.github}`}
            >
              <Icon alt="" name="github" />
            </a>
            <a
              aria-label="Add me on LinkedIn"
              className="no-border"
              href={`https://linkedin.com/in/${social.linkedin}`}
            >
              <Icon alt="" name="linkedin" />
            </a>
          </div>
        );
      }}
    />
  );
};

const socialQuery = graphql`
  query SocialQuery {
    site {
      siteMetadata {
        social {
          twitter
          linkedin
          github
        }
      }
    }
  }
`;

export default Social;
