const base = {
    _app: {
        relativeImport: ['import { authProvider } from "./providers/auth";'],
        refineProps: ["authProvider={authProvider}"],
        refineImports: [`Authenticated`],
        refineAntdImports: [],
        refineMuiImports: [],
        localImport: [
            `import { Login } from "./pages/login";`,
            `import { Register } from "./pages/register";`,
            `import { ForgotPassword } from "./pages/forgotPassword";`,
        ],
    },
    _constants: {
        export: ['export const TOKEN_KEY = "refine-auth";'],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
