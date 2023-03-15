const base = {
    _app: {
        import: [
            `import dataProvider, { GraphQLClient } from "@refinedev/hasura";`,
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
        refineProps: [
            `dataProvider={gqlDataProvider}`,
        ],
    },
};
module.exports = {
    extend() {
        // clear routes
        base._app.routes = [];


        return base;
    },
};
