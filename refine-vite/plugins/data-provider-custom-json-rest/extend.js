const base = {
    _app: {
        import: [
            `import dataProvider from "@refinedev/simple-rest";`,
        ],
        refineProps: [`dataProvider={dataProvider("https://api.fake-rest.refine.dev")}`],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
