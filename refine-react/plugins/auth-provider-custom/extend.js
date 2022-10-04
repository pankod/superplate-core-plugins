const base = {
    _app: {
        relativeImport: ['import { authProvider } from "./authProvider";'],
        refineProps: ["authProvider={authProvider}"],
        refineAntdImports: [],
        refineMantineImports: [],
        refineMuiImports: [],
    },
};

module.exports = {
    extend(answers) {
        if (answers["ui-framework"] === "antd") {
            base._app.refineAntdImports.push("AuthPage");
            base._app.refineProps.push("LoginPage={AuthPage}");
        }

        if (answers["ui-framework"] === "mui") {
            base._app.refineMuiImports.push("LoginPage");
            base._app.refineProps.push("LoginPage={LoginPage}");
        }

        if (answers["ui-framework"] === "mantine") {
            base._app.refineMantineImports.push("AuthPage");
            base._app.refineProps.push("LoginPage={AuthPage}");
        }
        return base;
    },
};
