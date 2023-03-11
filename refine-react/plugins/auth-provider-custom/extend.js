const base = {
    _app: {
        relativeImport: ['import { authProvider } from "./authProvider";'],
        refineProps: ["authProvider={authProvider}"],
        refineImports: [`Authenticated`],
        refineAntdImports: [],
        refineMantineImports: [],
        refineMuiImports: [],
        refineChakraImports: [],
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
