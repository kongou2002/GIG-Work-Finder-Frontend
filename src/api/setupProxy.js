const proxy = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        proxy("/JobOffer", {
            target: "https://gig-worker-backend.azurewebsites.net/",
            changeOrigin: true
        })
    );
};