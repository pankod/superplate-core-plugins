const base = {
    _app: {
        import: ['import "@styles/antd.less";'],
        inner: [],
        wrapper: [],
    },
};

module.exports = {
    extend(answers) {
        if (!answers.includes("less")) {
            base._app.import = ['import "antd/dist/antd.css";'];
        }
        return base;
    },
};
