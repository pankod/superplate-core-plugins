const base = {
    _app: {
        refineImports: [`LegacyAuthProvider`],
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
            const authProvider: LegacyAuthProvider = {
                login: ({ credential }: CredentialResponse) => {
                    const profileObj = credential ? parseJwt(credential) : null;
        
                    if (profileObj) {
                        localStorage.setItem(
                            "user",
                            JSON.stringify({
                                ...profileObj,
                                avatar: profileObj.picture,
                            }),
                        );
                    }
            `,
            'localStorage.setItem("token", `${credential}`);',
            `
                    return Promise.resolve();
                },
                logout: () => {
                    const token = localStorage.getItem("token");
        
                    if (token && typeof window !== "undefined") {
                        localStorage.removeItem("token");
                        localStorage.removeItem("user");
                        axios.defaults.headers.common = {};
                        window.google?.accounts.id.revoke(token, () => {
                            return Promise.resolve();
                        });
                    }
        
                    return Promise.resolve();
                },
                checkError: () => Promise.resolve(),
                checkAuth: async () => {
                    const token = localStorage.getItem("token");
        
                    if (token) {
                        return Promise.resolve();
                    }
                    return Promise.reject();
                },
        
                getPermissions: () => Promise.resolve(),
                getUserIdentity: async () => {
                    const user = localStorage.getItem("user");
                    if (user) {
                        return Promise.resolve(JSON.parse(user));
                    }
                },
            };
        
            `,
        ],
        refineProps: ["legacyAuthProvider={authProvider}"],
        publicScripts: [
            `<script src="https://accounts.google.com/gsi/client" async defer ></script>`,
        ],
        layoutWrapper: [
            [`<Authenticated fallback={
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            }>`, `</Authenticated>`],
        ],
    },
};
module.exports = {
    extend() {
        return base;
    },
};
