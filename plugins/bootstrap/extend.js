const base = {
  _app: {
    import: ['import "@styles/app.scss";'],
    inner: [],
    wrapper: [],
  },
};

module.exports = {
  extend(answers) {
    if (answers.includes("css")) {
      base._app.import = [
        'import "../node_modules/bootstrap/dist/css/bootstrap.min.css";',
      ];
    }
    return base;
  },
};