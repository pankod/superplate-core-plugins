function getAuth(answers) {

    if (answers["auth-provider"] === 'auth-provider-auth0') {
        return `<Route path="/login" element={<Login />} />`
    }
    return `<Route path="/login" element={<AuthPage type="login" ` + formProps(answers) + `/>} />`

}

function getRoutes(withAuth, answers) {
    if (withAuth === true) {
        return `<Route
        element={
            <Authenticated
                fallback={<CatchAllNavigate to="/login" />}
            >
                <Outlet />
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
    `+ getAuth(answers) + `
    </Route>
    <Route
        element={
            <Authenticated>
                <Outlet />
            </Authenticated>
        }
    >
        <Route path="*" element={<ErrorComponent />} />
    </Route>`;

    }

    return `
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
    <Route path="*" element={<ErrorComponent />} />
    `;
}


function formProps(answers) {
    if (answers["ui-framework"] === 'antd' || answers["ui-framework"] === 'mantine') {
        if (answers["data-provider"] === 'data-provider-supabase') {
            return `formProps={{ initialValues:{ email: "info@refine.dev", password: "refine-supabase" } }}`
        } else {
            return `formProps={{ initialValues:{ email: "demo@refine.dev", password: "demodemo" } }}`
        }
    } else if (answers["ui-framework"] === 'mui' || answers["ui-framework"] === 'chakra') {
        if (answers["data-provider"] === 'data-provider-supabase') {
            return `formProps={{ defaultValues:{ email: "info@refine.dev", password: "refine-supabase" } }}`
        } else {
            return `formProps={{ defaultValues:{ email: "demo@refine.dev", password: "demodemo" } }}`
        }
    } else {
        return ``;
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
        refineImports: [`AuthPage`, `Authenticated`, `ErrorComponent`],
        wrapper: [],
        inferencer: {},
        localImport: [
            `import { ProductList, ProductCreate, ProductEdit, ProductShow } from "pages/products";`,
            `import { CategoryList, CategoryCreate, CategoryEdit, CategoryShow } from "pages/categories";`
        ],
        routes: [],
        inferencer: {}
    },
};

module.exports = {
    extend(answers) {
        base._app.inferencer = {
            ui: "no",
            folder: "headless",
            componentPrefix: "Headless",
        };

        if (
            answers["data-provider"] === "data-provider-appwrite" ||
            answers["data-provider"] === "data-provider-supabase" ||
            answers["auth-provider"] === "auth-provider-auth0" ||
            answers["data-provider"] === "data-provider-strapi-v4"
        ) {
            const routes = getRoutes(true, answers);
            base._app.routes = [routes];
        } else if (answers["auth-provider"] === "none") {
            const routes = getRoutes(false, answers);
            base._app.routes = [routes];
        } else {
            const routes = getRoutes(true, answers);
            base._app.routes = [routes];
        }

        return base;
    },
};
