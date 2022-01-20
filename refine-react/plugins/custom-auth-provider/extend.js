const base = {
    _app: {
        import: ['import { authProvider } from "authProvider";'],
        inner: [],
        refineProps: ["authProvider={authProvider}"],
    },
};

module.exports = {
    extend(answers) {
        if (answers["uiFramework"] === "antd") {
            base._app.refineAntdProps = ["LoginPage"];
        }
        return base;
    },
};
