import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Title from '../components/Title';
import SEO from '../components/seo';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMdx.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" keywords={[`blog`, `javascript`, `react`]} />
        <Title>recent posts</Title>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <Link to={node.fields.slug} key={node.fields.slug} className="Post">
              {node.frontmatter.cover_image && (
                <img
                  src={node.frontmatter.cover_image}
                  alt=""
                  className="Post-cover"
                />
              )}
              <div className="Post-content">
                <h3>{title}</h3>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.excerpt || node.frontmatter.description,
                  }}
                />
              </div>
            </Link>
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            cover_image
          }
        }
      }
    }
  }
`;
