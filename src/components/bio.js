import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Text from "./Text";
import Heading from "./Heading";
import SubHeading from "./SubHeading";

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata;
        return (
          <div>
            <Heading>Wuz</Heading>
            <SubHeading>A.K.A. {author}</SubHeading>
            <Text>I build accessible, performant frontends.</Text>
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
