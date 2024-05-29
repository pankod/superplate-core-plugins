const base = {
    _app: {
        import: [],
        localImport: [
            'import { authProviderClient } from "@providers/auth-provider";',
            'import { dataProvider } from "@providers/data-provider";',
        ],
        refineProps: [
            "authProvider={authProviderClient}",
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
