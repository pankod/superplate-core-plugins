const base = {
    _app: {
        import: ['import styles from "~/global.css";'],
        styleImport: ['{ rel: "stylesheet", href: styles }'],
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
