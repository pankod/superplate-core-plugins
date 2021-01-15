const base = {
    _app: {
        import: [
            'import { ChakraProvider } from "@chakra-ui/react";',
            'import theme from "@definitions/chakra/theme";',
        ],
        inner: [],
        wrapper: ["<ChakraProvider theme={theme}>", "</ChakraProvider>"],
    },
    _document: {
        import: [],
        initialProps: [],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
