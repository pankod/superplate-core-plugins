const base = {
    _app: {
        localImport: ['import { authProvider } from "~/authProvider";'],
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
