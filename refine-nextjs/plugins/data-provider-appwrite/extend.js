const base = {
    _app: {
        import: [],
        localImport: [
            'import { authProviderClient } from "@providers/auth-provider/auth-provider.client";',
            'import { appwriteDataProvider, appwriteLiveProvider } from "@providers/data-provider";',
        ],
        refineProps: [
            "dataProvider={appwriteDataProvider}",
            "liveProvider={appwriteLiveProvider}",
            "authProvider={authProviderClient}",
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
