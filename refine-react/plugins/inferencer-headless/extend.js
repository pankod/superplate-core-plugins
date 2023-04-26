const base = {
    _app: {
        import: [],
        refineProps: [],
        refineAntdImports: [],
        wrapper: [],
        inferencer: {},
        localImport: [
            `import { Layout } from "./components/layout"`,
            `import "./App.css";`,
        ],
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
