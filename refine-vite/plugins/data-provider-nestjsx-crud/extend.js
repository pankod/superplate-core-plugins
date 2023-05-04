const base = {
    _app: {
        import: [
            'import nestjsxCrudDataProvider from "@refinedev/nestjsx-crud";',
        ],
        inner: [
            `
            const API_URL = "https://api.nestjsx-crud.refine.dev";`,
            `const dataProvider = nestjsxCrudDataProvider(API_URL);
            `,
        ],
        refineProps: ["dataProvider={dataProvider}"],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
