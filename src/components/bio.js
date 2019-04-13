/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Text from "./Text";

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata;
        return (
          <div>
            <Text>
              Howdy, I'm <strong>Wuz</strong> (aka {author}). I live and work in
              Indianapolis, building accessible, performant frontends.
              <br />
              I'm fascinated in the internet and the relationships between code,
              art, and community.
            </Text>
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
      }
    }
  }
`;

export default Bio;
