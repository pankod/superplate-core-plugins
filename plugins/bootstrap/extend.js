const base = {
  _app: {
    import: ['import "@styles/app.scss";'],
    inner: [],
    wrapper: [],
  },
};

module.exports = {
  extend(answers) {
    return base;
  },
};
