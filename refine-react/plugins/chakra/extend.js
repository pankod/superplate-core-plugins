const base = {
    _app: {
        refineProps: [
            "notificationProvider={notificationProvider()}",
            "ReadyPage={ReadyPage}",
            "catchAll={<ErrorComponent />}"
        ],
        import: [],
        refineChakraImports: [
            "notificationProvider",
            "ChakraProvider",
            "refineTheme",
            "ReadyPage",
            "ErrorComponent",

        ],
        wrapper: [
            [`<ChakraProvider theme={refineTheme}>`, "</ChakraProvider>"]
        ],
    },
};

module.exports = {
    extend(answers) {
        if (answers["chakra-custom-layout"] === "no") {
            base._app.refineChakraImports.push("Layout");
            base._app.refineProps.push("Layout={Layout}");
        }

        // ignore inferencer for graphql base data providers
        const ignoredDataProviders = ["data-provider-graphql", "data-provider-strapi-graphql", "data-provider-hasura"];

        if (!ignoredDataProviders.includes(answers["data-provider"])) {
            base._app.refineAntdImports.push(`import { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";`,);
            base._app.refineProps.push(
                `resources={[
                    {
                        name: "posts",
                        list: ChakraUIInferencer,
                        edit: ChakraUIInferencer,
                        show: ChakraUIInferencer,
                        create: ChakraUIInferencer,
                        canDelete: true,
                    },
                ]}`,
            );
        }

        return base;
    },
};
