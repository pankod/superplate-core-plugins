const base = {
    _app: {
        import: [`import { dataProvider } from "@refinedev/supabase";`],
        localImport: [
            `import { authProvider } from "~/authProvider";`,
            `import { supabaseClient } from "~/utility";`,
        ],
        refineAntdImports: [],
        refineMuiImports: [],
        refineProps: [
            "dataProvider={dataProvider(supabaseClient)}",
            "authProvider={authProvider}",
        ],
    },
};
module.exports = {
    extend(answers) {
        if (answers["ui-framework"] === "antd") {
            base._app.refineAntdImports.push("AuthPage");
        }

        if (answers["ui-framework"] === "mui") {
            base._app.refineMuiImports.push("AuthPage");
        }

        return base;
    },
};
