const base = {
    _app: {
        import: [
            `import { gqlDataProvider } from "src/gqDataProvider";`,
            `import { authProvider } from "src/authProvider";`,
        ],
        refineProps: [
            "dataProvider={gqlDataProvider}",
            "authProvider={authProvider}",
        ],
    },
};
module.exports = {
    extend() {
        return base;
    },
};
