"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var gatsby_1 = require("gatsby");
var mdx_renderer_1 = __importDefault(require("gatsby-mdx/mdx-renderer"));
var react_1 = __importStar(require("react"));
var BlogPost_1 = __importDefault(require("~components/BlogPost"));
var layout_1 = __importDefault(require("~components/layout"));
var seo_1 = __importDefault(require("~components/seo"));
var Title_1 = __importDefault(require("~components/Title"));
var WordCount_1 = __importDefault(require("~components/WordCount"));
var BlogPostTemplate = function (props) {
    var postRef = react_1.useRef();
    var data = props.data, pageContext = props.pageContext, location = props.location;
    var post = data.mdx;
    var siteTitle = data.site.siteMetadata.title;
    var previous = pageContext.previous, next = pageContext.next;
    var keywords = post.frontmatter.keywords || '';
    return (react_1.default.createElement(layout_1.default, { location: location, title: siteTitle },
        react_1.default.createElement(seo_1.default, { title: post.frontmatter.title, description: post.frontmatter.description || post.excerpt, keywords: keywords.split(',') }),
        react_1.default.createElement("header", { className: "BlogHeader" },
            post.frontmatter.cover_image && (react_1.default.createElement("div", { className: "CoverImage" },
                react_1.default.createElement("img", { alt: "", src: post.frontmatter.cover_image }))),
            react_1.default.createElement("small", { className: "PostMeta" },
                post.frontmatter.date,
                " | ",
                react_1.default.createElement(WordCount_1.default, { countElement: postRef })),
            react_1.default.createElement(Title_1.default, null, post.frontmatter.title)),
        react_1.default.createElement(BlogPost_1.default, { innerRef: postRef },
            react_1.default.createElement(mdx_renderer_1.default, null, post.code.body)),
        react_1.default.createElement("hr", null),
        react_1.default.createElement("ul", { className: "BlogPagination" },
            react_1.default.createElement("li", null, previous && (react_1.default.createElement(gatsby_1.Link, { to: previous.fields.slug, rel: "prev" },
                "\u2190 ",
                previous.frontmatter.title))),
            react_1.default.createElement("li", null, next && (react_1.default.createElement(gatsby_1.Link, { to: next.fields.slug, rel: "next" },
                next.frontmatter.title,
                " \u2192"))))));
};
exports.default = BlogPostTemplate;
exports.pageQuery = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query BlogPostBySlug($slug: String!) {\n    site {\n      siteMetadata {\n        title\n        author\n      }\n    }\n    mdx(fields: { slug: { eq: $slug } }) {\n      id\n      frontmatter {\n        title\n        date(formatString: \"MMMM DD, YYYY\")\n        description\n        cover_image\n        tags\n      }\n      fields {\n        slug\n      }\n      rawBody\n      internal {\n        content\n      }\n      code {\n        body\n        scope\n      }\n    }\n  }\n"], ["\n  query BlogPostBySlug($slug: String!) {\n    site {\n      siteMetadata {\n        title\n        author\n      }\n    }\n    mdx(fields: { slug: { eq: $slug } }) {\n      id\n      frontmatter {\n        title\n        date(formatString: \"MMMM DD, YYYY\")\n        description\n        cover_image\n        tags\n      }\n      fields {\n        slug\n      }\n      rawBody\n      internal {\n        content\n      }\n      code {\n        body\n        scope\n      }\n    }\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=blog-post.js.map