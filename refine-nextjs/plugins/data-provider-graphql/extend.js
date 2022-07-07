const base = {
    _app: {
        import: [
            `import dataProvider, { GraphQLClient } from "@pankod/refine-graphql";`,
        ],
        afterImport: [
            `const API_URL = "https://your-graphql-url/graphql";`,
            "",
            `const client = new GraphQLClient(API_URL);`,
            `const gqlDataProvider = dataProvider(client);`,
            "",
        ],
        refineProps: ["dataProvider={gqlDataProvider}"],
    },
};
module.exports = {
    extend() {
        return base;
    },
};
