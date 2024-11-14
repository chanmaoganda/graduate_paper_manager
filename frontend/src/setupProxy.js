const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/bar",
    createProxyMiddleware({
      target: "http://backend:8080",
      pathRewrite: { "^/bar": "" }
    })
  );
};
