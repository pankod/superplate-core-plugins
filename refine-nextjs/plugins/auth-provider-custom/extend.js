const base = {
    _app: {
        localImport: [],
        refineProps: ["authProvider={authProvider}"],
        refineAntdImports: [],
        refineMantineImports: [],
        refineMuiImports: [],
        refineChakraImports: [],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
