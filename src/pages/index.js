import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Spacer from "../components/Spacer";
import Text from "../components/Text";
import Divider from "../components/Divider";
import List, { ListItem } from "../components/List";
import SEO from "../components/seo";
import SubHeading from "../components/SubHeading";

class Index extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Welcome!"
          keywords={[
            `blog`,
            `developer`,
            `software engineer`,
            `javascript`,
            `react`,
            `accessibility`,
          ]}
        />
        <Spacer size="lg" />
        <SubHeading>Current Interests</SubHeading>
        <List>
          <ListItem>
            <a href="https://stdio.app">stdio</a> - A community for human
            engineers
          </ListItem>
        </List>
        <Divider />
        <SubHeading>Recent Writing</SubHeading>
        <List>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <ListItem key={node.fields.slug}>
                <Link to={node.fields.slug}>{title}</Link>
              </ListItem>
            );
          })}
        </List>
        <Link to="/blog">More Writings</Link>
        <Divider />
        <SubHeading>About Me</SubHeading>
        <Text>
          building frontends at <a href="https://lessonly.com">Lessonly</a>
          <br />
          <small>
            Previously at <a href="https://mimirhq.com">Mimir</a>
          </small>
        </Text>
        <Divider />
        <SubHeading>Projects</SubHeading>
        <Text>
          built <a href="https://dankneon.com">Dank Neon</a>,{" "}
          <a href="https://botsin.space/@ajjbot">AJJ Bot</a>,{" "}
          <a href="https://picdance.party">Picdance</a>, and{" "}
          <a href="https://github.com/wuz/all_google_fonts">all google fonts</a>
        </Text>
        <Spacer size="lg" />
        <Text>
          founded <a href="https://www.f6s.com/tebogollc">Tebogo</a> once upon a
          time
        </Text>
        <Spacer size="lg" />
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
      limit: 4
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
