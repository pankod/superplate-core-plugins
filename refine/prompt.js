module.exports = {
    prompts: [
        {
            name: "theme-customization",
            message: "Do you want to customize theme?:",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "No (Ant Design default theme)", name: "css" },
                { message: "Yes, I want (less)", name: "less" },
            ],
            default: "css",
        },
        {
            name: "dataProvider",
            message: "Data Provider:",
            type: "select",
            pageSize: 2,
            choices: [
                {
                    message: "Custom JSON REST API",
                    name: "custom-json-rest-data-provider",
                },
                { message: "Strapi", name: "strapi-data-provider" },
                { message: "nestjsx-crud", name: "nestjsx-crud-data-provider" },
                {
                    message: "Airtable",
                    name: "airtable-data-provider",
                },
                {
                    message: "Supabase",
                    name: "supabase-data-provider",
                },
                {
                    message: "Altogic",
                    name: "altogic-data-provider",
                },
            ],
            default: "custom-json-rest-data-provider",
        },
        {
            name: "auth-provider",
            message: "Auth Provider:",
            type: "select",
            choices: [
                { message: "None", name: "none" },
                { message: "Custom", name: "custom-auth-provider" },
                { message: "Auth0", name: "auth0-auth-provider" },
                { message: "Google", name: "google-auth-provider" },
            ],
            skip: ({ answers }) =>
                answers["data-provider"] === "strapi-data-provider" ||
                answers.dataProvider === "supabase-data-provider",
            default: "none",
        },
        {
            name: "example-resource",
            message: "Do you want to add an example page?",
            type: "select",
            choices: [
                { message: "No", name: "no" },
                {
                    message: "Yes, I want (recommended)",
                    name: "example-resource",
                },
            ],
            skip: ({ answers }) =>
                answers.dataProvider === "strapi-data-provider" ||
                answers.dataProvider === "airtable-data-provider" ||
                answers.dataProvider === "supabase-data-provider" ||
                answers.dataProvider === "altogic-data-provider",
            default: "no",
        },
        {
            name: "custom-layout",
            message: "Do you want to customize layout?",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "No", name: "no" },
                { message: "Yes, I want", name: "custom-layout" },
            ],
            default: "no",
        },
        {
            name: "i18n",
            message: "i18n - Internationalization:",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "No", name: "no" },
                { message: "Yes, I want", name: "i18n" },
            ],
            default: "no",
        },
    ],
    ignores: [],
};
