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
            name: "router-provider",
            message: "Router Provider:",
            type: "select",
            choices: [
                { message: "React Router v6", name: "react-router-v6" },
                { message: "React Location", name: "react-location" },
            ],
            default: "react-router-v6",
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
                { message: "Strapi v3", name: "data-provider-strapi" },
                {
                    message: "Strapi GraphQL",
                    name: "data-provider-strapi-graphql",
                },
                { message: "nestjsx-crud", name: "data-provider-nestjsx-crud" },
                {
                    message: "Airtable",
                    name: "data-provider-airtable",
                },
                {
                    message: "Supabase",
                    name: "data-provider-supabase",
                },
                {
                    message: "Altogic",
                    name: "data-provider-altogic",
                },
                {
                    message: "Appwrite",
                    name: "data-provider-appwrite",
                },
                {
                    message: "Hasura",
                    name: "data-provider-hasura",
                },
                {
                    message: "nHost",
                    name: "data-provider-nhost",
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
                { message: "Custom", name: "auth-provider-custom" },
                { message: "Auth0", name: "auth-provider-auth0" },
                { message: "Google", name: "auth-provider-google" },
            ],
            skip: ({ answers }) =>
                answers["data-provider"] === "data-provider-strapi" ||
                answers["data-provider"] === "data-provider-strapi-graphql" ||
                answers["data-provider"] === "data-provider-supabase" ||
                answers["data-provider"] === "data-provider-strapi-v4" ||
                answers["data-provider"] === "data-provider-appwrite" ||
                answers["data-provider"] === "data-provider-nhost",
            default: "none",
        },
        {
            name: "antd-example-pages",
            message: "Do you want to add example pages?",
            type: "select",
            choices: [
                { message: "No", name: "no" },
                {
                    message: "Yes (Recommended)",
                    name: "antd-example-pages",
                },
            ],
            skip: ({ answers }) =>
                answers["ui-framework"] === "no" ||
                answers["data-provider"] === "data-provider-strapi" ||
                answers["data-provider"] === "data-provider-airtable" ||
                answers["data-provider"] === "data-provider-supabase" ||
                answers["data-provider"] === "data-provider-graphql" ||
                answers["data-provider"] === "data-provider-strapi-graphql" ||
                answers["data-provider"] === "data-provider-altogic" ||
                answers["data-provider"] === "data-provider-strapi-v4" ||
                answers["data-provider"] === "data-provider-appwrite" ||
                answers["data-provider"] === "data-provider-hasura" ||
                answers["data-provider"] === "data-provider-nhost" ||
                answers["ui-framework"] !== "antd",
            default: "no",
        },
        {
            name: "mui-example-pages",
            message: "Do you want to add example pages?",
            type: "select",
            choices: [
                { message: "No", name: "no" },
                {
                    message: "Yes (Recommended)",
                    name: "mui-example-pages",
                },
            ],
            skip: ({ answers }) =>
                answers["ui-framework"] === "no" ||
                answers["data-provider"] === "data-provider-strapi" ||
                answers["data-provider"] === "data-provider-airtable" ||
                answers["data-provider"] === "data-provider-supabase" ||
                answers["data-provider"] === "data-provider-graphql" ||
                answers["data-provider"] === "data-provider-strapi-graphql" ||
                answers["data-provider"] === "data-provider-altogic" ||
                answers["data-provider"] === "data-provider-strapi-v4" ||
                answers["data-provider"] === "data-provider-appwrite" ||
                answers["data-provider"] === "data-provider-hasura" ||
                answers["data-provider"] === "data-provider-nhost" ||
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
            name: "command-palette",
            message: "Do you want to add Kbar command pallette:",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "No", name: "no" },
                { message: "Yes", name: "kbar" },
            ],
            default: "no",
        },
        {
            name: "i18n-no",
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
            name: "i18n-antd",
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
            name: "i18n-mui",
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
            message:
                "Do you want to add Partytown? (https://partytown.builder.io)",
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
    ignores: [
        {
            plugin: ["data-provider-nhost", "data-provider-appwrite"],
            when: function (answers) {
                return answers["ui-framework"] !== "antd";
            },
            pattern: ["src/utility/normalize.ts"],
        },
    ],
};
