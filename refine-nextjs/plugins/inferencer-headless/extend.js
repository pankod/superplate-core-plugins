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
        localImport: [
            `import { Layout } from "@components/layout";`,
            `import { Header } from "@components/header";`,
        ],
        inferencer: {},
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
