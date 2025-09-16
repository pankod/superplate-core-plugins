<%_ if (answers["ui-framework"] === "shadcn") { _%>
import { SignUpForm } from "@/components/refine-ui/form/sign-up-form";
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

export const Register = () => {
 <%_ if (answers["ui-framework"] === "shadcn") { _%>
     return <SignUpForm />;
 <%_ } else { _%>
     return <AuthPage type="register" />;
 <%_ } _%>
};
