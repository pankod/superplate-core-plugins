const base = {
    _app: {
        localImport: ['import { authProvider } from "~/authProvider";'],
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
