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
                databaseId: "database",
            })}`,
            `liveProvider={liveProvider(appwriteClient, {
                databaseId: "database",
            })}`,
            `authProvider={authProvider}`,
        ],
        refineOptions: [`liveMode: "auto",`],
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
