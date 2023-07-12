<%_if (answers["ui-framework"] === "antd" && answers[`i18n-${answers["ui-framework"]}`] !== "no") {_%>
    const { i18n } = require("./next-i18next.config");

    module.exports = {
        i18n, experimental: {
            newNextLinkBehavior: true,
        },
    };
<%_ } else if (answers["ui-framework"] === "antd" && answers[`i18n-${answers["ui-framework"]}`] === "no") { _%>
    module.exports = {
        experimental: {
            newNextLinkBehavior: true,
        },
    };
<%_ } else if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
    const { i18n } = require("./next-i18next.config");

    module.exports = {
        i18n, experimental: {
            newNextLinkBehavior: true,
        },
    };
<%_ } else { _%>
    module.exports = {
        experimental: {
            newNextLinkBehavior: true,
        },
    };
<%_ } _%>

