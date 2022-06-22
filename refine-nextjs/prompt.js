module.exports = {
    prompts: [
        {
            name: "ui-framework",
            message: "Do you want to use a UI Framework?:",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "No (headless)", name: "no" },
                { message: "Ant Design", name: "antd" },
                { message: "Material UI", name: "mui" },
            ],
            default: "no",
        },
        {
            name: "antd-theme-customization",
            message: "Do you want a customized theme?:",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "Default theme)", name: "antd-css" },
                { message: "Custom theme (less)", name: "antd-less" },
            ],
            default: "css",
            skip: ({ answers }) => answers["ui-framework"] !== "antd",
        },
        {
            name: "mui-extend-theme",
            message: "Do you want an extended theme?:",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "No", name: "no" },
                { message: "Yes (Custom Variables)", name: "mui-extend-theme" },
            ],
            default: "css",
            skip: ({ answers }) => answers["ui-framework"] !== "mui",
        },
        {
            name: "mui-dark-mode",
            message: "Do you want to add dark mode support?:",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "No", name: "no" },
                { message: "Yes", name: "mui-dark-mode" },
            ],
            default: "no",
            skip: ({ answers }) => answers["ui-framework"] !== "mui",
        },
        {
            name: "data-provider",
            message: "Data Provider:",
            type: "select",
            pageSize: 2,
            choices: [
                {
                    message: "REST API",
                    name: "data-provider-custom-json-rest",
                },
                {
                    message: "GraphQL API",
                    name: "data-provider-graphql",
                },
                {
                    message: "Strapi v4",
                    name: "data-provider-strapi-v4",
                },
                { message: "Strapi v3", name: "strapi-data-provider" },
                {
                    message: "Strapi GraphQL",
                    name: "strapi-graphql-data-provider",
                },
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
                {
                    message: "Appwrite",
                    name: "appwrite-data-provider",
                },
                {
                    message: "Hasura",
                    name: "hasura-data-provider",
                },
            ],
            default: "data-provider-custom-json-rest",
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
                answers["data-provider"] === "strapi-data-provider" ||
                answers["data-provider"] === "strapi-graphql-data-provider" ||
                answers["data-provider"] === "supabase-data-provider" ||
                answers["data-provider"] === "data-provider-strapi-v4" ||
                answers["data-provider"] === "appwrite-data-provider",
            default: "none",
        },
        {
            name: "example-resource",
            message: "Do you want to add example pages?",
            type: "select",
            choices: [
                { message: "No", name: "no" },
                {
                    message: "Yes (Recommended)",
                    name: "example-resource",
                },
            ],
            skip: ({ answers }) =>
                answers["ui-framework"] === "no" ||
                answers["data-provider"] === "strapi-data-provider" ||
                answers["data-provider"] === "airtable-data-provider" ||
                answers["data-provider"] === "supabase-data-provider" ||
                answers["data-provider"] === "data-provider-graphql" ||
                answers["data-provider"] === "strapi-graphql-data-provider" ||
                answers["data-provider"] === "altogic-data-provider" ||
                answers["data-provider"] === "data-provider-strapi-v4" ||
                answers["data-provider"] === "appwrite-data-provider" ||
                answers["data-provider"] === "hasura-data-provider" ||
                answers["ui-framework"] !== "antd",
            default: "no",
        },
        {
            name: "mui-example-resource",
            message: "Do you want to add example pages?",
            type: "select",
            choices: [
                { message: "No", name: "no" },
                {
                    message: "Yes (Recommended)",
                    name: "mui-example-resource",
                },
            ],
            skip: ({ answers }) =>
                answers["ui-framework"] === "no" ||
                answers["data-provider"] === "strapi-data-provider" ||
                answers["data-provider"] === "airtable-data-provider" ||
                answers["data-provider"] === "supabase-data-provider" ||
                answers["data-provider"] === "data-provider-graphql" ||
                answers["data-provider"] === "strapi-graphql-data-provider" ||
                answers["data-provider"] === "altogic-data-provider" ||
                answers["data-provider"] === "data-provider-strapi-v4" ||
                answers["data-provider"] === "appwrite-data-provider" ||
                answers["data-provider"] === "hasura-data-provider" ||
                answers["ui-framework"] !== "mui",
            default: "no",
        },
        {
            name: "antd-custom-layout",
            message: "Do you want a customized layout?",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "No", name: "no" },
                { message: "Yes", name: "antd-custom-layout" },
            ],
            default: "no",
            skip: ({ answers }) => answers["ui-framework"] !== "antd",
        },
        {
            name: "mui-custom-layout",
            message: "Do you want a customized layout?",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "No", name: "no" },
                { message: "Yes", name: "mui-custom-layout" },
            ],
            default: "no",
            skip: ({ answers }) => answers["ui-framework"] !== "mui",
        },
        {
            name: "i18n",
            message: "i18n - Internationalization:",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "No", name: "no" },
                { message: "Yes", name: "i18n" },
            ],
            default: "no",
            skip: ({ answers }) => answers["ui-framework"] !== "no",
        },
        {
            name: "i18n",
            message: "i18n - Internationalization:",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "No", name: "no" },
                { message: "Yes", name: "i18n-antd" },
            ],
            default: "no",
            skip: ({ answers }) => answers["ui-framework"] !== "antd",
        },
        {
            name: "i18n",
            message: "i18n - Internationalization:",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "No", name: "no" },
                { message: "Yes", name: "i18n-mui" },
            ],
            default: "no",
            skip: ({ answers }) => answers["ui-framework"] !== "mui",
        },
        {
            name: "partytown-builder",
            message: "Do you want to add Partytown? (https://partytown.builder.io)",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "No", name: "no" },
                { message: "Yes", name: "partytown-builder" },
            ],
            default: "no",
            skip: ({ answers }) => answers["ui-framework"] !== "no",
        },
    ],
    ignores: [],
};
