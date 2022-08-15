const base = {
    _app: {
        import: [
            'import resetStyle from "@pankod/refine-antd/dist/reset.min.css";',
            'import antdStyle from "@pankod/refine-antd/dist/antd.min.css";',
        ],
        styleImport: [
            '{ rel: "stylesheet", href: antdStyle }',
            '{ rel: "stylesheet", href: resetStyle }',
        ],
    },
};

module.exports = {
    extend(answers) {
        if (answers["ui-framework"] !== "antd") {
            base._app.import = [];
        }
        return base;
    },
};
