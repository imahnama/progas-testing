const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -90,
      },
    },
  ],
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      createProxyMiddleware({
        target: 'https://progas-staging.netlify.app/.netlify/functions',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    );
  },
};
