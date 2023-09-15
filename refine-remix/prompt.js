module.exports = {
    prompts: [
        {
            name: "data-provider",
            message: "Choose your backend service to connect:",
            type: "select",
            pageSize: 2,
            choices: [
                {
                    message: "REST API",
                    name: "data-provider-custom-json-rest",
                    hint: "Installs REST API Data Provider.",
                },
                {
                    message: "NestJS Query",
                    name: "data-provider-nestjs-query",
                    hint: "Installs NestJS Query Data Provider.",
                },
                {
                    message: "GraphQL API",
                    name: "data-provider-graphql",
                    hint: "Installs GraphQL API Data Provider.",
                },
                {
                    message: "Strapi v4",
                    name: "data-provider-strapi-v4",
                    hint: "Installs Strapi v4 Data Provider.",
                },
                {
                    message: "nestjsx-crud",
                    name: "data-provider-nestjsx-crud",
                    hint: "Installs Nestjsx-crud Data Provider.",
                },
                {
                    message: "Airtable",
                    name: "data-provider-airtable",
                    hint: "Installs Airtable Data Provider.",
                },
                {
                    message: "Supabase",
                    name: "data-provider-supabase",
                    hint: "Installs Supabase Data Provider.",
                },
                {
                    message: "Appwrite",
                    name: "data-provider-appwrite",
                    hint: "Installs Appwrite Data Provider.",
                },
                {
                    message: "Hasura",
                    name: "data-provider-hasura",
                    hint: "Installs Hasura Data Provider.",
                },
                {
                    message: "Medusa",
                    name: "data-provider-medusa",
                    hint: "Installs Medusa Data Provider.",
                },
            ],
            default: "data-provider-custom-json-rest",
        },
        {
            name: "ui-framework",
            message: "Do you want to use a UI Framework?:",
            type: "select",
            pageSize: 2,
            choices: [
                {
                    message: "Headless",
                    name: "no",
                    hint: "No UI framework package will be installed.",
                },
                {
                    message: "Ant Design",
                    name: "antd",
                    hint: "Installs Ant Design package.",
                },
                {
                    message: "Material UI",
                    name: "mui",
                    hint: "Installs Material UI package.",
                },
                {
                    message: "Mantine",
                    name: "mantine",
                    hint: "Installs Mantine package.",
                },
                {
                    message: "Chakra UI",
                    name: "chakra",
                    hint: "Installs Chakra UI package.",
                },
            ],
            default: "no",
        },
        {
            name: "inferencer",
            message: "Do you want to add example pages?:",
            type: "select",
            choices: [
                {
                    message: "No",
                    name: "no",
                    hint: "No examples will be installed.",
                },
                {
                    message: "Yes (Recommended)",
                    name: "inferencer",
                    hint: "Installs example pages.",
                },
            ],
            skip: ({ answers }) =>
                answers["ui-framework"] === "no" ||
                answers["data-provider"] === "data-provider-graphql" ||
                answers["data-provider"] === "data-provider-medusa" ||
                answers["data-provider"] === "data-provider-nestjs-query",
            default: "no",
        },
        {
            name: "inferencer-headless",
            message: "Do you want to add example pages?:",
            type: "select",
            choices: [
                {
                    message: "No",
                    name: "no",
                    hint: "No examples will be installed.",
                },
                {
                    message: "Yes (Recommended)",
                    name: "inferencer-headless",
                    hint: "Installs example pages.",
                },
            ],
            skip: ({ answers }) =>
                answers["ui-framework"] !== "no" ||
                answers["data-provider"] === "data-provider-graphql" ||
                answers["data-provider"] === "data-provider-medusa" ||
                answers["data-provider"] === "data-provider-nestjs-query",
            default: "no",
        },
        {
            name: "auth-provider",
            message: "Do you need any Authentication logic?:",
            type: "select",
            choices: [
                {
                    message: "None",
                    name: "none",
                    hint: "No Auth Provider will be installed.",
                },
                {
                    message: "Custom",
                    name: "auth-provider-custom",
                    hint: "Installs a mock Auth Provider.",
                },
                {
                    message: "Auth0",
                    name: "auth-provider-auth0",
                    hint: "Installs Auth0 with Remix-Auth",
                },
                {
                    message: "Google",
                    name: "auth-provider-google",
                    hint: "Installs Google with Remix-Auth",
                },
                {
                    message: "Keycloak",
                    name: "auth-provider-keycloak",
                    hint: "Installs Keycloak with Remix-Auth",
                },
            ],
            skip: ({ answers }) =>
                answers["data-provider"] === "data-provider-supabase" ||
                answers["data-provider"] === "data-provider-strapi-v4" ||
                answers["data-provider"] === "data-provider-appwrite" ||
                answers["data-provider"] === "data-provider-medusa" ||
                answers["data-provider"] === "data-provider-nhost",
            default: "none",
        },
    ],
    ignores: [
        {
            plugin: ["data-provider-appwrite"],
            when: function (answers) {
                return answers["ui-framework"] !== "antd";
            },
            pattern: ["app/utility/normalize.ts"],
        },
        {
            plugin: ["_base"],
            when: function (answers) {
                return (
                    typeof answers["svg"] === "undefined" ||
                    answers["ui-framework"] === "no"
                );
            },
            pattern: ["app/components/app-icon/index.tsx"],
        },
        {
            plugin: ["_base"],
            when: function (answers) {
                return answers["ui-framework"] !== "no";
            },
            pattern: [
                "app/components/breadcrumb/index.tsx",
                "app/components/layout/index.tsx",
                "app/components/menu/index.tsx",
                "app/global.css",
            ],
        },
    ],
};
