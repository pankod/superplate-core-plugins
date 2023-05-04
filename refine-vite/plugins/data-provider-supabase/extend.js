const base = {
    _app: {
        import: [
            `import { dataProvider, liveProvider } from "@refinedev/supabase";`,
        ],
        localImport: [
            `import { supabaseClient } from "./utility";`,
        ],
        relativeImport: [`import authProvider from "./authProvider";`],
        refineProps: [
            "dataProvider={dataProvider(supabaseClient)}",
            "liveProvider={liveProvider(supabaseClient)}",
            "authProvider={authProvider}",
            "routerProvider={routerBindings}"
        ],
        refineImports: [
            `Authenticated`
        ],
        refineAntdImports: [],
        refineMantineImports: [],
        refineMuiImports: [],
        refineChakraImports: [],
        wrapper: [],
    },
};
module.exports = {
    extend() {
        return base;
    },
};
