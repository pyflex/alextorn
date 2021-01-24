const Promise = require('bluebird');
const path = require('path');

// prevents error of using fs (node filesystem)
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty',
    },
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.template.js');
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost(filter: { node_locale: { eq: "en-US" } }) {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allContentfulBlogPost.edges;
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          });
        });
      })
    );
    const profilePage = path.resolve('./src/templates/profile.template.js');
    resolve(
      graphql(
        `
          {
            allContentfulAuthor(filter: { node_locale: { eq: "en-US" } }) {
              edges {
                node {
                  id
                  slug
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const authors = result.data.allContentfulAuthor.edges;
        authors.forEach((author, index) => {
          createPage({
            path: `/profile/${author.node.slug}/`,
            component: profilePage,
            context: {
              slug: author.node.slug,
              id: author.node.id,
            },
          });
        });
      })
    );
  });
};
