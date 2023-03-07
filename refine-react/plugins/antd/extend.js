const base = {
    _app: {
        import: [],
        refineImports: [],
        refineAntdImports: ["notificationProvider", "Layout", "ErrorComponent"],
        refineProps: ["notificationProvider={notificationProvider}"],
        wrapper: [
            [`<BrowserRouter>`, `</BrowserRouter>`],
            [`<ColorModeContextProvider>`, `</ColorModeContextProvider>`],
        ],
        localImport: [
            `import { ColorModeContextProvider } from "./contexts/color-mode";`
        ],
        refineComponents: [],
    },
};

module.exports = {
    extend(answers) {
        if (answers["inferencer"] === "no") {
            base._app.refineAntdImports.push("WelcomePage");
            base._app.refineComponents.push(`<WelcomePage />`);
        }

        return base;
    },
};
