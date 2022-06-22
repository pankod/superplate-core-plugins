const base = {
    _app: {
        import: [
            `import dataProvider from "@pankod/refine-nhost";`,
            `import { authProvider } from "./authProvider";`,
            `import { NhostAuthProvider } from "@nhost/react-auth";`,
            "",
            `import { nhost } from "utility";`,
            
        ],
        refineProps: [
            "dataProvider={dataProvider(nhost)}" , 
            "authProvider={authProvider}" 
        ],
        refineAntdImports: [],
        wrapper: [["<NhostAuthProvider nhost={nhost}>", "</NhostAuthProvider>"]],
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
