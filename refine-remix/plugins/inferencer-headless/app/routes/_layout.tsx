import { Outlet } from "@remix-run/react";
<%_ if (_app.isAuthProviderCheck) { _%>
import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { authProvider } from "~/authProvider";
<%_ } _%>

import { Layout } from "~/components/layout";

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
export async function loader({ request }: LoaderArgs) {
const { authenticated, redirectTo } = await authProvider.check(request);

if (!authenticated) {
    throw redirect(redirectTo ?? "/login");
}

return {};
}
<%_ } _%>