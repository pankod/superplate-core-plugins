const base = {
    _app: {
        import: [
            `import { DataProvider } from "@pankod/refine-strapi";`,
            `import strapiAuthProvider from "src/authProvider";`,
            `import { API_URL } from "src/constants";`,
        ],
        refineAntdImports: [],
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
        if (answers["uiFramework"] === "antd") {
            base._app.refineAntdImports.push("LoginPage");
            base._app.refineProps.push("LoginPage={LoginPage}");
        }
        return base;
    },
};
