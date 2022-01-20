const base = {
    _app: {
        import: [
            `import { dataProvider } from "@pankod/refine-supabase";`,
            "",
            `import { authProvider } from "src/authProvider";`,
            `import { supabaseClient } from "src/utility";`,
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
        if (answers["uiFramework"] === "antd") {
            base._app.refineAntdImports.push("LoginPage");
            base._app.refineProps.push("LoginPage={LoginPage}");
        }
        return base;
    },
};
