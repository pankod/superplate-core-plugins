const base = {
    _app: {
        refineImports: [`AuthBindings`],
        import: [`import axios, { AxiosRequestConfig } from "axios";`],
        localImport: [
            `import { Login } from "pages/login";`,
            `import { CredentialResponse } from "interfaces/google";`,
            `import { parseJwt } from "utils/parse-jwt";`,
        ],
        afterImport: [
            "const axiosInstance = axios.create();",
            "axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {",
            'const token = localStorage.getItem("token");',
            "if (request.headers) {",
            '    request.headers["Authorization"] = `Bearer ${token}`;',
            "} else {",
            "    request.headers = {",
            "        Authorization: `Bearer ${token}`,",
            "    };",
            "}",
            "",
            "return request;",
            "});",
        ],
        inner: [
            `
            const authProvider: AuthBindings = {
                login: async ({ credential }: CredentialResponse) => {
                    const profileObj = credential ? parseJwt(credential) : null;

                    if (profileObj) {
                        localStorage.setItem(
                            "user",
                            JSON.stringify({
                                ...profileObj,
                                avatar: profileObj.picture,
                            }),
                        );
                        `,
            'localStorage.setItem("token", `${ credential }`);',
            `
                        return {
                            success: true,
                            redirectTo: "/",
                        };
                    }

                    return {
                        success: false,
                    };
                },
                logout: async () => {
                    const token = localStorage.getItem("token");

                    if (token && typeof window !== "undefined") {
                        localStorage.removeItem("token");
                        localStorage.removeItem("user");
                        axios.defaults.headers.common = {};
                        window.google?.accounts.id.revoke(token, () => {
                            return {};
                        });
                    }

                    return {
                        success: true,
                        redirectTo: "/login",
                    };
                },
                onError: async (error) => {
                    console.error(error);
                    return { error };
                },
                check: async () => {
                    const token = localStorage.getItem("token");

                    if (token) {
                        return {
                            authenticated: true,
                        };
                    }

                    return {
                        authenticated: false,
                        error: new Error("Not authenticated"),
                        logout: true,
                        redirectTo: "/login",
                    };
                },
                getPermissions: async () => null,
                getIdentity: async () => {
                    const user = localStorage.getItem("user");
                    if (user) {
                        return JSON.parse(user);
                    }

                    return null;
                },
            };
            `,
        ],
        refineProps: ["authProvider={authProvider}"],
        publicScripts: [
            `<script src="https://accounts.google.com/gsi/client" async defer ></script>`,
        ],
    },
};
module.exports = {
    extend() {
        return base;
    },
};
