const base = {
    _app: {
        import: [
            `import { dataProvider } from "@pankod/refine-appwrite";`,
            `import { authProvider } from "./authProvider";`,
            "",
            `import { appwriteClient } from "utility";`,
        ],
        refineProps: [
            "authProvider={authProvider}",
            "dataProvider={dataProvider(appwriteClient)}",
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
