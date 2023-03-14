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
        routes: [],
    },
};
module.exports = {
    extend() {
        // clear routes
        base._app.routes = [];


        return base;
    },
};
