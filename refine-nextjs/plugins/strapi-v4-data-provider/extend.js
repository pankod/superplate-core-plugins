const base = {
    _app: {
        import: [
            `import { DataProvider } from "@pankod/refine-strapi-v4";`,
            `import { authProvider, axiosInstance } from "src/authProvider";`,
            "",
            `import { API_URL } from "src/constants";`,
        ],
        refineProps: [
            "authProvider={authProvider}",
            "dataProvider={DataProvider(API_URL + `/api`, axiosInstance)}",
        ],
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