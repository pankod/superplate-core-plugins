const base = {
    _app: {
        refineProps: ["notificationProvider={useNotificationProvider}"],
        import: [
            `import { AntdRegistry } from "@ant-design/nextjs-registry";`,
            'import "@refinedev/antd/dist/reset.css";',
        ],
        refineAntdImports: ["useNotificationProvider"],
        wrapper: [
            [`<AntdRegistry>`, `</AntdRegistry>`],
            [
                `<ColorModeContextProvider defaultMode={defaultMode}>`,
                `</ColorModeContextProvider>`,
            ],
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
