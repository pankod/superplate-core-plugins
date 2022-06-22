const base = {
    _app: {
        import: [`import { dataProvider } from "@pankod/refine-appwrite";`],
        localImport: [`import { appwriteClient } from "utility";`],
        relativeImport: [`import { authProvider } from "./authProvider";`],
        refineProps: [
            "authProvider={authProvider}",
            "dataProvider={dataProvider(appwriteClient)}",
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
        return base;
    },
};
