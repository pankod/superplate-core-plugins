const base = {
    _app: {
        import: [],
        refineProps: [],
        refineAntdImports: [],
        wrapper: [],
        localImport: [
            `import { Layout } from "@components/layout";`,
            `import { Header } from "@components/header";`,
        ],
        inferencer: {},
    },
};

module.exports = {
    extend() {
        base._app.inferencer = {
            ui: "no",
            folder: "headless",
            componentPrefix: "Headless",
        };

        return base;
    },
};
