const base = {
    _app: {
        import: [
            `import dataProvider from "@pankod/refine-hasura";`,
            `import { GraphQLClient } from "graphql-request";`,
        ],
        afterImport: [
            `const API_URL = "https://your-hasura-url/graphql";`,
            "",
            `const client = new GraphQLClient(API_URL, {
                headers: {
                    "x-hasura-role": "public",
                },
            });`,
            "",
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
