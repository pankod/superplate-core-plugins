const base = {
    _app: {
        import: ['import "@styles/globalStyle.scss"'],
        inner: [],
        wrapper: [],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
