const base = {
    _app: {
        import: ['import "@styles/global.css"'],
        inner: [],
        wrapper: [],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
