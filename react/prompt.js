module.exports = {
    prompts: [
        {
            name: "ui",
            message: "UI framework:",
            type: "select",
            pageSize: 3,
            choices: [
                { message: "None", name: "none" },
                { message: "Tailwind CSS", name: "tailwind" },
                { message: "Chakra UI", name: "chakra-ui" },
                { message: "Ant Design", name: "antd" },
            ],
            default: "none",
        },
        {
            name: "css_features",
            message: "CSS Preprocessor:",
            type: "select",
            pageSize: 2,
            choices: [
                {
                    message: "None (built-in support for css and styled-jsx)",
                    name: "css",
                },
                { message: "sass/scss", name: "scss" },
                { message: "styled-components", name: "styled-components" },
            ],
            default: "css",
        },
        {
            name: "styled_specific",
            message: "Do you also want to add styled-system ?",
            type: "select",
            choices: [
                { message: "None", name: "none" },
                { message: "styled-system", name: "styled-system" },
            ],
            skip: ({ answers }) => answers.css_features !== "styled-components",
            default: "none",
        },
        {
            name: "features",
            message: "Features:",
            hint: "use <arrow-keys> to navigate, <space> to select.",
            type: "multiselect",
            pageSize: 2,
            choices: [
                { message: "Fetch (next.js built-in)", name: "fetch" },
                { message: "Axios", name: "axios" },
                { message: "Storybook", name: "storybook" },
                { message: "SVGR", name: "svgr" },
                { message: "Environment Variables", name: "env" },
                { message: "Reverse Proxy", name: "reverse-proxy" },
                { message: "Bundle Analyzer", name: "bundle-analyzer" },
                { message: "Apollo GraphQL", name: "apollo-graphql" },
                { message: "graphql-request", name: "graphql-request" },
            ],
            default: "none",
        },
        {
            name: "hooks",
            message: "Hooks",
            hint: "use <arrow-keys> to navigate, <space> to select.",
            type: "multiselect",
            choices: [
                { message: "SWR", name: "swr" },
                { message: "React Query", name: "react-query" },
                { message: "React Use", name: "react-use" },
            ],
            default: "none",
        },
        {
            name: "state-management",
            message: "State Management:",
            type: "select",
            pageSize: 3,
            choices: [
                { message: "None", name: "none" },
                { message: "Redux + Redux Toolkit", name: "redux" },
                { message: "Recoil", name: "recoil" },
                { message: "Zustand", name: "zustand" },
            ],
            default: "none",
        },
        {
            name: "rtk-query",
            message: "Do you want to use RTK Query ?",
            type: "select",
            choices: [
                { message: "None", name: "none" },
                { message: "RTK Query", name: "rtk-query" },
            ],
            skip: ({ answers }) => answers["state-management"] !== "redux",
            default: "none",
        },
        {
            name: "i18n",
            message: "i18n - Internationalization",
            type: "select",
            choices: [
                { message: "None", name: "none" },
                { message: "react-i18next", name: "react-i18next" },
            ],
            default: "none",
        },
        {
            name: "linter",
            message: "Linting tools:",
            type: "select",
            hint: "use <arrow-keys> to navigate, <space> to select.",
            pageSize: 10,
            choices: [
                { message: "ESLint (built-in support)", name: "eslint" },
                { message: "Lint staged files", name: "lint-staged" },
            ],
            default: "eslint",
        },
        {
            name: "testing",
            message: "Testing Framework:",
            type: "select",
            choices: [
                { message: "Jest", name: "jest" },
                {
                    message: "React Testing Library",
                    name: "testing-library",
                },
            ],
            default: "jest",
        },
        {
            name: "e2etest",
            message: "E2E Testing framework:",
            type: "select",
            choices: [
                { message: "None", name: "none" },
                { message: "Cypress", name: "cypress" },
                { message: "WebdriverIO", name: "webdriverio" },
            ],
            default: "none",
        },
        {
            name: "docker",
            message: "Docker integration:",
            type: "select",
            pageSize: 3,
            choices: [
                { message: "None", name: "none" },
                { message: "Dockerfile", name: "Docker" },
            ],
            default: "none",
        },
        {
            name: "CI",
            message: "Continuous integration:",
            type: "select",
            choices: [
                { message: "None", name: "none" },
                { message: "GitHub Actions", name: "github-actions" },
            ],
            default: "none",
        },
    ],
    ignores: [
        {
            plugin: ["css", "scss", "styled-components"],
            when: function (answers) {
                return answers.ui !== "none";
            },
            pattern: ["src/components/**", "src/pages/index.tsx"],
        },
        {
            when: function (answers) {
                return answers.css_features !== "css";
            },
            pattern: ["**/*.css"],
        },
        {
            when: function (answers) {
                return answers.css_features !== "scss";
            },
            pattern: ["**/*.s@(c|a)ss"],
        },
        {
            when: function (answers) {
                return !(
                    answers.features && answers.features.includes("storybook")
                );
            },
            pattern: ["**/*.stories.tsx"],
        },
        {
            when: function (answers) {
                return answers.testing === "jest";
            },
            pattern: ["**/src/**/*.@(spec|test).@(tsx)"],
        },
    ],
};
