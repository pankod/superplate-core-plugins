function getRoutes(withAuth, answers) {
    if (withAuth === true) {
        return `<Route
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
            <Route path="create" element={<ProductCreate />} />
            <Route path="edit/:id" element={<ProductEdit />} />
            <Route path="show/:id" element={<ProductShow />} />
        </Route>
        <Route path="/categories">
            <Route index element={<CategoryList />} />
            <Route path="create" element={<CategoryCreate />} />
            <Route path="edit/:id" element={<CategoryEdit />} />
            <Route path="show/:id" element={<CategoryShow />} />
        </Route>
    </Route>
    <Route
        element={
            <Authenticated fallback={<Outlet />}>
                <NavigateToResource />
            </Authenticated>
        }
    >
        <Route path="/login" element={<AuthPage type="login" formProps={{`+
            formProps(answers)

            + `}}
        
        />} />
    </Route>
    <Route
        element={
            <Authenticated>
                <Layout Header={Header}>
                    <Outlet />
                </Layout>
            </Authenticated>
        }
    >
        <Route path="*" element={<ErrorComponent />} />
    </Route>`;

    }

    return `<Route element={<Layout Header={Header}><Outlet /></Layout>}>
        <Route index element={<NavigateToResource resource="products" />} />
        <Route path="/products">
            <Route index element={<ProductList />} />
            <Route path="create" element={<ProductCreate />} />
            <Route path="edit/:id" element={<ProductEdit />} />
            <Route path="show/:id" element={<ProductShow />} />
        </Route>
        <Route path="/categories">
            <Route index element={<CategoryList />} />
            <Route path="create" element={<CategoryCreate />} />
            <Route path="edit/:id" element={<CategoryEdit />} />
            <Route path="show/:id" element={<CategoryShow />} />
        </Route>
    </Route>
    <Route element={<Layout Header={Header}><Outlet /></Layout>}>
        <Route path="*" element={<ErrorComponent />} />
    </Route>`;
}


function formProps(answers) {
    if (answers["ui-framework"] === 'antd' || answers["ui-framework"] === 'mantine') {
        if (answers["data-provider"] === 'data-provider-supabase') {
            return `initialValues:{ email: "info@refine.dev", password: "refine-supabase" }`
        } else {
            return `initialValues:{ email: "demo@refine.dev", password: "demodemo" }`
        }
    } else if (answers["ui-framework"] === 'mui' || answers["ui-framework"] === 'chakra') {
        if (answers["data-provider"] === 'data-provider-supabase') {
            return `defaultValues:{ email: "info@refine.dev", password: "refine-supabase" }`
        } else {
            return `defaultValues:{ email: "demo@refine.dev", password: "demodemo" }`
        }
    }
}


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

        if (
            answers["data-provider"] === "data-provider-appwrite" ||
            answers["data-provider"] === "data-provider-supabase" ||
            answers["data-provider"] === "data-provider-strapi-v4"
        ) {
            const routes = getRoutes(true, answers);
            base._app.routes = [routes];
        } else if (answers["auth-provider"] === "none") {
            const routes = getRoutes(false, answers);
            base._app.routes = [routes];
        } else {
            const routes = getRoutes(false, answers);
            base._app.routes = [routes];
        }

        return base;
    },
};
