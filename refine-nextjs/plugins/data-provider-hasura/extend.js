const base = {
    _app: {
        import: [`import { dataProvider } from "@providers/data-provider";`],
        afterImport: [],
        refineProps: ["dataProvider={dataProvider}"],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
