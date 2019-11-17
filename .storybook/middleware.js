const proxy = require('http-proxy-middleware');
const dotenv = require('dotenv');

dotenv.config();

module.exports = function expressMiddleware(router) {
  router.use('/api', proxy({
    target: process.env.STORYBOOK_BASE_API,
    changeOrigin: true,
  }));
};
