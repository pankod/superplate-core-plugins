const base = {
    _app: {
        refineProps: ["notificationProvider={notificationProvider}"],
        import: [`import { ChakraProvider } from "@chakra-ui/react";`],
        refineChakraImports: [
            "notificationProvider",
            "RefineThemes",
            "ThemedLayout",
            "ErrorComponent",
        ],
        wrapper: [
            [
                "{/* You can change the theme colors here. example: theme={RefineThemes.Magenta} */}",
                "",
            ],
            [`<ChakraProvider theme={RefineThemes.Blue}>`, "</ChakraProvider>"],
        ],
        localImport: [`import { Header } from "./components/header";`],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
