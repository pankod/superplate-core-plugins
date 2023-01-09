const base = {
    _app: {
        import: [`import { DataProvider } from "@pankod/refine-strapi";`],
        relativeImport: [`import strapiAuthProvider from "./authProvider";`],
        inner: [
            `const API_URL = "https://api.strapi.refine.dev";`,
            "",
            `const { authProvider, axiosInstance } = strapiAuthProvider(API_URL);`,
            `const dataProvider = DataProvider(API_URL, axiosInstance);`,
        ],
        refineProps: [
            "dataProvider={dataProvider}",
            "authProvider={authProvider}",
        ],
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
            base._app.refineMuiImports.push("AuthPage");
            base._app.refineProps.push("LoginPage={AuthPage}");
        }

        if (answers["ui-framework"] === "mantine") {
            base._app.refineMantineImports.push("AuthPage");
            base._app.refineProps.push("LoginPage={AuthPage}");
        }
        return base;
    },
};
