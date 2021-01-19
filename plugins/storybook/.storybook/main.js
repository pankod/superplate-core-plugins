module.exports = {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-scss",
        "@storybook/addon-controls",
        "@storybook/addon-knobs",
        <%_ if (css_features.includes("styled-components")) { _%>
        "storybook-addon-styled-component-theme/dist/register",
        <%_ } _%>
    ],
};
