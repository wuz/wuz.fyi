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
              className="no-border"
              href={`https://twitter.com/${social.twitter}`}
            >
              <Icon alt="Follow me on Twitter" name="twitter" />
            </a>
            <a
              className="no-border"
              href={`https://github.com/${social.github}`}
            >
              <Icon alt="View my work on Github" name="github" />
            </a>
            <a
              className="no-border"
              href={`https://linkedin.com/in/${social.linkedin}`}
            >
              <Icon alt="Add me on LinkedIn" name="linkedin" />
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
