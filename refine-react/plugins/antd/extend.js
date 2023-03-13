const base = {
    _app: {
        import: [],
        refineImports: [],
        refineAntdImports: ["notificationProvider", "Layout", "ErrorComponent"],
        refineProps: ["notificationProvider={notificationProvider}"],
        wrapper: [
            [`<ColorModeContextProvider>`, `</ColorModeContextProvider>`],
        ],
        localImport: [
            `import { ColorModeContextProvider } from "./contexts/color-mode";`,
            `import { Header } from "./components/header";`
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
