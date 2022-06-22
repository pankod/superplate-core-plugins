const base = {
    _app: {
        localImport: ['import { authProvider } from "src/authProvider";'],
        refineProps: ["authProvider={authProvider}"],
        refineAntdImports: [],
        refineMuiImports: [],
    },
};

module.exports = {
    extend(answers) {
        if (answers["ui-framework"] === "antd") {
            base._app.refineAntdImports.push("LoginPage");
            base._app.refineProps.push("LoginPage={LoginPage}");
        }
        if (answers["ui-framework"] === "mui") {
            base._app.refineMuiImports.push("LoginPage");
            base._app.refineProps.push("LoginPage={LoginPage}");
        }
        return base;
    },
};
