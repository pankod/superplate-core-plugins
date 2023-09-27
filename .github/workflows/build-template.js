#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const core = require("@actions/core");
const { api } = require("superplate-cli");

const FRAMEWORK = process.env.FRAMEWORK;
const DATA_PROVIDER = process.env.DATA_PROVIDER;
const UI_FRAMEWORK = process.env.UI_FRAMEWORK;

const randomString = (length) => {
    const chars =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = length; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)];
    return result;
};

const buildTemplate = async () => {
    const dataProviderMap = {
        "custom-json-rest": ["keycloak", "custom"],
        "strapi-v4": "strapi",
        "nestjsx-crud": ["google", "custom"],
        airtable: ["auth0", "custom"],
        supabase: "supabase",
        appwrite: "appwrite",
        hasura: ["keycloak", "custom"],
    };

    let AUTH_PROVIDER = dataProviderMap[DATA_PROVIDER];

    if (Array.isArray(AUTH_PROVIDER)) {
        const randomIndex = Math.floor(Math.random() * AUTH_PROVIDER.length);
        AUTH_PROVIDER = AUTH_PROVIDER[randomIndex];
    }

    console.log(
        "Creating boilerplate for: ",
        FRAMEWORK,
        DATA_PROVIDER,
        AUTH_PROVIDER,
        UI_FRAMEWORK,
    );

    const body = {
        projectName: "refine-project",
        type: `refine-${FRAMEWORK}}`,
        name: "refine-project",
        answers: {
            name: "refine-project",
            title: "refine Project",
            theme: "Blue",
            icon: "refine.svg",
            "data-provider": `data-provider-${DATA_PROVIDER}`,
            "ui-framework": UI_FRAMEWORK,
            [UI_FRAMEWORK === "no" ? "inferencer-headless" : "inferencer"]:
                UI_FRAMEWORK === "no" ? "inferencer-headless" : "inferencer",
            "auth-provider": `auth-provider-${AUTH_PROVIDER}`,
            [`i18n-${UI_FRAMEWORK}`]:
                UI_FRAMEWORK === "no" ? "i18n" : `i18n-${UI_FRAMEWORK}`,
        },
    };

    if (["react", "vite"].includes(FRAMEWORK)) {
        body.answers["router-provider"] = "react-router-v6";
    }

    const randomDir = randomString(25);

    fs.cpSync(
        path.resolve(path.join(process.cwd(), `refine-${FRAMEWORK}`)),
        `tmp/${randomDir}/template`,
        {
            recursive: true,
        },
    );

    await api(
        "refine-project",
        path.resolve(path.join(process.cwd(), "tmp", randomDir)),
        path.resolve(path.join(process.cwd(), "tmp", randomDir, "template")),
        body,
    );

    core.setOutput("auth_provider", AUTH_PROVIDER);
    core.setOutput("project_path", `tmp/${randomDir}/refine-project`);
};

buildTemplate().then(() => {
    console.log("Completed");
});
