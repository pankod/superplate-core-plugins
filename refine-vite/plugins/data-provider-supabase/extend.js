const base = {
    _app: {
        import: [`import { liveProvider } from "@refinedev/supabase";`],
        localImport: [
            `import { supabaseClient } from "./providers/supabase-client";`,
            `import { dataProvider } from "./providers/data";`,
        ],
        relativeImport: [`import authProvider from "./providers/auth";`],
        refineProps: [
            "dataProvider={dataProvider}",
            "liveProvider={liveProvider(supabaseClient)}",
            "authProvider={authProvider}",
            "routerProvider={routerProvider}",
        ],
        refineImports: [`Authenticated`],
        refineAntdImports: [],
        refineMuiImports: [],
        wrapper: [],
    },
};
module.exports = {
    extend() {
        return base;
    },
};
