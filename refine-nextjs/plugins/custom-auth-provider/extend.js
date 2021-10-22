const base = {
    _app: {
        import: ['import { authProvider } from "authProvider";'],
        refineProps: ["authProvider={authProvider}"],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
