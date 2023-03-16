const base = {
    _app: {
        import: [`import { DataProvider } from "@refinedev/strapi-v4";`],
        relativeImport: [
            `import { authProvider, axiosInstance } from "./authProvider";`,
            `import { API_URL } from "./constants";`,
        ],
        refineProps: [
            "authProvider={authProvider}",
            "dataProvider={DataProvider(API_URL + `/api`, axiosInstance)}",
        ],
        refineImports: [
            `Authenticated`
        ],
        refineAntdImports: [],
        refineMuiImports: [],
        refineMantineImports: [],

    },
};
module.exports = {
    extend() {
        return base;
    },
};
