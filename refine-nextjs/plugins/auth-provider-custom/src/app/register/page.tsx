<%_ if (answers["ui-framework"] === "shadcn") { _%>
import { SignUpForm } from "@/components/refine-ui/form/sign-up-form";
<%_ } else { _%>
import { AuthPage } from "@components/auth-page";
<%_ } _%>
import { authProviderServer } from "@providers/auth-provider/auth-provider.server";
import { redirect } from "next/navigation";

export default async function Register() {
    const data = await getData();

    if (data.authenticated) {
        redirect(data?.redirectTo || "/");
    }

<%_ if (answers["ui-framework"] === "shadcn") { _%>
    return <SignUpForm />;
<%_ } else { _%>
    return <AuthPage type="register" />;
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
