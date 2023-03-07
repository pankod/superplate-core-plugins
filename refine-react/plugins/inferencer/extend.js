const base = {
    _app: {
        import: [],
        refineProps: [
            `resources={[
                {
                    name: "products",
                    list: "/products",
                    create: "/products/create",
                    edit: "/products/edit/:id",
                    show: "/products/show/:id",
                },
                {
                    name: "categories",
                    list: "/categories",
                    create: "/categories/create",
                    edit: "/categories/edit/:id",
                    show: "/categories/show/:id",
                },
            ]}`
        ],
        refineAntdImports: [],
        wrapper: [],
        inferencer: {},
        localImport: [
            `import { ProductList, ProductCreate, ProductEdit, ProductShow } from "pages/products";`,
            `import { CategoryList, CategoryCreate, CategoryEdit, CategoryShow } from "pages/categories";`
        ],
        routes: [
            `<Routes>
                <Route index element={<NavigateToResource resource="products" />} />
                <Route
                    path="/products"
                    element={<ProductList />}
                />
                <Route
                    path="/products/create"
                    element={<ProductCreate />}
                />
                <Route
                    path="/products/edit/:id"
                    element={<ProductEdit />}
                />
                <Route
                    path="/products/show/:id"
                    element={<ProductShow />}
                />
                <Route
                    path="/categories"
                    element={<CategoryList />}
                />
                <Route
                    path="/categories/create"
                    element={<CategoryCreate />}
                />
                <Route
                    path="/categories/edit/:id"
                    element={<CategoryEdit />}
                />
                <Route
                    path="/categories/show/:id"
                    element={<CategoryShow />}
                />
            </Routes>`
        ],
        hasLayout: true,
    },
};

module.exports = {
    extend(answers) {
        const inferencerPackage = [
            {
                ui: "antd",
                folder: "antd",
                componentPrefix: "Antd",
            },
            {
                ui: "chakra",
                folder: "chakra-ui",
                componentPrefix: "ChakraUI",
            },
            {
                ui: "no",
                folder: "headless",
                componentPrefix: "Headless",
            },
            {
                ui: "mantine",
                folder: "mantine",
                componentPrefix: "Mantine",
            },
            {
                ui: "mui",
                folder: "mui",
                componentPrefix: "Mui",
            }
        ];

        base._app.inferencer = inferencerPackage.find(
            (item) => item.ui === answers["ui-framework"],
        );

        return base;
    },
};
