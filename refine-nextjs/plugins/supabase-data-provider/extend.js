const base = {
    _app: {
        import: [
            `import { dataProvider } from "@pankod/refine-supabase";`,
            "",
            `import authProvider from "src/authProvider";`,
            `import { supabaseClient } from "src/utility";`
        ],
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
