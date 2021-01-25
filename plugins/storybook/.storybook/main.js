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

        return config;
    },
};
