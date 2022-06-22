const base = {
    _app: {
        import: [
            `import dataProvider from "@pankod/refine-simple-rest";`,
        ],
        refineProps: [`dataProvider={dataProvider("https://api.fake-rest.refine.dev")}`],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
