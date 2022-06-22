const base = {
    _app: {
        import: [
            `import { DataProvider } from "@pankod/refine-strapi";`,
            `import strapiAuthProvider from "./authProvider";`,
        ],
        inner: [
            `const API_URL = "your-strapi-api-url";`,
            "",
            `const { authProvider, axiosInstance } = strapiAuthProvider(API_URL);`,
            `const dataProvider = DataProvider(API_URL, axiosInstance);`,
        ],
        refineProps: [
            "dataProvider={dataProvider}",
            "authProvider={authProvider}",
        ],
        refineAntdImports: [],
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
