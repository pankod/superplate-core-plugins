const base = {
    _app: {
        import: [
            `import { dataProvider, liveProvider } from "@refinedev/supabase";`,
        ],
        localImport: [
            `import { supabaseClient } from "utility";`,
        ],
        relativeImport: [`import authProvider from "./authProvider";`],
        refineProps: [
            "dataProvider={dataProvider(supabaseClient)}",
            "liveProvider={liveProvider(supabaseClient)}",
            "authProvider={authProvider}",
            "routerProvider={routerBindings}"
        ],
        refineImports: [
            `Authenticated`
        ],
        refineAntdImports: [],
        refineMantineImports: [],
        refineMuiImports: [],
        refineChakraImports: [],
        wrapper: [],
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
                <Route path="/products">
                    <Route index element={<ProductList />} />
                    <Route path="/products/create" element={<ProductCreate />} />
                    <Route path="/products/edit/:id" element={<ProductEdit />} />
                    <Route path="/products/show/:id" element={<ProductShow />} />
                </Route>
                <Route path="/categories">
                    <Route index element={<CategoryList />} />
                    <Route path="/products/create" element={<CategoryCreate />} />
                    <Route path="/products/edit/:id" element={<CategoryEdit />} />
                    <Route path="/products/show/:id" element={<CategoryShow />} />
                </Route>
            </Route>`,
            `<Route
                element={
                    <Authenticated fallback={<Outlet />}>
                        <NavigateToResource />
                    </Authenticated>
                }
            >
                <Route
                    path="/login"
                    element={
                        <AuthPage
                            type="login"
                            providers={[
                                {
                                    name: "google",
                                    label: "Sign in with Google",
                                },
                            ]}
                            formProps={{
                                initialValues: {
                                    email: "info@refine.dev",
                                    password: "refine-supabase",
                                },
                            }}
                        />
                    }
                />
                <Route path="/register" element={<AuthPage type="register" />} />
                <Route path="/forgot-password" element={<AuthPage type="forgotPassword" />} />
                <Route path="/update-password" element={<AuthPage type="updatePassword" />} />
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
    extend(answers) {
        if (answers["ui-framework"] === "antd") {
            base._app.refineAntdImports.push("AuthPage");
        }

        if (answers["ui-framework"] === "mui") {
            base._app.refineMuiImports.push("AuthPage");
        }

        if (answers["ui-framework"] === "mantine") {
            base._app.refineMantineImports.push("AuthPage");
        }

        if (answers["ui-framework"] === "chakra") {
            base._app.refineChakraImports.push("AuthPage");
        }
        return base;
    },
};
