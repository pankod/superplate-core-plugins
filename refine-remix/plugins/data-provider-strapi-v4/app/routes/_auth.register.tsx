<%_ if (answers["ui-framework"] === 'antd') { _%>
    import { AuthPage } from "@refinedev/antd";
 <%_ } _%>
 <%_ if (answers["ui-framework"] === 'mui') { _%>
     import { AuthPage } from "@refinedev/mui";
 <%_ } _%>
 <%_ if (answers["ui-framework"] === "no" || answers["ui-framework"] === "tailwindcss") { _%>
    import { AuthPage } from "@refinedev/core";
<%_ } _%>

export default function Register() {
    return (
        <AuthPage type="register" />
    );
}
