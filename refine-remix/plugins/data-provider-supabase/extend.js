const base = {
    _app: {
        import: [`import { dataProvider } from "@pankod/refine-supabase";`],
        localImport: [
            `import { authProvider } from "~/authProvider";`,
            `import { supabaseClient } from "~/utility";`,
        ],
        refineAntdImports: [],
        refineMantineImports: [],
        refineChakraImports: [],
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
            base._app.refineProps.push("LoginPage={AuthPage}");
        }

        if (answers["ui-framework"] === "mui") {
            base._app.refineMuiImports.push("AuthPage");
            base._app.refineProps.push("LoginPage={AuthPage}");
        }

        if (answers["ui-framework"] === "mantine") {
            base._app.refineMantineImports.push("AuthPage");
            base._app.refineProps.push("LoginPage={AuthPage}");
        }

        if (answers["ui-framework"] === "chakra") {
            base._app.refineChakraImports.push("AuthPage");
            base._app.refineProps.push("LoginPage={AuthPage}");
        }
        return base;
    },
};
