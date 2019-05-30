import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const Tweet = props => <TwitterTweetEmbed tweetId={props.tweetId} />;

export default Tweet;
