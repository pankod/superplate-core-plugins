const base = {
    _app: {
        localImport: [
            `import { gqlDataProvider } from "~/gqDataProvider";`,
            `import { authProvider } from "~/authProvider";`,
        ],
        refineAntdImports: [],
        refineMantineImports: [],
        refineMuiImports: [],
        refineProps: [
            "dataProvider={gqlDataProvider}",
            "authProvider={authProvider}",
        ],
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
        return base;
    },
};
