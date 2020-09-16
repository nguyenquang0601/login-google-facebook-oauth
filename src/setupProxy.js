const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  console.log(1),
  app.use(
    '/google',
    createProxyMiddleware({
      target: 'http://localhost:3000',
      changeOrigin: true,
    })
  );
};