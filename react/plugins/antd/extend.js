const base = {
    _app: {
        import: ['import "antd/dist/reset.css";'],
        inner: [],
        wrapper: [],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
