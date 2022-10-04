const base = {
    _app: {
        import: [`import { DataProvider } from "@pankod/refine-strapi";`],
        localImport: [
            `import strapiAuthProvider from "~/authProvider";`,
            `import { API_URL } from "~/constants";`,
        ],
        refineAntdImports: [],
        refineMantineImports: [],
        refineMuiImports: [],
        inner: [
            `const { authProvider, axiosInstance } = strapiAuthProvider(API_URL);`,
            `const dataProvider = DataProvider(API_URL, axiosInstance);`,
        ],
        refineProps: [
            "dataProvider={dataProvider}",
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
