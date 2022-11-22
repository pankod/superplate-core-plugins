const base = {
    _app: {
        import: ['import "@styles/tailwind.css"'],
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
