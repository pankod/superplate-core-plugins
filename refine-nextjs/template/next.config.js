const withPlugins = require("next-compose-plugins");
<%_ if (answers["theme-customization"] === "less") { _%>
    const withAntdLess = require('next-plugin-antd-less');
<%_ } 
if (i18n !== "no") { _%>
    const { i18n } = require("./next-i18next.config");
<%_ } _%>

<%_ if (answers["theme-customization"] === "less") { _%>
    const pluginAntdLess = withAntdLess({
        lessVarsFilePath: './src/styles/variables.less',
    });
<%_ } _%>

<%_ if (answers["theme-customization"] === "less" && i18n !== "no") { _%>
    module.exports = withPlugins([[pluginAntdLess]], {
        i18n,
        webpack(config) {
          return config;
        },
        webpack5: true,
      });
<%_ } else if (i18n !== "no") { _%>
    module.exports = withPlugins([], { 
        i18n, experimental: {
            newNextLinkBehavior: true,
        }, });
<%_ } else if (answers["theme-customization"] === "less") { _%>
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