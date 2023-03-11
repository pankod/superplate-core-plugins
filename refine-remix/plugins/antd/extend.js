const base = {
    _app: {
        refineProps: ["notificationProvider={notificationProvider}"],
        import: [
            'import resetStyle from "@refinedev/antd/dist/reset.css";',
        ],
        refineAntdImports: ["notificationProvider"],
        styleImport: ['{ rel: "stylesheet", href: resetStyle }'],
        wrapper: [
            [`<ColorModeContextProvider>`, `</ColorModeContextProvider>`]
        ],
        localImport: [
            `import { ColorModeContextProvider } from "@contexts";`,
        ],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
