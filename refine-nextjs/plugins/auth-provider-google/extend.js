const base = {
    _app: {
        localImport: [],
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
