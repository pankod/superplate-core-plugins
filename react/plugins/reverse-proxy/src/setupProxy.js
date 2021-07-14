const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://official-joke-api.appspot.com",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    })
  );
};