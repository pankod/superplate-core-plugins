const base = {
    _app: {
        import: ['import "@styles/global.scss"'],
        inner: [],
        wrapper: [],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
