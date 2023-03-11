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
        routes: [
            `<Route
                element={
                    <Authenticated
                        fallback={<CatchAllNavigate to="/login" />}
                    >
                        <Layout Header={Header}>
                            <Outlet />
                        </Layout>
                    </Authenticated>
                }
            >
                <Route index element={<NavigateToResource resource="products" />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/create" element={<ProductCreate />} />
                <Route path="/products/edit/:id" element={<ProductEdit />} />
                <Route path="/products/show/:id" element={<ProductShow />} />
                <Route path="/categories" element={<CategoryList />} />
                <Route path="/categories/create" element={<CategoryCreate />} />
                <Route path="/categories/edit/:id" element={<CategoryEdit />} />
                <Route path="/categories/show/:id" element={<CategoryShow />} />
            </Route>`,
            `<Route
                element={
                    <Authenticated fallback={<Outlet />}>
                        <NavigateToResource />
                    </Authenticated>
                }
            >
                <Route path="/login" element={<AuthPage type="login" />} />
            </Route>`,
            `<Route
                element={
                    <Authenticated>
                        <Layout Header={Header}>
                            <Outlet />
                        </Layout>
                    </Authenticated>
                }
            >
                <Route path="*" element={<ErrorComponent />} />
            </Route>`
        ],
    },
};
module.exports = {
    extend() {
        return base;
    },
};
