module.exports = {
    prompts: [
        {
            name: "uiFramework",
            message: "Do you want to use an UI Framework?:",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "No (headless)", name: "no" },
                { message: "Yes, I want Ant Design", name: "antd" },
                { message: "Yes, I want Material UI", name: "mui" },
            ],
            default: "no",
        },
        {
            name: "antd-theme-customization",
            message: "Do you want to customize theme?:",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "No (Ant Design default theme)", name: "css" },
                { message: "Yes, I want (less)", name: "less" },
            ],
            default: "css",
            skip: ({ answers }) => answers.uiFramework !== "antd",
        },
        {
            name: "mui-theme-extend",
            message: "Do you want to extend theme?:",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "No", name: "no" },
                { message: "Yes", name: "mui-extended-theme" },
            ],
            default: "css",
            skip: ({ answers }) => answers.uiFramework !== "mui",
        },
        {
            name: "mui-dark-mode",
            message: "Do you want to add dark mode?:",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "No", name: "no" },
                { message: "Yes", name: "mui-dark-mode" },
            ],
            default: "css",
            skip: ({ answers }) => answers.uiFramework !== "mui",
        },
        {
            name: "routerProvider",
            message: "Router Provider:",
            type: "select",
            choices: [
                { message: "React Router v6", name: "react-router-v6" },
                { message: "React Location", name: "react-location" },
            ],
            default: "react-router-v6",
        },
        {
            name: "dataProvider",
            message: "Data Provider:",
            type: "select",
            pageSize: 2,
            choices: [
                {
                    message: "REST API",
                    name: "custom-json-rest-data-provider",
                },
                {
                    message: "GraphQL API",
                    name: "graphql-data-provider",
                },
                {
                    message: "Strapi v4",
                    name: "strapi-v4-data-provider",
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
                {
                    message: "nHost",
                    name: "nhost-data-provider",
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
                answers.dataProvider === "strapi-data-provider" ||
                answers.dataProvider === "strapi-graphql-data-provider" ||
                answers.dataProvider === "supabase-data-provider" ||
                answers.dataProvider === "strapi-v4-data-provider" ||
                answers.dataProvider === "appwrite-data-provider" ||
                answers.dataProvider === "nhost-data-provider",
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
                answers.uiFramework === "no" ||
                answers.dataProvider === "strapi-data-provider" ||
                answers.dataProvider === "airtable-data-provider" ||
                answers.dataProvider === "supabase-data-provider" ||
                answers.dataProvider === "graphql-data-provider" ||
                answers.dataProvider === "strapi-graphql-data-provider" ||
                answers.dataProvider === "altogic-data-provider" ||
                answers.dataProvider === "strapi-v4-data-provider" ||
                answers.dataProvider === "appwrite-data-provider" ||
                answers.dataProvider === "hasura-data-provider" ||
                answers.dataProvider === "nhost-data-provider" ||
                answers.uiFramework !== "antd",
            default: "no",
        },
        {
            name: "mui-example-resource",
            message: "Do you want to add an example page?",
            type: "select",
            choices: [
                { message: "No", name: "no" },
                {
                    message: "Yes, I want (recommended)",
                    name: "mui-example-resource",
                },
            ],
            skip: ({ answers }) =>
                answers.uiFramework === "no" ||
                answers.dataProvider === "strapi-data-provider" ||
                answers.dataProvider === "airtable-data-provider" ||
                answers.dataProvider === "supabase-data-provider" ||
                answers.dataProvider === "graphql-data-provider" ||
                answers.dataProvider === "strapi-graphql-data-provider" ||
                answers.dataProvider === "altogic-data-provider" ||
                answers.dataProvider === "strapi-v4-data-provider" ||
                answers.dataProvider === "appwrite-data-provider" ||
                answers.dataProvider === "hasura-data-provider" ||
                answers.dataProvider === "nhost-data-provider" ||
                answers.uiFramework !== "mui",
            default: "no",
        },
        {
            name: "antd-custom-layout",
            message: "Do you want to customize layout?",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "No", name: "no" },
                { message: "Yes, I want", name: "antd-custom-layout" },
            ],
            default: "no",
            skip: ({ answers }) => answers.uiFramework !== "antd",
        },
        {
            name: "mui-custom-layout",
            message: "Do you want to customize layout?",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "No", name: "no" },
                { message: "Yes, I want", name: "mui-custom-layout" },
            ],
            default: "no",
            skip: ({ answers }) => answers.uiFramework !== "mui",
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
            skip: ({ answers }) => answers.uiFramework !== "no",
        },
        {
            name: "i18n",
            message: "i18n - Internationalization:",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "No", name: "no" },
                { message: "Yes, I want", name: "i18n-antd" },
            ],
            default: "no",
            skip: ({ answers }) => answers.uiFramework !== "antd",
        },
        {
            name: "i18n",
            message: "i18n - Internationalization:",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "No", name: "no" },
                { message: "Yes, I want", name: "i18n-mui" },
            ],
            default: "no",
            skip: ({ answers }) => answers.uiFramework !== "mui",
        },
        {
            name: "partytown-builder",
            message: "Do you want to Partytown? (https://partytown.builder.io)",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "No", name: "no" },
                { message: "Yes, I want", name: "partytown-builder" },
            ],
            default: "no",
            skip: ({ answers }) => answers.uiFramework !== "no",
        },
    ],
    ignores: [],
};
