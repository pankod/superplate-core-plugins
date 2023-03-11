const base = {
    _app: {
        refineImports: [`LegacyAuthProvider`],
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

            const authProvider: LegacyAuthProvider = {
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
        refineProps: ["legacyAuthProvider={authProvider}", "LoginPage={Login}"],
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
