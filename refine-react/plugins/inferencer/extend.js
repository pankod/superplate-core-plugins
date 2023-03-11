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
                    canDelete: true,
                },
                {
                    name: "categories",
                    list: "/categories",
                    create: "/categories/create",
                    edit: "/categories/edit/:id",
                    show: "/categories/show/:id",
                    canDelete: true,
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
        routes: [],
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

        // if auth-provider is none
        if (answers["auth-provider"] === "none") {
            base._app.routes = [
                `<Route element={<Layout Header={Header}><Outlet /></Layout>}>
                    <Route index element={<NavigateToResource resource="posts" />} />
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
                `<Route element={<Layout Header={Header}><Outlet /></Layout>}>
                    <Route path="*" element={<ErrorComponent />} />
                </Route>`
            ];
        }

        return base;
    },
};
