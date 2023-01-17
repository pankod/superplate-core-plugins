const base = {
    _app: {
        import: [],
        refineProps: [],
        refineAntdImports: [],
        wrapper: [],
    },
};

module.exports = {
    extend(answers) {
        const inferencerPackage = [
            {
                ui: "antd",
                folder: "antd",
                component: "AntdInferencer",
            },
            {
                ui: "chakra",
                folder: "chakra-ui",
                component: "ChakraUIInferencer",
            },
            {
                ui: "no",
                folder: "headless",
                component: "HeadlessInferencer",
            },
            {
                ui: "mantine",
                folder: "mantine",
                component: "MantineInferencer",
            },
            {
                ui: "mui",
                folder: "mui",
                component: "MuiInferencer",
            }
        ];

        const inferencer = inferencerPackage.find(
            (item) => item.ui === answers["ui-framework"],
        );

        base._app.import.push(
            `import { ${inferencer.component} } from "@pankod/refine-inferencer/${inferencer.folder}";`,
        );
        base._app.refineProps.push(
            `resources={[
                    {
                        name: "posts",
                        list: ${inferencer.component},
                        edit: ${inferencer.component},
                        show: ${inferencer.component},
                        create: ${inferencer.component},
                        canDelete: true,
                    },
                ]}`,
        );

        return base;
    },
};
