module.exports = {
    prompts: [
        {
            name: "dataProvider",
            message: "Data Provider:",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "strapi", name: "strapi-data-provider" },
                { message: "nestjsx-crud", name: "nestjsx-crud-data-provider" },
                {
                    message: "Custom JSON rest api",
                    name: "custom-json-rest-data-provider",
                },
                {
                    message: "airtable",
                    name: "airtable-data-provider",
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
            ],
            skip: ({ answers }) =>
                answers["data-provider"] === "strapi-data-provider",
            default: "none",
        },
        {
            name: "theme-customization",
            message: "Do you want customize theme?:",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "No (Ant Design default theme)", name: "css" },
                { message: "Yes, I want (less)", name: "less" },
            ],
            default: "css",
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
                answers.dataProvider === "strapi-data-provider" || answers.dataProvider === "airtable-data-provider",
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
