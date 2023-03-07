const base = {
    _app: {
        import: [
            `import dataProvider, { authProvider } from "@refinedev/medusa";`,
        ],
        afterImport: [
            `const API_URL = "https://your-medusa-url";`,
            "",
            `const medusaDataProvider = dataProvider(API_URL);`,
            `const medusaAuthProvider = authProvider(API_URL);`,
            "",
        ],
        refineProps: [
            "authProvider={medusaAuthProvider}",
            "dataProvider={medusaDataProvider}",
        ],
    },
};
module.exports = {
    extend() {
        return base;
    },
};
