const base = {
    _app: {
        import: [`import { dataProvider } from "@refinedev/supabase";`],
        localImport: [
            `import { authProvider } from "src/authProvider";`,
            `import { supabaseClient } from "src/utility";`,
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
    extend() {
        return base;
    },
};
