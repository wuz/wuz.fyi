import React, { useRef } from 'react';
import { Link, graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Title from '../components/Title';
import WordCount from '../components/WordCount';
import BlogPost from '../components/BlogPost';

const BlogPostTemplate = props => {
  const postRef = useRef();
  const { data, pageContext, location } = props;
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        keywords={post.frontmatter.tags.split(',')}
      />
      <header className="BlogHeader">
        {post.frontmatter.cover_image && (
          <div className="CoverImage">
            <img src={post.frontmatter.cover_image} />
          </div>
        )}
        <Title>{post.frontmatter.title}</Title>
        <small className="PostMeta">
          {post.frontmatter.date} | <WordCount countElement={postRef} />
        </small>
      </header>
      <BlogPost innerRef={postRef}>
        <MDXRenderer>{post.code.body}</MDXRenderer>
      </BlogPost>
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
        description
        cover_image
        tags
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
