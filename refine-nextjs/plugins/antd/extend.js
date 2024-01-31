const base = {
    _app: {
        refineProps: ["notificationProvider={useNotificationProvider}"],
        import: ['import "@refinedev/antd/dist/reset.css";'],
        refineAntdImports: [
            "useNotificationProvider",
            "ThemedLayoutV2",
            "ThemedSiderV2",
        ],
        wrapper: [
            [`<ColorModeContextProvider>`, `</ColorModeContextProvider>`],
        ],
        localImport: [
            `import { ColorModeContextProvider } from "@contexts/color-mode";`,
        ],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
