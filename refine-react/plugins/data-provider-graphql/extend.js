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
    extend(answers) {
        if (answers["ui-framework"] === "antd") {
            base._app.refineAntdImports.push("WelcomePage");
        }

        if (answers["ui-framework"] === "mui") {
            base._app.refineMuiImports.push("WelcomePage");
        }

        if (answers["ui-framework"] === "mantine") {
            base._app.refineMantineImports.push("WelcomePage");
        }

        if (answers["ui-framework"] === "chakra") {
            base._app.refineChakraImports.push("WelcomePage");
        }

        if (answers["ui-framework"] === "no") {
            base._app.refineImports.push("WelcomePage");
        }

        return base;
    },
};
