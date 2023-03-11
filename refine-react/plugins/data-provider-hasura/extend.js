const base = {
    _app: {
        import: [
            `import dataProvider, { GraphQLClient } from "@refinedev/hasura";`,
        ],
        afterImport: [
            `const API_URL = "https://your-hasura-url/graphql";`,
            "",
            `const client = new GraphQLClient(API_URL, {
                headers: {
                    "x-hasura-role": "public",
                },
            });`,
            "",
            `const gqlDataProvider = dataProvider(client);`,
            "",
        ],
        refineProps: [
            `dataProvider={gqlDataProvider}`,
            `resources={[
                {
                    name: "products",
                    list: "/products",
                    create: "/products/create",
                    edit: "/products/edit/:id",
                    show: "/products/show/:id",
                    canDelete: true,
                },
            ]}`
        ],
        localImport: [
            `import { ProductList, ProductCreate, ProductEdit, ProductShow } from "pages/products";`,
        ],
        routes: [
            `<Route element={<Layout Header={Header}><Outlet /></Layout>}>
                    <Route index element={<NavigateToResource resource="posts" />} />
                    <Route path="/products">
                        <Route index element={<ProductList />} />
                        <Route path="/products/create" element={<ProductCreate />} />
                        <Route path="/products/edit/:id" element={<ProductEdit />} />
                        <Route path="/products/show/:id" element={<ProductShow />} />
                    </Route>
                </Route>`,
            `<Route element={<Layout Header={Header}><Outlet /></Layout>}>
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
