import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Spacer from "../components/Spacer";
import Text from "../components/Text";
import Divider from "../components/Divider";
import List, { ListItem } from "../components/List";
import SEO from "../components/seo";

class Index extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

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
        <List>
          <ListItem>
            <a href="https://dankneon.com">Dank Neon</a>
          </ListItem>
        </List>
        <Divider />
        <Text>
          building frontends at <a href="https://lessonly.com">Lessonly</a>
          <br />
          <small>
            Previously at <a href="https://mimirhq.com">Mimir</a>
          </small>
        </Text>
        <Spacer size="lg" />
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
  }
`;
