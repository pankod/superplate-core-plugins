const base = {
    _app: {
        import: ['import dataProvider from "@pankod/refine-nestjsx-crud";'],
        inner: [
            "",
            `const API_URL = "https://api.nestjsx-crud.refine.dev";`,
            `const dataProvider = dataProvider(API_URL);`,
            "",
        ],
        refineProps: ["dataProvider={dataProvider}"],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
