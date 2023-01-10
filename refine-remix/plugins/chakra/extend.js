const base = {
    _app: {
        refineProps: [
            "notificationProvider={notificationProvider()}",
            "ReadyPage={ReadyPage}",
            "catchAll={<ErrorComponent />}",
        ],
        import: [],
        refineChakraImports: [
            "notificationProvider",
            "ReadyPage",
            "ErrorComponent",
        ],
    },
};

module.exports = {
    extend(answers) {
        if (answers["chakra-custom-layout"] === "no") {
            base._app.refineChakraImports.push("Layout");
            base._app.refineProps.push("Layout={Layout}");
        }

        return base;
    },
};
