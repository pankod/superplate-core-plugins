const base = {
    _app: {
        refineProps: ["notificationProvider={notificationProvider}"],
        import: [],
        refineMantineImports: [
            "NotificationsProvider",
            "notificationProvider",
            "MantineProvider",
            "Global",
        ],
        wrapper: [],
    },
};

module.exports = {
    extend(answers) {
        if (answers["mantine-custom-layout"] === "no") {
            base._app.refineMantineImports.push("Layout");
            base._app.refineProps.push("Layout={Layout}");
        }

        if (answers["mantine-dark-mode"] === "no") {
            base._app.refineMantineImports.push("LightTheme");
            base._app.wrapper.push([
                `<MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>`,
                "</MantineProvider>",
            ]);
            base._app.wrapper.push([
                `<Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />`,
            ]);
            base._app.wrapper.push([
                `<NotificationsProvider position="top-right">`,
                "</NotificationsProvider>",
            ]);
        }

        base._app.refineMantineImports.push("ReadyPage");
        base._app.refineMantineImports.push("ErrorComponent");
        base._app.refineProps.push("ReadyPage={ReadyPage}");
        base._app.refineProps.push("catchAll={<ErrorComponent />}");

        // ignore inferencer for graphql base data providers
        const ignoredDataProviders = [
            "data-provider-graphql",
            "data-provider-strapi-graphql",
            "data-provider-hasura",
            "data-provider-medusa",
        ];

        if (!ignoredDataProviders.includes(answers["data-provider"])) {
            base._app.import.push(
                `import { MantineInferencer } from "@pankod/refine-inferencer/mantine";`,
            );
            base._app.refineProps.push(
                `resources={[
                    {
                        name: "posts",
                        list: MantineInferencer,
                        edit: MantineInferencer,
                        show: MantineInferencer,
                        create: MantineInferencer,
                        canDelete: true,
                    },
                ]}`,
            );
        }
        return base;
    },
};
