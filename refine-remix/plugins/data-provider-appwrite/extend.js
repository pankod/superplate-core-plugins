const base = {
    _app: {
        import: [
            `import { dataProvider, liveProvider } from "@pankod/refine-appwrite";`,
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
            `liveMode="auto"`,
            `authProvider={authProvider}`,
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
            base._app.refineProps.push("LoginPage={AuthPage}");
        }

        if (answers["ui-framework"] === "mui") {
            base._app.refineMuiImports.push("LoginPage");
            base._app.refineProps.push("LoginPage={LoginPage}");
        }
        return base;
    },
};
