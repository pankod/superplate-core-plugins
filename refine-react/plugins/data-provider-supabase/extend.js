const base = {
    _app: {
        import: [
            `import { dataProvider, liveProvider } from "@refinedev/supabase";`,
        ],
        localImport: [
            `import { supabaseClient } from "utility";`,
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
    extend(answers) {
        if (answers["ui-framework"] === "antd") {
            base._app.refineAntdImports.push("AuthPage");
        }

        if (answers["ui-framework"] === "mui") {
            base._app.refineMuiImports.push("AuthPage");
        }

        if (answers["ui-framework"] === "mantine") {
            base._app.refineMantineImports.push("AuthPage");
        }

        if (answers["ui-framework"] === "chakra") {
            base._app.refineChakraImports.push("AuthPage");
        }
        return base;
    },
};
