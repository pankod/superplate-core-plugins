const base = {
    _app: {
        import: [
            `import { RefineKbarProvider } from "@refinedev/kbar";`
        ],
        refineProps: [
            `resources={[
                 {
                     name: "products",
                     list: "/products",
                     create: "/products/create",
                     edit: "/products/edit/:id",
                     show: "/products/show/:id",
                 },
                 {
                     name: "categories",
                     list: "/categories",
                     create: "/categories/create",
                     edit: "/categories/edit/:id",
                     show: "/categories/show/:id",
                 },
             ]}`
        ],
        refineAntdImports: [],
        wrapper: [
            ["<RefineKbarProvider>", "</RefineKbarProvider>"]
        ],
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
