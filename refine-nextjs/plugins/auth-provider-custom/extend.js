const base = {
    _app: {
        localImport: [
            'import { authProvider } from "@providers/auth-provider";',
        ],
        refineProps: ["authProvider={authProvider}"],
        refineAntdImports: [],
        refineMuiImports: [],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
