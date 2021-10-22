const base = {
    _app: {
        import: ['import "styles/antd.less";'],
        inner: [],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
