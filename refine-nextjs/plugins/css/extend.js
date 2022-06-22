const base = {
    _app: {
        import: ['import "@pankod/refine-antd/dist/styles.min.css";'],
    },
};

module.exports = {
    extend(answers) {
        if (answers["ui-framework"] !== "no") {
            base._app.import = [];
        }
        return base;
    },
};
