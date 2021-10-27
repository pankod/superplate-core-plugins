const base = {
    _app: {
        import: ['require("antd/dist/antd.less");'],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
