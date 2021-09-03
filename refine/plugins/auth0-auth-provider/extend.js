const base = {
    _app: {
        refineImports: [`AuthProvider`],
        import: [
            `import axios from "axios";`,
            `import { useAuth0 } from "@auth0/auth0-react";`,
            "",
            `import { Login } from "pages/login";`,
        ],
        innerHooks: [
            `const { getIdTokenClaims, isLoading, loginWithRedirect, isAuthenticated, user, logout } = useAuth0();`,
        ],
        inner: [
            `
            const authProvider: AuthProvider = {
                login: () => {
                    loginWithRedirect();
                    return Promise.resolve();
                },
                logout: () => {
                    logout({ returnTo: window.location.origin });
                    return Promise.resolve("/");
                },
                checkError: () => Promise.resolve(),
                checkAuth: () => {
                    if (isAuthenticated) {
                        return Promise.resolve();
                    }
        
                    return Promise.reject();
                },
                getPermissions: () => Promise.resolve(),
                getUserIdentity: async () => {
                    if (user) {
                        return Promise.resolve({
                            ...user,
                            avatar: user.picture,
                        });
                    }
                    return Promise.reject();
                },
            };`,
            `
            getIdTokenClaims().then((token) => {
                if (token) {
                    axios.defaults.headers.common = {`,
            "Authorization: `Bearer ${token.__raw}`",
            `};}});`,
            `
            if (isLoading) {
                return <span>Loading...</span>;
            }
            `,
        ],
        refineProps: ["authProvider={authProvider}", "LoginPage={Login}"],
    },
};
module.exports = {
    extend() {
        return base;
    },
};
