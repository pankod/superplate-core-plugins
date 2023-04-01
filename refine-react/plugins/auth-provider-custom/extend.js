const base = {
    _app: {
        relativeImport: ['import { authProvider } from "./authProvider";'],
        refineProps: ["authProvider={authProvider}"],
        refineImports: [`Authenticated`],
        refineAntdImports: [],
        refineMantineImports: [],
        refineMuiImports: [],
        refineChakraImports: [],
        localImport: [`import { Login } from "pages/login";`],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
