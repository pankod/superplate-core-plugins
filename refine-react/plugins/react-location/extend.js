const base = {
    _app: {
        import: [
            `import routerProvider from "@pankod/refine-react-location";`,
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