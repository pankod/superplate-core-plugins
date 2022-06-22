module.exports = {
    prompts: [
        {
            name: "ui-framework",
            message: "Do you want to use a UI Framework?:",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "No (Headless)", name: "no" },
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
                { message: "Default theme", name: "antd-css" },
                { message: "Custom theme (less)", name: "antd-less" },
            ],
            default: "antd-css",
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
            default: "no",
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
