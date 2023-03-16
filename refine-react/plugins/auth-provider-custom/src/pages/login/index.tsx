<%_ if (answers["ui-framework"] === 'antd') { _%>
    import { AuthPage } from "@refinedev/antd";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mui') { _%>
    import { AuthPage } from "@refinedev/mui";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mantine') { _%>
    import { AuthPage } from "@refinedev/mantine";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'chakra') { _%>
    import { AuthPage } from "@refinedev/chakra-ui";
<%_ } _%>
<%_ if (answers[`ui-framework`] === "no") { _%>
    import { AuthPage } from "@refinedev/core";
<%_ } _%>

export const Login = () => {
    return <AuthPage type="login" <%- (_app.authPageProps || []).join("\n") %> />;
};
