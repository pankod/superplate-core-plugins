const base = {
    _app: {
        import: [],
        localImport: [
            'import { authProvider } from "@providers/auth-provider";',
            'import { dataProvider, liveProvider } from "@providers/data-provider";',
        ],
        refineProps: [
            `dataProvider={dataProvider}`,
            `liveProvider={liveProvider}`,
            `authProvider={authProvider}`,
        ],
        refineOptions: [`liveMode: "auto",`],
        refineAntdImports: [],
        refineMuiImports: [],
    },
};
module.exports = {
    extend() {
        return base;
    },
};
