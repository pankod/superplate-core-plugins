const base = {
    _app: {
        import: [
            `import routerProvider from "@pankod/refine-react-router-v6";`,
        ],
        refineProps: [
            `routerProvider={routerProvider}`,
        ],
    },
};
module.exports = {
    extend() {
        return base;
    },
};