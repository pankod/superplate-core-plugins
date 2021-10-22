const base = {
    _app: {
        import: [
            `import { dataProvider } from "@pankod/refine-supabase";`,
            "",
            `import authProvider from "./authProvider";`,
            `import { supabaseClient } from "utility";`
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
