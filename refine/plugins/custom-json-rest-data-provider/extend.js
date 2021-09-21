const base = {
    _app: {
        import: [
            `import simpleRestDataProvider from "@pankod/refine-simple-server";`,
        ],
        inner: [
            `
            const API_URL = "https://api.fake-rest.refine.dev";`,
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
