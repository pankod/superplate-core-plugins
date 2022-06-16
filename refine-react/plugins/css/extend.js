const base = {
    _app: {
        import: ['import "@pankod/refine-antd/dist/styles.min.css";'],
        inner: [],
    },
};

module.exports = {
    extend(answers) {
        if (answers.uiFramework !== "antd") {
            base._app.import = [];
        }
        return base;
    },
};
