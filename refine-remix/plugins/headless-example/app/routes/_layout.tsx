import { Outlet } from "@remix-run/react";
import { Layout } from "~/components/layout";
<%_ if (_app.isAuthProviderCheck) { _%>
    import type { LoaderFunctionArgs } from "@remix-run/node";
    import { redirect } from "@remix-run/node";
    import { authProvider } from "~/authProvider";
<%_ } _%>

<%_ if (_app.isNextAuthCheck) { _%>
    import type { LoaderFunctionArgs } from "@remix-run/node";
    import { redirect } from "@remix-run/node";
    import { authenticator } from "~/utils/auth.server";
<%_ } _%>

export default function BaseLayout() {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
}

<%_ if (_app.isAuthProviderCheck) { _%>
    /**
     * We're checking if the current session is authenticated.
     * If not, we're redirecting the user to the login page.
     * This is applied for all routes that are nested under this layout (_protected).
     */
    export async function loader({ request }: LoaderFunctionArgs) {
    const { authenticated, redirectTo } = await authProvider.check(request);
    
    if (!authenticated) {
        throw redirect(redirectTo ?? "/login");
    }
    
    return {};
    }
<%_ } _%>

<%_ if (_app.isNextAuthCheck) { _%>
/**
 * We're checking if the current session is authenticated.
 * If not, we're redirecting the user to the login page.
 * This is applied for all routes that are nested under this layout (_protected).
 */
export const loader = async ({ request }: LoaderFunctionArgs) => {
    const session = await authenticator.isAuthenticated(request);
    const pathname = new URL(request.url).pathname;

    let to = ``;
    // ignore only `/` routes
    if (pathname !== "/") {
        to = `?to=${pathname}`;
    }

    if (!session) {
        return redirect(`/login${to}`);
    }

    return {};
};
<%_ } _%>