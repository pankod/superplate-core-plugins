const base = {
    _app: {
        isNextAuthCheck: false,
        isAuthProviderCheck: false,
        loader: [],
        authPageProps: [],
        localImport: [],
        refineAntdImports: [],
        refineChakraImports: [],
        refineMuiImports: [],
        refineMantineImports: [],
        styleImport: [],
    },
    selectedTheme: "Blue",
    selectedTitle: undefined,
    selectedSvg: undefined,
};

module.exports = {
    extend(answers) {
        const dataProvider = answers["data-provider"];
        const authProvider = answers["auth-provider"];
        const uiFramework = answers["ui-framework"];

        // ## isNextAuthCheck
        if (
            authProvider === "auth-provider-auth0" ||
            authProvider === "auth-provider-google" ||
            authProvider === "auth-provider-keycloak"
        ) {
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

        // ## authPageProps
        let defaultValuePropsName = "initialValues";
        let defaultValues = `email: "demo@refine.dev", password: "demodemo"`;
        // change supabase login credentials
        if (dataProvider === "data-provider-supabase") {
            defaultValues = `email: "info@refine.dev", password: "refine-supabase"`;
        }

        // mui || chakra
        if (uiFramework === "mui" || uiFramework === "chakra") {
            defaultValuePropsName = "defaultValues";
        }

        base._app.authPageProps = [
            `formProps={{ ${defaultValuePropsName}:{ ${defaultValues} } }}`,
        ];

        // update for headless
        if (uiFramework === "no") {
            base._app.authPageProps = [
                `
                renderContent={(content) => (
                      <div>
                        <p
                          style={{
                            padding: 10,
                            color: "#004085",
                            backgroundColor: "#cce5ff",
                            borderColor: "#b8daff",
                            textAlign: "center",
                          }}
                        >
                          ${defaultValues
                              .replace(/"/g, "")
                              .replace(/,/g, "<br/>")}
                        </p>
                        {content}
                      </div>
                    )}
                `,
            ];
        }
        // ## authPageProps

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
                base._app.refineAntdImports.push("ThemedTitleV2");
            }
            if (answers["ui-framework"] === "mantine") {
                base._app.refineMantineImports.push("ThemedTitleV2");
            }
            if (answers["ui-framework"] === "mui") {
                base._app.refineMuiImports.push("ThemedTitleV2");
            }
            if (answers["ui-framework"] === "chakra") {
                base._app.refineChakraImports.push("ThemedTitleV2");
            }
        }

        if (
            answers["ui-framework"] !== "no" &&
            (answers["title"] || answers["svg"])
        ) {
            base._app.localImport.push(
                'import { AppIcon } from "@components/app-icon";',
            );
        }

        if (answers["ui-framework"] === "no") {
            base._app.localImport.push(`import styles from "~/global.css";`);
            base._app.styleImport.push('{ rel: "stylesheet", href: styles }');
        }

        return base;
    },
};
