const base = {
    _app: {
        import: [`import { DataProvider } from "@refinedev/strapi-v4";`],
        localImport: [
            `import { authProvider, axiosInstance } from "~/authProvider";`,
            `import { API_URL } from "~/constants";`,
        ],
        refineProps: [
            "authProvider={authProvider}",
            "dataProvider={DataProvider(API_URL + `/api`, axiosInstance)}",
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
        }

        if (answers["ui-framework"] === "mui") {
            base._app.refineMuiImports.push("AuthPage");
        }

        if (answers["ui-framework"] === "mantine") {
            base._app.refineMantineImports.push("AuthPage");
        }
        return base;
    },
};
