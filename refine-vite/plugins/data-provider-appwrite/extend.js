const base = {
    _app: {
        import: [
            `import { dataProvider, liveProvider } from "@refinedev/appwrite";`,
        ],
        localImport: [`import { appwriteClient } from "./utility";`],
        relativeImport: [`import { authProvider } from "./authProvider";`],
        refineProps: [
            `dataProvider={dataProvider(appwriteClient, {
                databaseId: "database",
            })}`,
            `liveProvider={liveProvider(appwriteClient, {
                databaseId: "database",
            })}`,
            `authProvider={authProvider}`,
        ],
        refineImports: [
            `Authenticated`
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
