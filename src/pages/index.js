import { graphql, Link } from 'gatsby';
import React from 'react';
import Callout from '../components/Callout';
import CalloutContainer from '../components/CalloutContainer';
import Divider from '../components/Divider';
import Layout from '../components/layout';
import List, { ListItem } from '../components/List';
import Main from '../components/Main';
import Lead from '../components/Lead';
import SEO from '../components/seo';
import Spacer from '../components/Spacer';
import SubHeading from '../components/SubHeading';
import Text from '../components/Text';
import Title from '../components/Title';

class Index extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMdx.edges;

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
        <section className="u-mw p-lg m-p-md">
          <Title>
            Heya, I&apos;m Conlin, but you can{' '}
            <a href="https://twitter.com/CallMeWuz">call me Wuz</a>.
          </Title>
          <Lead>
            Software engineer building performant, accessible frontends and
            hacking on new ideas.
          </Lead>
        </section>
        <CalloutContainer>
          <Callout to={posts[0].node.fields.slug}>
            <SubHeading>Most Recent Post</SubHeading>
            <strong>
              {posts[0].node.frontmatter.title || posts[0].node.fields.slug}
            </strong>
            <br />
            {posts[0].node.frontmatter.description}
          </Callout>
          <Callout color="strawberry" to="https://intriguing-elbow.glitch.me/">
            <SubHeading>Recent Project</SubHeading>
            Bubblesort animation for named CSS colors
          </Callout>
        </CalloutContainer>
        <Main>
          <Title>About Me</Title>
          <SubHeading>Current Interests</SubHeading>

          <List>
            <ListItem>
              <a href="https://stdio.app">stdio</a> - A community for human
              engineers
            </ListItem>
          </List>
          <div>
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
          </div>
          <div>
            <SubHeading>About Me</SubHeading>
            <Text>
              building frontends at <a href="https://lessonly.com">Lessonly</a>
              <br />
              <small>
                Previously at <a href="https://mimirhq.com">Mimir</a>
              </small>
            </Text>
          </div>
          <div>
            <SubHeading>Projects</SubHeading>
            <Text>
              built <a href="https://dankneon.com">Dank Neon</a>,{' '}
              <a href="https://botsin.space/@ajjbot">AJJ Bot</a>,{' '}
              <a href="https://picdance.party">Picdance</a>, and{' '}
              <a href="https://github.com/wuz/all_google_fonts">
                all google fonts
              </a>
            </Text>
          </div>
          <Spacer size="md" />
          <Text>
            founded <a href="https://www.f6s.com/tebogollc">Tebogo</a> once upon
            a time
          </Text>
        </Main>
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 4) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
