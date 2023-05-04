const base = {
    _app: {
        import: [
            `import dataProvider, { GraphQLClient } from "@refinedev/graphql";`,
        ],
        afterImport: [
            `const API_URL = "https://your-graphql-url/graphql";`,
            "",
            `const client = new GraphQLClient(API_URL);`,
            `const gqlDataProvider = dataProvider(client);`,
            "",
        ],
        refineProps: ["dataProvider={gqlDataProvider}"],
        refineImports: [],
        refineAntdImports: [],
        refineMuiImports: [],
        refineMantineImports: [],
        refineChakraImports: [],
    },
};
module.exports = {
    extend() {
        return base;
    },
};
