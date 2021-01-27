const base = {
    _app: {
        import: [
            'import { ChakraProvider } from "@chakra-ui/react";',
            'import theme from "@definitions/chakra/theme";',
        ],
        wrapper: [["<ChakraProvider theme={theme}>", "</ChakraProvider>"]],
    },
    testSetup: {
        import: [
            'import { ChakraProvider } from "@chakra-ui/react";',
            'import theme from "@definitions/chakra/theme";',
        ],
        wrapper: [["<ChakraProvider theme={theme}>", "</ChakraProvider>"]],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
