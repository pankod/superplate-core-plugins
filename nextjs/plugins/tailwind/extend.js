const base = {
    _app: {
        import: ['import "tailwindcss/tailwind.css";'],
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
