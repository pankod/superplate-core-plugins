const base = {
    _app: {
        import: [`import { App as AntdApp } from "antd"`],
        refineImports: [],
        refineAntdImports: [
            "useNotificationProvider",
            "ThemedLayout",
            "ThemedSider",
        ],
        refineProps: ["notificationProvider={useNotificationProvider}"],
        wrapper: [
            [`<ColorModeContextProvider>`, `</ColorModeContextProvider>`],
            [`<AntdApp>`, `</AntdApp>`],
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
