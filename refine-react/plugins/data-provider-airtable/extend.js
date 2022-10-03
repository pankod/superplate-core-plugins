const base = {
    _app: {
        import: [`import dataProvider from "@pankod/refine-airtable";`],
        inner: [
            `const API_TOKEN = "your-airtable-api-token";`,
            `const BASE_ID = "your-airtable-base-id";`,
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
