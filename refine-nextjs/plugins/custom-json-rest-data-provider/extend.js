const base = {
    _app: {
        import: [
            `import simpleRestDataProvider from "@pankod/refine-simple-rest";`,
            "",
            `const API_URL = "https://api.fake-rest.refine.dev";`,
        ],
        inner: [
            `const dataProvider = simpleRestDataProvider(API_URL);`,
        ],
        refineProps: ["dataProvider={dataProvider}"],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
