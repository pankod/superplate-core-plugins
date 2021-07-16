<%_ if (ui.includes("chakra-ui") || ui.includes("tailwind")) { _%>
const path = require("path");
<%_ } _%>

<%_ if (ui.includes("chakra-ui")) { _%>
const toPath = (_path) => path.join(process.cwd(), _path);
<%_ } _%>

module.exports = {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-controls",
        "@storybook/addon-knobs",
        "@storybook/preset-create-react-app",
        <%_ if (css_features.includes("styled-components")) { _%>
        "storybook-addon-styled-component-theme/dist/register",
        <%_ } _%>
    ],
    webpackFinal: async (config) => {
        <%_ if (css_features === "scss") { _%>
        config.module.rules.push({
            // this is for both less and scss
            test: /.*\.(?:sc|c)ss$/,
            use: [
                "style-loader",
                {
                    loader: "css-loader",
                    options: {
                        modules: true,
                    },
                },
                "sass-loader",
            ],
        });
        <%_ } _%>

        <%_ if (ui.includes("chakra-ui")) { _%>
        config = {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve.alias,
                    "@emotion/core": toPath("node_modules/@emotion/react"),
                    "emotion-theming": toPath("node_modules/@emotion/react")
                }
            }
        }
        <%_ } _%>

        <%_ if (ui.includes("tailwind")) { _%>
        config.module.rules.push({
            test: /\,css&/,
            use: [
                {
                loader: "postcss-loader",
                options: {
                    ident: "postcss",
                    plugins: [require("tailwindcss"), require("autoprefixer")],
                },
                },
            ],
            include: path.resolve(__dirname, "../"),
        });
        <%_ } _%>

        return config;
    },
};
