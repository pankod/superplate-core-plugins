const base = {
    _app: {
        localImport: ['import { authProvider } from "src/authProvider";'],
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
