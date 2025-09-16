<%_ if (answers["ui-framework"] === "shadcn") { _%>
import { SignInForm } from "@/components/refine-ui/form/sign-in-form";
<%_ } _%>
<%_ if (answers["ui-framework"] === "no" || answers["ui-framework"] === "tailwindcss") { _%>
    import { AuthPage } from "@refinedev/core";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'antd') { _%>
import {
    AuthPage,
} from "@refinedev/antd";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mui') { _%>
import {
    AuthPage,
} from "@refinedev/mui";
<%_ } _%>

export const Login = () => {

    <%_ if (answers["ui-framework"] === "shadcn") { _%>
        return <SignInForm />;
    <%_ } else { _%>
        return <AuthPage type="login" <%- (_app.authPageProps || []).join("\n") %> />;
    <%_ } _%>

};
