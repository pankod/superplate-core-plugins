const base = {
    _app: {
        import: [
            `import dataProvider, { GraphQLClient, graphqlWS, liveProvider } from "@refinedev/hasura";`,
        ],
        afterImport: [
            "",
            `const API_URL = "https://flowing-mammal-24.hasura.app/v1/graphql";`,
            `const WS_URL = "ws://flowing-mammal-24.hasura.app/v1/graphql";`,
            "",
            `const client = new GraphQLClient(API_URL, {
                headers: {
                    "x-hasura-role": "public",
                },
            });`,
            "",
            `const webSocketClient = graphqlWS.createClient({
                url: WS_URL,
            });`,
        ],
        refineProps: [
            `dataProvider={dataProvider(client)}`,
            `liveProvider={liveProvider(webSocketClient)}`,
        ],
        refineOptions: [`liveMode: "auto",`],
    },
};
module.exports = {
    extend() {
        return base;
    },
};
