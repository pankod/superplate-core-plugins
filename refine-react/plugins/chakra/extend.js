const base = {
    _app: {
        refineProps: [
            "notificationProvider={notificationProvider}",
        ],
        import: [
            `import { ChakraProvider } from "@chakra-ui/react";`
        ],
        refineChakraImports: [
            "notificationProvider",
            "refineTheme",
            "Layout",
            "ErrorComponent"
        ],
        wrapper: [
            [`<ChakraProvider theme={refineTheme}>`, "</ChakraProvider>"],
        ],
        localImport: [
            `import { Header } from "./components/header";`
        ],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
