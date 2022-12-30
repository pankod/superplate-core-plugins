const base = {
    _app: {
        refineImports: [`AuthProvider`],
        import: [
            `import axios from "axios";`,
            `import { useAuth0 } from "@auth0/auth0-react";`,
        ],
        localImport: [`import { Login } from "pages/login";`],
        innerHooks: [
            `const { isLoading, user, logout, getIdTokenClaims } = useAuth0();`,
        ],
        inner: [
            `
            if (isLoading) {
                return <span>loading...</span>
            }

            const authProvider: AuthProvider = {
                login: () => {
                    return Promise.resolve(false);
                },
                logout: () => {
                    logout({ returnTo: window.location.origin });
                    return Promise.resolve("/");
                },
                checkError: () => Promise.resolve(),
                checkAuth: async () => {
                    try {
                        const token = await getIdTokenClaims();
                        if (token) {
                            axios.defaults.headers.common = {`,
            "Authorization: `Bearer ${token.__raw}`",
            `};
                            return Promise.resolve();
                        } else {
                            return Promise.reject();
                        }
                    } catch (error) {
                        return Promise.reject();
                    }
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
            };
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
