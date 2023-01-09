const base = {
    _app: {
        refineProps: ["notificationProvider={notificationProvider}"],
        import: ['import "@pankod/refine-antd/dist/reset.css";'],
        refineAntdImports: ["notificationProvider"],
    },
};

module.exports = {
    extend(answers) {
        if (answers["antd-custom-layout"] === "no") {
            base._app.refineAntdImports.push("Layout");
            base._app.refineProps.push("Layout={Layout}");
        }

        base._app.refineAntdImports.push("ReadyPage");
        base._app.refineAntdImports.push("ErrorComponent");
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
                `import { AntdInferencer } from "@pankod/refine-inferencer/antd"`,
            );
            base._app.refineProps.push(
                `resources={[
                    {
                        name: "posts",
                        list: AntdInferencer,
                        edit: AntdInferencer,
                        show: AntdInferencer,
                        create: AntdInferencer,
                        canDelete: true,
                    },
                ]}`,
            );
        }

        return base;
    },
};
