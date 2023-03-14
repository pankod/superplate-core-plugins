const base = {
    _app: {
        import: ['import dataProvider from "@refinedev/nestjsx-crud";'],
        afterImport: [`const API_URL = "https://api.nestjsx-crud.refine.dev";`],
        refineProps: ["dataProvider={dataProvider(API_URL)}"],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
