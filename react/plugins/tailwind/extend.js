const base = {
    _app: {
        inner: [],
        wrapper: [],
    },
    _document: {
        import: [],
        inner: [],
        wrapper: [],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
