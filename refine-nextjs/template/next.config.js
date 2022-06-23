const withPlugins = require("next-compose-plugins");
<%_ if (answers["antd-theme-customization"] === "antd-less") { _%>
    const withAntdLess = require('next-plugin-antd-less');
<%_ } 
if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
    const { i18n } = require("./next-i18next.config");
<%_ } _%>

<%_ if (answers["antd-theme-customization"] === "antd-less") { _%>
    const pluginAntdLess = withAntdLess({
        lessVarsFilePath: './src/styles/variables.less',
    });
<%_ } _%>

<%_ if (answers["antd-theme-customization"] === "antd-less" && answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
    module.exports = withPlugins([[pluginAntdLess]], {
        i18n,
        webpack(config) {
          return config;
        },
        webpack5: true,
      });
<%_ } else if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
    module.exports = withPlugins([], { 
        i18n, experimental: {
            newNextLinkBehavior: true,
        }, });
<%_ } else if (answers["antd-theme-customization"] === "antd-less") { _%>
    module.exports = withPlugins([[pluginAntdLess]], {
        webpack(config) {
            return config;
        },
        webpack5: true,
        });
<%_ } else { _%>
    module.exports = withPlugins([], {
        experimental: {
            newNextLinkBehavior: true,
        },
    });
<%_ } _%>