const base = {
    _app: {
        localImport: ['import { authProvider } from "~/authProvider";'],
        refineProps: ["authProvider={authProvider}"],
        refineAntdImports: [],
        refineMantineImports: [],
        refineMuiImports: [],
        refineChakraImports: [],
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
