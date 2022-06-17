const base = {
    _app: {
        localImport: ['import { authProvider } from "./authProvider";'],
        refineProps: ["authProvider={authProvider}"],
        refineAntdImports: [],
        refineMuiImports: [],
    },
};

module.exports = {
    extend(answers) {
        if (answers["uiFramework"] === "antd") {
            base._app.refineAntdImports.push("LoginPage");
            base._app.refineProps.push("LoginPage={LoginPage}");
        }
        if (answers["uiFramework"] === "mui") {
            base._app.refineMuiImports.push("LoginPage");
            base._app.refineProps.push("LoginPage={LoginPage}");
        }
        return base;
    },
};
