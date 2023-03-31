const base = {
    _app: {
        isNextAuthCheck: false,
        isAuthProviderCheck: false,
        refineAntdImports: [],
        refineMantineImports: [],
        refineMuiImports: [],
        refineChakraImports: [],
        localImport: [],
    },
    selectedTheme: "Blue",
    selectedTitle: undefined,
    selectedSvg: undefined,
};

module.exports = {
    extend(answers) {
        const uiFramework = answers["ui-framework"];
        const dataProvider = answers["data-provider"];
        const inferencer = answers["inferencer"];
        const authProvider = answers["auth-provider"];

        // ## isNextAuthCheck
        if (authProvider === "auth-provider-auth0") {
            base._app.isNextAuthCheck = true;
        }
        // ## isNextAuthCheck

        // ## isAuthProviderCheck
        if (
            authProvider === "auth-provider-custom" ||
            dataProvider === "data-provider-supabase" ||
            dataProvider === "data-provider-strapi-v4" ||
            dataProvider === "data-provider-appwrite"
        ) {
            base._app.isAuthProviderCheck = true;
        }

        // ## isAuthProviderCheck

        // ## selected theme
        const themeFromAnswers = answers["theme"];
        if (themeFromAnswers) {
            base.selectedTheme = themeFromAnswers;
        }
        // ## selected title
        const titleFromAnswers = answers["title"];
        if (titleFromAnswers) {
            base.selectedTitle = titleFromAnswers;
        }
        // ## selected svg
        const svgFromAnswers = answers["svg"];
        if (svgFromAnswers) {
            base.selectedSvg = svgFromAnswers;
        }

        if (
            answers["ui-framework"] !== "no" &&
            (answers["title"] || answers["svg"])
        ) {
            if (answers["ui-framework"] === "antd") {
                base._app.refineAntdImports.push("ThemedTitle");
            }
            if (answers["ui-framework"] === "mantine") {
                base._app.refineMantineImports.push("ThemedTitle");
            }
            if (answers["ui-framework"] === "mui") {
                base._app.refineMuiImports.push("ThemedTitle");
            }
            if (answers["ui-framework"] === "chakra") {
                base._app.refineChakraImports.push("ThemedTitle");
            }
        }

        if (
            answers["ui-framework"] !== "no" &&
            (answers["title"] || answers["svg"])
        ) {
            base._app.localImport.push(
                'import { AppIcon } from "src/components/app-icon";',
            );
        }

        return base;
    },
};
