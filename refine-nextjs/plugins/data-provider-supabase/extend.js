const base = {
    _app: {
        import: [],
        localImport: [
            'import { authProvider } from "@providers/auth-provider";',
            'import { dataProvider } from "@providers/data-provider";',
        ],
        refineProps: [
            "authProvider={authProvider}",
            "dataProvider={dataProvider}",
        ],
        refineAntdImports: [],
        refineMuiImports: [],
    },
};
module.exports = {
    extend() {
        return base;
    },
};
