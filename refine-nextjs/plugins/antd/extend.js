const base = {
    _app: {
        refineProps: ["notificationProvider={notificationProvider}"],
        import: ['import "@pankod/refine-antd/dist/reset.css";'],
        refineAntdImports: ["notificationProvider", "Layout"],
        wrapper: [
            [`<ColorModeContextProvider>`, `</ColorModeContextProvider>`]
        ],
        localImport: [
            `import { Header } from "@components/header"`,
            `import { ColorModeContextProvider } from "@contexts";`,
        ],
    },
};

module.exports = {
    extend(answers) {
        return base;
    },
};
