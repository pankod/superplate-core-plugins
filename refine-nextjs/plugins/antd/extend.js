const base = {
    _app: {
        refineProps: ["notificationProvider={notificationProvider}"],
        import: ['import "@refinedev/antd/dist/reset.css";'],
        refineAntdImports: ["notificationProvider", "ThemedLayout"],
        wrapper: [
            [`<ColorModeContextProvider>`, `</ColorModeContextProvider>`],
        ],
        localImport: [
            `import { Header } from "@components/header"`,
            `import { ColorModeContextProvider } from "@contexts";`,
        ],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
