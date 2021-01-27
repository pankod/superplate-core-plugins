const base = {
    _app: {
        import: ['import "@styles/global.scss"'],
        inner: [],
        wrapper: [],
    },
    testSetup: false
};

module.exports = {
    extend() {
        return base;
    },
};
