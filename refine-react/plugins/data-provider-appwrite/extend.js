const base = {
    _app: {
        import: [
            `import { dataProvider, liveProvider } from "@refinedev/appwrite";`,
        ],
        localImport: [`import { appwriteClient } from "utility";`],
        relativeImport: [`import { authProvider } from "./authProvider";`],
        refineProps: [
            `dataProvider={dataProvider(appwriteClient, {
                databaseId: "default",
            })}`,
            `liveProvider={liveProvider(appwriteClient, {
                databaseId: "default",
            })}`,
            `liveMode="auto"`,
            `authProvider={authProvider}`,
        ],
        refineImports: [
            `Authenticated`
        ],
        refineAntdImports: [],
        refineMantineImports: [],
        refineMuiImports: [],
        routes: [
            `<Route
                element={
                    <Authenticated
                        fallback={<CatchAllNavigate to="/login" />}
                    >
                        <Layout>
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
                    <Authenticated fallback={<Outlet />}>
                        <Layout>
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
        return base;
    },
};
