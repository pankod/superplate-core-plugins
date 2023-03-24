import { WelcomePage } from "@refinedev/core";
import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { authProvider } from "~/authProvider";

export default function Index() {
    return <WelcomePage />;
}

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