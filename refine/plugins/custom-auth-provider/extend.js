const base = {
    _app: {
        import: ['import { authProvider } from "authProvider";'],
        inner: [],
        refineProps: ["authProvider={authProvider}"],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
