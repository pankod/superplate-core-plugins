const base = {
    _app: {
        import: [
            `import dataProvider, { GraphQLClient, liveProvider } from "@refinedev/nestjs-query";`,
            `import { createClient } from "graphql-ws";`,
        ],
        afterImport: [
            "",
            `const API_URL = "https://api.nestjs-query.refine.dev/graphql";`,
            `const WS_URL = "wss://api.nestjs-query.refine.dev/graphql";`,
            "",
            `const gqlClient = new GraphQLClient(API_URL);`,
            "",
        ],
        refineProps: [
            `dataProvider={dataProvider(gqlClient)}`,
            `liveProvider={typeof window !== "undefined" ? liveProvider(createClient({ url: WS_URL })) : undefined}`,
        ],
        refineOptions: [`liveMode: "auto",`],
    },
};
module.exports = {
    extend() {
        return base;
    },
};
