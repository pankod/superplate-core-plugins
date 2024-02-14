const base = {
    _app: {
        import: [],
        localImport: [
            'import { dataProvider, liveProvider } from "@providers/data-provider";',
        ],
        refineProps: [
            `dataProvider={dataProvider}`,
            `liveProvider={liveProvider}`,
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
