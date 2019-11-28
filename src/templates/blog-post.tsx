import { graphql, Link } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import React, { useRef, useEffect } from 'react';
import BlogPost from '~components/BlogPost';
import Layout from '~components/layout';
import Main from '~components/Main';
import SEO from '~components/seo';
import SubHeading from '~components/SubHeading';
import Title from '~components/Title';
import WordCount from '~components/WordCount';
import Lead from '~components/Lead';

const BlogPostTemplate = props => {
  const postRef = useRef();
  const { data, pageContext, location } = props;
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  const keywords = post.frontmatter.keywords || '';

  return (
    <Layout location={location} title={siteTitle} showHeaderCallout={false}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        keywords={keywords.split(',')}
      />
      <header className="BlogHeader">
        {post.frontmatter.cover_image && (
          <div className="CoverImage">
            <img alt="" src={post.frontmatter.cover_image} />
          </div>
        )}
        <Title>{post.frontmatter.title}</Title>
        <small className="PostMeta">
          {post.frontmatter.date} | <WordCount countElement={postRef} />
        </small>
      </header>
      <Main>
        <BlogPost innerRef={postRef}>
          <MDXRenderer>{post.code.body}</MDXRenderer>
        </BlogPost>
      </Main>
      <hr />
      <ul className="BlogPagination">
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        cover_image
        description
      }
      fields {
        slug
      }
      rawBody
      internal {
        content
      }
      code {
        body
        scope
      }
    }
  }
`;
