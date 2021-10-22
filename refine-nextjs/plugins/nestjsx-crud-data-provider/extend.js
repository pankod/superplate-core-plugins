const base = {
    _app: {
        import: [
            'import nestjsxCrudDataProvider from "@pankod/refine-nestjsx-crud";',
            "",
            `const API_URL = "https://api.nestjsx-crud.refine.dev";`,
        ],
        inner: [
            `const dataProvider = nestjsxCrudDataProvider(API_URL);`,
        ],
        refineProps: ["dataProvider={dataProvider}"],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
