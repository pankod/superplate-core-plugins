const base = {
    _app: {
        import: [
            `import dataProvider, { GraphQLClient } from "@refinedev/hasura";`,
        ],
        afterImport: [
            "",
            `const API_URL = "https://flowing-mammal-24.hasura.app/v1/graphql";`,
            "",
            `const client = new GraphQLClient(API_URL, {
                headers: {
                    "x-hasura-role": "public",
                },
            });`,
        ],
        refineProps: [`dataProvider={dataProvider(client)}`],
    },
};
module.exports = {
    extend() {
        return base;
    },
};
