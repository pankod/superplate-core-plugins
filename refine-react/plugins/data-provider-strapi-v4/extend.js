const base = {
    _app: {
        import: [`import { DataProvider } from "@pankod/refine-strapi-v4";`],
        relativeImport: [
            `import { authProvider, axiosInstance } from "./authProvider";`,
            `import { API_URL } from "./constants";`,
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
