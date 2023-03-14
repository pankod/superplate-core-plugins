const base = {
    _app: {
        refineImports: [`Authenticated`, `AuthBindings`],
        import: [
            `import axios from "axios";`,
            `import { useAuth0 } from "@auth0/auth0-react";`,
        ],
        localImport: [
            `import { Login } from "pages/login";`,
            `import { authProvider } from "./auth-provider";`,
        ],
        innerHooks: [
            `const { isLoading, user, logout, getIdTokenClaims } = useAuth0();`
        ],
        inner: [
            `
            if (isLoading) {
                return <span>loading...</span>
            }`,
            `
            const authProvider: AuthBindings = {
                login: async () => {
                    return {
                        success: true,
                    };
                },
                logout: async () => {
                    logout({ returnTo: window.location.origin });
                    return {
                        success: true,
                    };
                },
                onError: async (error) => {
                    console.error(error);
                    return { error };
                },
                check: async () => {
                    try {
                        const token = await getIdTokenClaims();
                        if (token) {
                            axios.defaults.headers.common = {`,
            "Authorization: `Bearer ${token.__raw}`",
            `
                            };
                            return {
                                authenticated: true,
                            };
                        } else {
                            return {
                                authenticated: false,
                                error: new Error("Token not found"),
                                redirectTo: "/login",
                                logout: true,
                            };
                        }
                    } catch (error: any) {
                        return {
                            authenticated: false,
                            error: new Error(error),
                            redirectTo: "/login",
                            logout: true,
                        };
                    }
                },
                getPermissions: async () => null,
                getIdentity: async () => {
                    if (user) {
                        return {
                            ...user,
                            avatar: user.picture,
                        };
                    }
                    return null;
                },
            };
            `
        ],
        refineProps: ["authProvider={authProvider}"],
        routes: [],
    },
};

module.exports = {
    extend(answers) {
        console.log("answers auth0", answers)
        return base;
    },
};
