const base = {
    _app: {
        localImport: [
            `import { gqlDataProvider } from "~/gqDataProvider";`,
            `import { authProvider } from "~/authProvider";`,
        ],
        refineAntdImports: [],
        refineProps: [
            "dataProvider={gqlDataProvider}",
            "authProvider={authProvider}",
        ],
    },
};
module.exports = {
    extend(answers) {
        if (answers["ui-framework"] === "antd") {
            base._app.refineAntdImports.push("LoginPage");
            base._app.refineProps.push("LoginPage={LoginPage}");
        }
        return base;
    },
};
