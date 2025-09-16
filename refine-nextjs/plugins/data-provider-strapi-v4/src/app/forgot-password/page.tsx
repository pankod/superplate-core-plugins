<%_ if (answers["ui-framework"] === "shadcn") { _%>
import { ForgotPasswordForm } from "@/components/refine-ui/form/forgot-password-form";
<%_ } else { _%>
import { AuthPage } from "@components/auth-page";
<%_ } _%>
import { authProviderServer } from "@providers/auth-provider/auth-provider.server";
import { redirect } from "next/navigation";

export default async function ForgotPassword() {
    const data = await getData();

    if (data.authenticated) {
        redirect(data?.redirectTo || "/");
    }

<%_ if (answers["ui-framework"] === "shadcn") { _%>
    return <ForgotPasswordForm />;
<%_ } else { _%>
    return <AuthPage type="forgotPassword" />;
<%_ } _%>
}

async function getData() {
    const { authenticated, redirectTo, error } =
        await authProviderServer.check();

    return {
        authenticated,
        redirectTo,
        error,
    };
}
