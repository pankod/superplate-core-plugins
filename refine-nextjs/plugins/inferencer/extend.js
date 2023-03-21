const base = {
    _app: {
        import: [],
        refineProps: [],
        refineAntdImports: [],
        wrapper: [],
        localImport: [],
        inferencer: {},
    },
};

module.exports = {
    extend(answers) {
        const inferencerPackage = [
            {
                ui: "antd",
                folder: "antd",
                componentPrefix: "Antd",
            },
            {
                ui: "chakra",
                folder: "chakra-ui",
                componentPrefix: "ChakraUI",
            },
            {
                ui: "no",
                folder: "headless",
                componentPrefix: "Headless",
            },
            {
                ui: "mantine",
                folder: "mantine",
                componentPrefix: "Mantine",
            },
            {
                ui: "mui",
                folder: "mui",
                componentPrefix: "Mui",
            }
        ];

        base._app.inferencer = inferencerPackage.find(
            (item) => item.ui === answers["ui-framework"],
        );

        return base;
    },
};
