const base = {
    _app: {
        import: ['import { authProvider } from "src/authProvider";'],
        refineProps: ["authProvider={authProvider}"],
        refineAntdImports: [],
    },
};

module.exports = {
    extend(answers) {
        if (answers["uiFramework"] === "antd") {
            base._app.refineAntdImports.push("LoginPage");
            base._app.refineProps.push("LoginPage={LoginPage}");
        }
        return base;
    },
};
