const base = {
    _app: {
        isNextAuthCheck: false,
        isAuthProviderCheck: false,
        hasRoutes: true,
        refineAntdImports: [],
        refineMuiImports: [],
        localImport: [],
        authPageProps: [],
    },
    selectedTheme: "Blue",
    selectedTitle: undefined,
    selectedSvg: undefined,
    isGraphQL: false,
    blogPostCategoryTableField: "",
    blogPostCategoryFormField: "",
    blogPostStatusOptions: [],
    blogPostStatusDefaultValue: "",
};

module.exports = {
    extend(answers) {
        const uiFramework = answers["ui-framework"];
        const dataProvider = answers["data-provider"];
        const authProvider = answers["auth-provider"];

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

        // ## hasRoutes
        if (
            ["headless-example", "antd-example", "mui-example"].every(
                (item) => answers[item] === "no",
            )
        ) {
            base._app.hasRoutes = false;
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
                'import { AppIcon } from "src/components/app-icon";',
            );
        }

        if (answers["ui-framework"] === "no") {
            base._app.localImport.push(
                `import { Layout } from "@components/layout";`,
            );
            base._app.localImport.push(`import "@styles/global.css";`);
        }

        // ## isGraphQL
        if (
            ["data-provider-hasura", "data-provider-nestjs-query"].includes(
                dataProvider,
            )
        ) {
            base.isGraphQL = true;
        }

        // ## blogPostCategoryFormField
        if (dataProvider === "data-provider-hasura") {
            base.blogPostCategoryFormField = `"category_id"`;
        } else if (dataProvider === "data-provider-nestjs-query") {
            base.blogPostCategoryFormField = `"categoryId"`;
        } else {
            if (uiFramework === "mui" || uiFramework === "no") {
                base.blogPostCategoryFormField = `"category.id"`;
            } else {
                base.blogPostCategoryFormField = `["category", "id"]`;
            }
        }

        // ## blogPostCategoryTableField
        if (base.isGraphQL) {
            if (uiFramework === "no") {
                base.blogPostCategoryTableField = `"category.title"`;
            }
            if (uiFramework === "antd") {
                base.blogPostCategoryTableField = `['category', 'title']`;
            }
            if (uiFramework === "mui") {
                base.blogPostCategoryTableField = `"category"`;
            }
        } else {
            base.blogPostCategoryTableField = `"category"`;
        }

        // ## blogPostStatusOptions
        if (dataProvider === "data-provider-nestjs-query") {
            base.blogPostStatusOptions = JSON.stringify([
                { value: "DRAFT", label: "Draft" },
                { value: "PUBLISHED", label: "Published" },
                { value: "REJECTED", label: "Rejected" },
            ]);
        } else {
            base.blogPostStatusOptions = JSON.stringify([
                { value: "draft", label: "Draft" },
                { value: "published", label: "Published" },
                { value: "rejected", label: "Rejected" },
            ]);
        }
        if (uiFramework === "no" || uiFramework === "mui") {
            base.blogPostStatusOptions = JSON.parse(base.blogPostStatusOptions);
        }

        // ## blogPostStatusDefaultValue
        if (dataProvider === "data-provider-nestjs-query") {
            base.blogPostStatusDefaultValue = `"DRAFT"`;
        } else {
            base.blogPostStatusDefaultValue = `"draft"`;
        }

        return base;
    },
};
