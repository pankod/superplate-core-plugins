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
    _env: {
        variables: [
            "VITE_API_URL=https://iwdfzvfqbtokqetmbmbp.supabase.co",
            "VITE_SUPABASE_API_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDU2NzAxMCwiZXhwIjoxOTQ2MTQzMDEwfQ._gr6kXGkQBi9BM9dx5vKaNKYj_DJN1xlkarprGpM_fU",
        ],
    },
    _constants: {
        export: [
            'export const SUPABASE_URL = "https://iwdfzvfqbtokqetmbmbp.supabase.co";',
            'export const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDU2NzAxMCwiZXhwIjoxOTQ2MTQzMDEwfQ._gr6kXGkQBi9BM9dx5vKaNKYj_DJN1xlkarprGpM_fU";',
        ],
    },
};
module.exports = {
    extend() {
        return base;
    },
};
