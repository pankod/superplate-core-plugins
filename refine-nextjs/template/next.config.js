<%# https://github.com/refinedev/refine/issues/5197 %>
<%# We need to add @refinedev/nextjs-router to the next.config.js#transpilePackages to avoid ssr mismatches. %>

<%# https://github.com/refinedev/refine/issues/4998 %>
<%# Also if user selects ant design we need to add @refinedev/antd and if they selected example pages (inferencer is installed) we can add @refinedev/inferencer as well. %>
 
<%_ if (answers["ui-framework"] === "antd") { _%>
    module.exports = {
        transpilePackages: [
          "@refinedev/nextjs-router", 
          "@refinedev/antd",
        ],
      };
<%_ } else { _%>
    module.exports = {
        transpilePackages: [
            "@refinedev/nextjs-router", 
        ],
    };
<%_ } _%>