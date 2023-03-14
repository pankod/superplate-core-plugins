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
                answers["data-provider"] === "data-provider-hasura" ||
                answers["data-provider"] === "data-provider-medusa",
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
                answers["data-provider"] === "data-provider-hasura" ||
                answers["data-provider"] === "data-provider-medusa",
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
            ],
            skip: ({ answers }) =>
                answers["data-provider"] === "data-provider-supabase" ||
                answers["data-provider"] === "data-provider-strapi-v4" ||
                answers["data-provider"] === "data-provider-appwrite" ||
                answers["data-provider"] === "data-provider-medusa" ||
                answers["data-provider"] === "data-provider-nhost",
            default: "none",
        },
    ]
};
