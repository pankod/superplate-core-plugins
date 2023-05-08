const base = {
    _app: {
        refineProps: ["notificationProvider={notificationProvider}"],
        import: ['import "@refinedev/antd/dist/reset.css";'],
        refineAntdImports: [
            "notificationProvider",
            "ThemedLayoutV2",
            "ThemedSiderV2",
        ],
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
