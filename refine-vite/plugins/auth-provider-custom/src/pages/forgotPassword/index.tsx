<%_ if (answers["ui-framework"] === "shadcn") { _%>
import { ForgotPasswordForm } from "@/components/refine-ui/form/forgot-password-form";
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

export const ForgotPassword = () => {
<%_ if (answers["ui-framework"] === "shadcn") { _%>
    return <ForgotPasswordForm />;
<%_ } else { _%>
    return (
        <AuthPage
            type="forgotPassword"
        />
    );
<%_ } _%>
};
