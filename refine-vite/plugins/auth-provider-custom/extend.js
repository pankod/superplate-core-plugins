const base = {
    _app: {
        relativeImport: ['import { authProvider } from "./authProvider";'],
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
};

module.exports = {
    extend() {
        return base;
    },
};
