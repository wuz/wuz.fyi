import React from 'react';
import { Link, graphql } from 'gatsby';

import Button from '~components/Button';
import TextInput from '~components/TextInput';
import Heading from '~components/Heading';
import Text from '~components/Text';

import Layout from '../components/layout';
import Spacer from '../components/Spacer';
import Divider from '../components/Divider';
import List, { ListItem } from '../components/List';
import SEO from '../components/seo';
import SubHeading from '../components/SubHeading';

const Newsletter = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle} hideNewsletter={true}>
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
      <div id="mc_embed_signup">
        <form
          action="https://fyi.us20.list-manage.com/subscribe/post?u=4e149d25f22ee51f2325300f0&amp;id=3638f2ca92"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          novalidate
        >
          <Heading size="small">Join my email list!</Heading>
          <Text>I share a weekly update about the things I've learned</Text>
          <label htmlFor="mce-EMAIL">
            Email<span class="asterisk">*</span>
          </label>
          <br />
          <TextInput
            placeholder="you@your.domain"
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            className="required"
          />
          <br />
          <label for="mce-FNAME">First Name </label>
          <br />
          <TextInput
            placeholder="Namey"
            type="text"
            name="FNAME"
            id="mce-FNAME"
            className="required"
          />
          <input type="hidden" value="1" name="embed" />
          <div
            style={{ position: 'absolute', left: '-5000px' }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_4e149d25f22ee51f2325300f0_3638f2ca92"
              tabindex="-1"
              value=""
            />
          </div>
          <div id="mce-responses" class="clear">
            <div
              class="response"
              id="mce-error-response"
              style={{ display: 'none' }}
            />
            <div
              class="response"
              id="mce-success-response"
              style={{ display: 'none' }}
            />
          </div>
          <Button type="submit" name="subscribe" id="mc-embedded-subscribe">
            Subscribe
          </Button>
          <script
            type="text/javascript"
            src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
          />
          <script type="text/javascript">
            {`
              (function($) {
                window.fnames = new Array();
                window.ftypes = new Array();
                fnames[0] = 'EMAIL';
                ftypes[0] = 'email';
                fnames[1] = 'FNAME';
                ftypes[1] = 'text';
                fnames[2] = 'LNAME';
                ftypes[2] = 'text';
                fnames[3] = 'ADDRESS';
                ftypes[3] = 'address';
                fnames[4] = 'PHONE';
                ftypes[4] = 'phone';
                fnames[5] = 'BIRTHDAY';
                ftypes[5] = 'birthday';
              })(jQuery);
              var $mcj = jQuery.noConflict(true);
            `}
          </script>
        </form>
      </div>
    </Layout>
  );
};

export default Newsletter;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
