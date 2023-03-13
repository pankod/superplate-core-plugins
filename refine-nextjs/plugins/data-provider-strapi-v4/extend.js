const base = {
    _app: {
        import: [`import { DataProvider } from "@refinedev/strapi-v4";`],
        localImport: [
            `import { authProvider, axiosInstance } from "src/authProvider";`,
            `import { API_URL } from "src/constants";`,
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
    extend() {
        return base;
    },
};
