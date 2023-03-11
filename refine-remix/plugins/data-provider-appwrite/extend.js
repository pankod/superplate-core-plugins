const base = {
    _app: {
        import: [
            `import { dataProvider, liveProvider } from "@refinedev/appwrite";`,
        ],
        localImport: [
            `import { authProvider } from "~/authProvider";`,
            `import { appwriteClient } from "~/utility";`,
        ],
        refineProps: [
            `dataProvider={dataProvider(appwriteClient, {
                databaseId: "default",
            })}`,
            `liveProvider={liveProvider(appwriteClient, {
                databaseId: "default",
            })}`,
            `authProvider={authProvider}`,
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
