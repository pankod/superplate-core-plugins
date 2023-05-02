const base = {
    _app: {
        refineImports: [`Authenticated`, `AuthBindings`],
        import: [
            `import axios from "axios";`,
            `import { useKeycloak } from "@react-keycloak/web";`,
        ],
        localImport: [`import { Login } from "./pages/login";`],
        innerHooks: [`const { keycloak, initialized } = useKeycloak();`],
        inner: [
            `
            if (!initialized) {
                return <div>Loading...</div>;
            }
            `,
            `
            const authProvider: AuthBindings = {
                login: async () => {
                    const urlSearchParams = new URLSearchParams(window.location.search);
                    const { to } = Object.fromEntries(urlSearchParams.entries());
                    await keycloak.login({`,
            "redirectUri: to ? `${ window.location.origin }${ to }` : undefined",
            `});
                    return {
                        success: true,
                    };
                },
                logout: async () => {
                    try {
                        await keycloak.logout({
                            redirectUri: window.location.origin,
                        });
                        return {
                            success: true,
                            redirectTo: "/login",
                        };
                    } catch (error) {
                        return {
                            success: false,
                            error: new Error("Logout failed"),
                        };
                    }
                },
                onError: async (error) => {
                    console.error(error);
                    return { error };
                },
                check: async () => {
                    try {
                        const { token } = keycloak;
                        if (token) {
                            axios.defaults.headers.common = {`,
            "Authorization: `Bearer ${ token }`",
            `};
                            return {
                                authenticated: true,
                            };
                        } else {
                            return {
                                authenticated: false,
                                logout: true,
                                redirectTo: "/login",
                                error: {
                                    message: "Check failed",
                                    name: "Token not found",
                                },
                            };
                        }
                    } catch (error) {
                        return {
                            authenticated: false,
                            logout: true,
                            redirectTo: "/login",
                            error: {
                                message: "Check failed",
                                name: "Token not found",
                            },
                        };
                    }
                },
                getPermissions: async () => null,
                getIdentity: async () => {
                    if (keycloak?.tokenParsed) {
                        return {
                            name: keycloak.tokenParsed.family_name,
                        };
                    }
                    return null;
                },
            };
            `,
        ],
        refineProps: ["authProvider={authProvider}"],
        mainWrapper: [
            [
                `<ReactKeycloakProvider authClient={keycloak}>`,
                `</ReactKeycloakProvider>`,
            ],
        ],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
