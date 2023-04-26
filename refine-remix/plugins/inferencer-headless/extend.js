const base = {
    _app: {
        import: [],
        refineProps: [],
        refineAntdImports: [],
        wrapper: [],
    },
};

module.exports = {
    extend(answers) {
        base._app.inferencer = {
            ui: "no",
            folder: "headless",
            componentPrefix: "Headless",
        };

        return base;
    },
};
