<%# https://github.com/refinedev/refine/issues/5197 %>
<%# We need to add @refinedev/nextjs-router to the next.config.js#transpilePackages to avoid ssr mismatches. %>

<%# https://github.com/refinedev/refine/issues/4998 %>
<%# Also if user selects ant design we need to add @refinedev/antd and if they selected example pages (inferencer is installed) we can add @refinedev/inferencer as well. %>

<%_if (answers["ui-framework"] === "antd" && answers["inferencer"] === 'inferencer' && answers[`i18n-${answers["ui-framework"]}`] !== "no") {_%>
    const { i18n } = require("./next-i18next.config");

    module.exports = {
        i18n,
        transpilePackages: [
            "@refinedev/nextjs-router", 
            "@refinedev/antd",
            "@refinedev/inferencer",
        ],
    };
<%_ } else if (answers["ui-framework"] === "antd" && answers["inferencer"] === 'no' && answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
    const { i18n } = require("./next-i18next.config");

    module.exports = {
        i18n,
        transpilePackages: [
            "@refinedev/nextjs-router", 
            "@refinedev/antd",
        ],
    };
<%_ } else if (answers["ui-framework"] === "antd" && answers["inferencer"] === 'inferencer' && answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
    module.exports = {
        transpilePackages: [
          "@refinedev/nextjs-router", 
          "@refinedev/antd",
          "@refinedev/inferencer",
        ],
      };
<%_ } else if (answers["ui-framework"] === "antd" && answers["inferencer"] === 'no' && answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
    module.exports = {
        transpilePackages: [
          "@refinedev/nextjs-router", 
          "@refinedev/antd",
        ],
      };
<%_ } else if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
    const { i18n } = require("./next-i18next.config");

    module.exports = {
        i18n,
        transpilePackages: [
            "@refinedev/nextjs-router", 
        ],
    };
<%_ } else { _%>
    module.exports = {
        transpilePackages: [
            "@refinedev/nextjs-router", 
        ],
    };
<%_ } _%>

