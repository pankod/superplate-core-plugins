const base = {
    _app: {
        localImport: ['import { authProvider } from "src/authProvider";'],
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
