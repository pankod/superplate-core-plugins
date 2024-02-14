const base = {
    _app: {
        localImport: [],
        refineContextProps: ["defaultMode={defaultMode}"],
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
