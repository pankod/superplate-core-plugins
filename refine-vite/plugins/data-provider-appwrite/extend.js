const base = {
    _app: {
        import: [
            `import { dataProvider, liveProvider } from "@refinedev/appwrite";`,
        ],
        localImport: [`import { appwriteClient } from "./utility";`],
        relativeImport: [`import { authProvider } from "./authProvider";`],
        refineProps: [
            `dataProvider={dataProvider(appwriteClient, {
                databaseId: "default",
            })}`,
            `liveProvider={liveProvider(appwriteClient, {
                databaseId: "default",
            })}`,
            `authProvider={authProvider}`,
        ],
        refineImports: [`Authenticated`],
        refineAntdImports: [],
        refineMuiImports: [],
    },
};
module.exports = {
    extend() {
        return base;
    },
};
