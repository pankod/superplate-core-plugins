const base = {
    _app: {
        refineProps: ["notificationProvider={useNotificationProvider}"],
        import: [
            `import { App as AntdApp } from "antd"`,
            'import "@refinedev/antd/dist/reset.css";',
        ],
        refineAntdImports: [
            "useNotificationProvider",
            "ThemedLayoutV2",
            "ThemedSiderV2",
        ],
        wrapper: [
            [`<ColorModeContextProvider>`, `</ColorModeContextProvider>`],
            [`<AntdApp>`, `</AntdApp>`],
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
