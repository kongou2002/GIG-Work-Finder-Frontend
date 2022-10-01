const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://gig-worker-backend.azurewebsites.net',
            changeOrigin: true,
        })
    );
};