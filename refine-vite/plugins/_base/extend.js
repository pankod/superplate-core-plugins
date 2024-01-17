const base = {
    _app: {
        isAuthRoutes: false,
        isNoAuthRoutes: false,
        hasRoutes: true,
        isCustomLoginPage: false,
        hasStrictMode: true,
        authPageProps: [],
        loginPageProps: [],
        refineProps: [],
        localImport: [],
        refineImports: [`Authenticated`],
        refineAntdImports: [],
        refineMuiImports: [],
    },
    selectedTheme: "Blue",
    selectedTitle: undefined,
    selectedSvg: undefined,
};

module.exports = {
    extend(answers) {
        const uiFramework = answers["ui-framework"];
        const dataProvider = answers["data-provider"];

        switch (uiFramework) {
            case "antd":
                base._app.refineAntdImports.push([
                    `AuthPage`,
                    `ErrorComponent`,
                ]);
                break;
            case "mui":
                base._app.refineMuiImports.push([`AuthPage`, `ErrorComponent`]);
                break;
            default:
                base._app.refineImports.push([`AuthPage`, `ErrorComponent`]);
                break;
        }

        if (
            ["headless-example", "antd-example", "mui-example"].every(
                (item) => answers[item] === "no",
            )
        ) {
            base._app.hasRoutes = false;
        }

        if (answers["auth-provider"] === "none") {
            if (
                [
                    "data-provider-appwrite",
                    "data-provider-supabase",
                    "auth-provider-auth0",
                    "data-provider-strapi-v4",
                ].includes(dataProvider)
            ) {
                base._app.isAuthRoutes = true;
            } else {
                base._app.isNoAuthRoutes = true;
            }
        } else {
            base._app.isAuthRoutes = true;
        }

        if (
            answers["auth-provider"] === "auth-provider-auth0" ||
            answers["auth-provider"] === "auth-provider-google" ||
            answers["auth-provider"] === "auth-provider-keycloak" ||
            answers["auth-provider"] === "auth-provider-custom"
        ) {
            base._app.isCustomLoginPage = true;
        }

        // ## hasStrictMode
        if (answers["auth-provider"] === "auth-provider-keycloak") {
            base._app.hasStrictMode = false;
        }
        // ## hasStrictMode

        // ## authPageProps
        let defaultValuePropsName = "initialValues";
        let defaultValues = `email: "demo@refine.dev", password: "demodemo"`;
        // change supabase login credentials
        if (dataProvider === "data-provider-supabase") {
            defaultValues = `email: "info@refine.dev", password: "refine-supabase"`;
        }

        // mui
        if (uiFramework === "mui") {
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

        // ## localImport
        if (base._app.isAuthRoutes || base._app.isNoAuthRoutes) {
            // ignore this data providers
            if (
                !["data-provider-graphql"].includes(dataProvider) &&
                base._app.hasRoutes === true
            ) {
                base._app.localImport.push(
                    `import { BlogPostList, BlogPostCreate, BlogPostEdit, BlogPostShow } from "./pages/blog-posts";`,
                );
                base._app.localImport.push(
                    `import { CategoryList, CategoryCreate, CategoryEdit, CategoryShow } from "./pages/categories";`,
                );
            }
        }

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

            if (answers["ui-framework"] === "mui") {
                base._app.refineMuiImports.push("ThemedTitleV2");
            }
        }

        if (
            answers["ui-framework"] !== "no" &&
            (answers["title"] || answers["svg"])
        ) {
            base._app.localImport.push(
                'import { AppIcon } from "./components/app-icon";',
            );
        }

        if (answers["ui-framework"] === "no") {
            base._app.localImport.push(
                `import { Layout } from "./components/layout";`,
            );
            base._app.localImport.push(`import "./App.css";`);
        }

        // ## localImport
        return base;
    },
};
