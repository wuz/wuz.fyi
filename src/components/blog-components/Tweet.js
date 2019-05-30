"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_twitter_embed_1 = require("react-twitter-embed");
var Tweet = function (props) { return react_1.default.createElement(react_twitter_embed_1.TwitterTweetEmbed, { tweetId: props.tweetId }); };
exports.default = Tweet;
//# sourceMappingURL=Tweet.js.map