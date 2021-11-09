const base = {
    _app: {
        import: ['import { authProvider } from "src/authProvider";'],
        refineProps: ["authProvider={authProvider}"],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
