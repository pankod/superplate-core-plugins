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
    ],
    webpackFinal: async (config) => {
        <%_ if (css_features === "less") { _%>
        config.module.rules.push({
            test: /.*\.less$/,
            use: [
                "style-loader",
                {
                    loader: "less-loader",
                    options: {
                        lessOptions: {
                            javascriptEnabled: true,
                        },
                    },
                },
            ],
        });
        <%_ } _%>

        <%_ if (css_features === "sass") { _%>
        config.module.rules.push({
            // this is for both less and scss
            test: /.*\.(?:sc|c)ss$/,
            use: [
                "style-loader",
                {
                    loader: "css-loader",
                    options: {
                        modules: false,
                    },
                },
                "sass-loader",
            ],
        });
        <%_ } _%>

        return config;
    },
};
