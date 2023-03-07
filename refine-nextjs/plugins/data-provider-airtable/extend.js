const base = {
    _app: {
        import: [`import dataProvider from "@refinedev/airtable";`],
        afterImport: [
            `const API_TOKEN = "keyI18pnBeEMfPAIb";`,
            `const BASE_ID = "appKYl1H4k9g73sBT";`,
            "",
        ],
        refineProps: ["dataProvider={dataProvider(API_TOKEN, BASE_ID)}"],
    },
};
module.exports = {
    extend() {
        return base;
    },
};
