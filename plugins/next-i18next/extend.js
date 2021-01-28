const base = {
    _app: {
        import: ["import { appWithTranslation } from '@i18n';"],
        inner: [],
        wrapper: [],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
