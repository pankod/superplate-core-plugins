const base = {
    _app: {
        refineProps: [
            "notificationProvider={notificationProvider}",
        ],
        import: [],
        refineChakraImports: [
            "notificationProvider",
        ],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
