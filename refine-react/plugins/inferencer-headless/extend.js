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
        localImport: [
            `import { ProductList, ProductCreate, ProductEdit, ProductShow } from "pages/products";`,
            `import { CategoryList, CategoryCreate, CategoryEdit, CategoryShow } from "pages/categories";`
        ],
        refineAntdImports: [],
        wrapper: [
            [`<BrowserRouter>`, `</BrowserRouter>`],
        ],
    },
};

module.exports = {
    extend() {
        base._app.inferencer = {
            ui: "no",
            folder: "headless",
            componentPrefix: "Headless",
        };

        // if auth-provider is none
        if (answers["auth-provider"] === "none") {
            base._app.routes = [
                `<Route element={<Outlet />}>
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
                `<Route element={<Outlet />}>
                    <Route path="*" element={<div>Error</div>} />
                </Route>`
            ];
        }

        return base;
    },
};
