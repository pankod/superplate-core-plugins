const base = {
    _app: {
        import: ["import { RootStoreProvider } from 'store';"],
        inner: [],
        wrapper: [["<RootStoreProvider>", "</RootStoreProvider>"]],
    },
    testSetup: {
        import: ["import { RootStoreProvider } from 'store';"],
        inner: [],
        wrapper: [["<RootStoreProvider>", "</RootStoreProvider>"]],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
