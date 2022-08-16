const base = {
    _app: {
        import: [`import { dataProvider } from "@pankod/refine-supabase";`],
        localImport: [
            `import { authProvider } from "~/authProvider";`,
            `import { supabaseClient } from "~/utility";`,
        ],
        refineAntdImports: [],
        refineProps: [
            "dataProvider={dataProvider(supabaseClient)}",
            "authProvider={authProvider}",
        ],
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
