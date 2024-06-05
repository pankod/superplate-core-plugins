const base = {
    _app: {
        isNextAuthCheck: false,
        isAuthProviderCheck: false,
        hasRoutes: true,
        loader: [],
        authPageProps: [],
        localImport: [],
        refineAntdImports: [],
        refineMuiImports: [],
        styleImport: [],
    },
    selectedTheme: "Blue",
    selectedTitle: undefined,
    selectedSvg: undefined,
    isGraphQL: false,
    blogPostCategoryFieldName: "category",
    blogPostCategoryTableField: `"category"`,
    blogPostCategoryIdFormField: `["category", "id"]`,
    blogPostStatusOptions: [],
    blogPostStatusDefaultValue: `"draft"`,
};

module.exports = {
    extend(answers) {
        const dataProvider = answers["data-provider"];
        const authProvider = answers["auth-provider"];
        const uiFramework = answers["ui-framework"];
        const isHeadless =
            uiFramework === "no" || uiFramework === "tailwindcss";

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
        if (isHeadless) {
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

        if (!isHeadless && (answers["title"] || answers["svg"])) {
            base._app.localImport.push(
                'import { AppIcon } from "@components/app-icon";',
            );
        }

        if (isHeadless) {
            base._app.localImport.push(`import styles from "~/global.css";`);
            base._app.styleImport.push('{ rel: "stylesheet", href: styles }');
        }

        // ## isGraphQL
        if (
            ["data-provider-hasura", "data-provider-nestjs-query"].includes(
                dataProvider,
            )
        ) {
            base.isGraphQL = true;
        }

        // ## blogPostCategoryFieldName
        if (dataProvider === "data-provider-supabase") {
            base.blogPostCategoryFieldName = "categories";
        } else {
            base.blogPostCategoryFieldName = "category";
        }

        // ## blogPostCategoryIdFormField
        if (dataProvider === "data-provider-hasura") {
            base.blogPostCategoryIdFormField = `"category_id"`;
        } else if (dataProvider === "data-provider-nestjs-query") {
            base.blogPostCategoryIdFormField = `"categoryId"`;
        } else if (dataProvider === "data-provider-supabase") {
            base.blogPostCategoryIdFormField = `"categoryId"`;
        } else {
            if (uiFramework === "mui" || isHeadless) {
                base.blogPostCategoryIdFormField = `"category.id"`;
            } else {
                base.blogPostCategoryIdFormField = `["category", "id"]`;
            }
        }

        // ## blogPostCategoryTableField
        if (base.isGraphQL) {
            if (isHeadless) {
                base.blogPostCategoryTableField = `"category.title"`;
            }
            if (uiFramework === "antd") {
                base.blogPostCategoryTableField = `['category', 'title']`;
            }
            if (uiFramework === "mui") {
                base.blogPostCategoryTableField = `"category"`;
            }
        } else {
            if (dataProvider === "data-provider-supabase") {
                base.blogPostCategoryTableField = `"categories"`;
            } else {
                base.blogPostCategoryTableField = `"category"`;
            }
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
        if (isHeadless || uiFramework === "mui") {
            base.blogPostStatusOptions = JSON.parse(base.blogPostStatusOptions);
        }

        // ## blogPostStatusDefaultValue
        if (dataProvider === "data-provider-nestjs-query") {
            base.blogPostStatusDefaultValue = `"DRAFT"`;
        } else {
            base.blogPostStatusDefaultValue = `"draft"`;
        }

        // ## Refine options.title
        if (!isHeadless && (answers["title"] || answers["svg"])) {
            if (!base._app.refineOptions) {
                base._app.refineOptions = [];
            }
            const textLine = answers["title"]
                ? `text: "${answers["title"]}",`
                : "";
            const iconLine = answers["svg"] ? `icon: <AppIcon />,` : "";
            const template = `title: { ${textLine} ${iconLine} },`;

            base._app.refineOptions.push(template);
        }

        return base;
    },
};
