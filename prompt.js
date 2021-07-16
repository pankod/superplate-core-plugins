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
                { message: "Bootstrap", name: "bootstrap" },
                { message: "Chakra UI", name: "chakra-ui" },
                { message: "Antd", name: "antd" },
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
                { message: "MobX", name: "mobx" },
                { message: "Zustand", name: "zustand" },
            ],
            default: "none",
        },
        {
            name: "mobx_state_tree",
            message: "Do you want to use Mobx State Tree ?",
            type: "select",
            choices: [
                { message: "None", name: "none" },
                { message: "Mobx State Tree", name: "mobx-state-tree" },
            ],
            skip: ({ answers }) => answers["state-management"] !== "mobx",
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
                { message: "next-translate", name: "next-translate" },
                { message: "next-i18next", name: "next-i18next" },
            ],
            default: "none",
        },
        {
            name: "linter",
            message: "Linting tools:",
            type: "multiselect",
            hint: "use <arrow-keys> to navigate, <space> to select.",
            pageSize: 10,
            choices: [
                { message: "ESLint", name: "eslint" },
                { message: "Prettier", name: "prettier" },
            ],
            default: [],
        },
        {
            name: "eslint_specific",
            message: "Do you want to use lint-staged?",
            type: "select",
            choices: [
                { message: "None", name: "none" },
                { message: "Lint staged files", name: "lint-staged" },
            ],
            skip: ({ answers }) => !answers.linter.includes("eslint"),
            default: "none",
        },
        {
            name: "testing",
            message: "Testing Framework:",
            type: "select",
            choices: [
                { message: "None", name: "none" },
                { message: "Jest", name: "jest" },
                {
                    message: "React Testing Library + Jest",
                    name: "testing-library",
                },
                { message: "Enzyme + Jest", name: "enzyme" },
            ],
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
                { message: "Travis", name: "travis" },
                { message: "Azure Pipelines", name: "azure-pipelines" },
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
            pattern: ["src/components/**", "pages/index.tsx"],
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
                return !answers.features.includes("storybook");
            },
            pattern: ["**/*.stories.tsx"],
        },
        {
            when: function (answers) {
                return answers.testing === "none";
            },
            pattern: ["**/src/**/*.@(spec|test).@(ts|tsx)"],
        },
        {
            when: function (answers) {
                return answers.testing === "jest";
            },
            pattern: ["**/src/**/*.@(spec|test).@(tsx)"],
        },
        {
            plugin: ["mobx"],
            when: function (answers) {
                return answers.mobx_state_tree === "mobx-state-tree";
            },
            pattern: ["**/src/**/*.d.ts"],
        },
    ],
};
