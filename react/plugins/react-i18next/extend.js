const base = {
    _app: {
        import: ['import "./i18n";'],
        inner: [],
        wrapper: [],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
