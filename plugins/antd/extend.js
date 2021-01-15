const base = {
  _app: {
    import: ['import "@styles/ant.less";'],
    inner: [],
    wrapper: [],
  },
};

module.exports = {
  extend(answers) {
    if (answers.includes("css")) {
      base._app.import = ['import "antd/dist/antd.css";'];
    }
    return base;
  },
};
