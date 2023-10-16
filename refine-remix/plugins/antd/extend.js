const base = {
    _app: {
        refineProps: ["notificationProvider={useNotificationProvider}"],
        import: [
            `import { App as AntdApp } from "antd"`,
            'import resetStyle from "@refinedev/antd/dist/reset.css";',
        ],
        refineAntdImports: ["useNotificationProvider"],
        styleImport: ['{ rel: "stylesheet", href: resetStyle }'],
        wrapper: [
            [`<ColorModeContextProvider>`, `</ColorModeContextProvider>`],
            [`<AntdApp>`, `</AntdApp>`],
        ],
        localImport: [`import { ColorModeContextProvider } from "@contexts";`],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
