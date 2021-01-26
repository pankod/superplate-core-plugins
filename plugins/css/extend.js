const base = {
    _app: {
        import: ['import "@styles/global.css"'],
        inner: [],
        wrapper: [],
    },
    testSetup: false,
};

module.exports = {
    extend() {
        return base;
    },
};
