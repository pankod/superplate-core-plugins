const base = {
    _app: {
        refineProps: ["notificationProvider={notificationProvider}"],
        import: [`import { ChakraProvider } from "@chakra-ui/react";`],
        refineChakraImports: [
            "notificationProvider",
            "RefineThemes",
            "ThemedLayoutV2",
        ],
        localImport: [`import { Header } from "@components/header"`],
    },
};

module.exports = {
    extend(answers) {
        const selectedTheme = answers["theme"] ? answers["theme"] : "Blue";

        return {
            ...base,
            _app: {
                ...base._app,
                wrapper: [
                    [
                        "{/* You can change the theme colors here. example: theme={RefineThemes.Magenta} */}",
                        "",
                    ],
                    [
                        `<ChakraProvider theme={RefineThemes.${selectedTheme}}>`,
                        "</ChakraProvider>",
                    ],
                ],
            },
        };
    },
};
