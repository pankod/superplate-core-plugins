const base = {
    _app: {
        import: [
            `import jsonServerDataProvider from "@pankod/refine-json-server";`,
        ],
        inner: [
            "",
            `const API_URL = "https://api.fake-rest.refine.dev";`,
            `const dataProvider = jsonServerDataProvider(API_URL);`,
        ],
        refineProps: ["dataProvider={dataProvider}"],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
