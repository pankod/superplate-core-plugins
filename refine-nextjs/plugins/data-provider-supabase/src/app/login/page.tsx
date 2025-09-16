<%_ if (answers["ui-framework"] === "shadcn") { _%>
import { SignInForm } from "@/components/refine-ui/form/sign-in-form";
<%_ } else { _%>
import { AuthPage } from "@components/auth-page";
<%_ } _%>
import { authProviderServer } from "@providers/auth-provider/auth-provider.server";
import { redirect } from "next/navigation";

export default async function Login() {
    const data = await getData();

    if (data.authenticated) {
        redirect(data?.redirectTo || "/");
    }

<%_ if (answers["ui-framework"] === "shadcn") { _%>
    return <SignInForm />;
<%_ } else { _%>
    return <AuthPage type="login" />;
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
