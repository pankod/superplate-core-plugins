const base = {
    _app: {
        import: ['import "antd/dist/antd.css";'],
        inner: [],
        wrapper: [],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
