const base = {
    _app: {
        localImport: [
            'import { authProviderClient } from "@providers/auth-provider/auth-provider.client";',
        ],
        refineProps: ["authProvider={authProviderClient}"],
        refineAntdImports: [],
        refineMuiImports: [],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
