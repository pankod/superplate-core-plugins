const base = {
    _app: {
        import: [
            `import dataProvider from "@pankod/refine-nhost";`,
            `import { NhostAuthProvider } from "@nhost/react-auth";`,
        ],
        localImport: [`import { nhost } from "utility";`],
        relativeImport: [`import { authProvider } from "./authProvider";`],
        refineProps: [
            "dataProvider={dataProvider(nhost)}",
            "authProvider={authProvider}",
        ],
        refineAntdImports: [],
        refineMantineImports: [],
        refineMuiImports: [],
        wrapper: [
            ["<NhostAuthProvider nhost={nhost}>", "</NhostAuthProvider>"],
        ],
    },
};
module.exports = {
    extend(answers) {
        if (answers["ui-framework"] === "antd") {
            base._app.refineAntdImports.push("AuthPage");
            base._app.refineProps.push("LoginPage={AuthPage}");
        }

        if (answers["ui-framework"] === "mui") {
            base._app.refineMuiImports.push("AuthPage");
            base._app.refineProps.push("LoginPage={AuthPage}");
        }

        if (answers["ui-framework"] === "mantine") {
            base._app.refineMantineImports.push("AuthPage");
            base._app.refineProps.push("LoginPage={AuthPage}");
        }
        return base;
    },
};
