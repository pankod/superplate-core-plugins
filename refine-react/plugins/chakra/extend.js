const base = {
    _app: {
        refineProps: [
            "notificationProvider={notificationProvider()}",
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
            [`<BrowserRouter>`, `</BrowserRouter>`],
            [`<ChakraProvider theme={refineTheme}>`, "</ChakraProvider>"],
        ],
    },
};

module.exports = {
    extend(answers) {
        if (answers["inferencer"] === "no") {
            base._app.refineChakraImports.push("WelcomePage");
            base._app.refineComponents.push(`<WelcomePage />`);
        }

        return base;
    },
};
