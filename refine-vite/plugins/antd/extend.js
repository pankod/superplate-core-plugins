const base = {
    _app: {
        import: [],
        refineImports: [],
        refineAntdImports: ["notificationProvider", "ThemedLayoutV2"],
        refineProps: ["notificationProvider={notificationProvider}"],
        wrapper: [
            [`<ColorModeContextProvider>`, `</ColorModeContextProvider>`],
        ],
        localImport: [
            `import { ColorModeContextProvider } from "./contexts/color-mode";`,
            `import { Header } from "./components/header";`,
        ],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
