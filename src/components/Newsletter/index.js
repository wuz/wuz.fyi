import React from 'react';

import './Newsletter.scss';

import Button from '~components/Button';
import TextInput from '~components/TextInput';
import Heading from '~components/Heading';
import Text from '~components/Text';

const Newsletter = () => (
  <form
    action="https://buttondown.email/api/emails/embed-subscribe/wuz"
    method="post"
    target="popupwindow"
    onSubmit={() => window.open('https://buttondown.email/wuz', 'popupwindow')}
    className="embeddable-buttondown-form Newsletter"
  >
    <Heading size="small">Join my email list!</Heading>
    <Text>I share a weekly update about the things I've learned</Text>
    <label for="bd-email">Email</label>
    <TextInput
      placeholder="you@your.domain"
      type="email"
      name="email"
      id="bd-email"
    />
    <input type="hidden" value="1" name="embed" />
    <Button type="submit">Subscribe</Button>
  </form>
);

export default Newsletter;
