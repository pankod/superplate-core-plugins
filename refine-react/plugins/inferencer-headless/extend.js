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
        localImport: [
            `import { ProductList, ProductCreate, ProductEdit, ProductShow } from "pages/products";`,
            `import { CategoryList, CategoryCreate, CategoryEdit, CategoryShow } from "pages/categories";`
        ],
        refineAntdImports: [],
        wrapper: [
            [`<BrowserRouter>`, `</BrowserRouter>`],
        ],
        layoutWrapper: [],
        routes: [
            `<Routes>
                <Route path="/" element={<NavigateToResource resource="products" />} />
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
        ]
    },
};

module.exports = {
    extend() {
        base._app.inferencer = {
            ui: "no",
            folder: "headless",
            componentPrefix: "Headless",
        };

        return base;
    },
};
