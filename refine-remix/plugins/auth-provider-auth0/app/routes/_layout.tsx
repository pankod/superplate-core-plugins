import { Outlet } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
<%_ if (answers["ui-framework"] === 'antd') { _%>
     import { Layout } from "@refinedev/antd";
 <%_ } _%>
 <%_ if (answers["ui-framework"] === 'mui') { _%>
     import { Layout } from "@refinedev/mui";
 <%_ } _%>
 <%_ if (answers["ui-framework"] === 'mantine') { _%>
     import { Layout } from "@refinedev/mantine";
 <%_ } _%>
 <%_ if (answers["ui-framework"] === 'chakra') { _%>
     import { Layout } from "@refinedev/chakra-ui";
 <%_ } _%>
 import { RefineKbar } from "@refinedev/kbar";

import { Header } from "@components/header";
import { authenticator } from "~/utils/auth.server";

export default function BaseLayout() {
    return (
        <>
             <%_ if (answers["ui-framework"] === 'no') { _%>
                <Outlet />
                <RefineKbar />
            <%_ } else { _%>
                <Layout Header={Header}>
                    <Outlet />
                </Layout>
                <RefineKbar />
            <%_ } _%>
        </>
    );
}

/**
 * We're checking if the current session is authenticated.
 * If not, we're redirecting the user to the login page.
 * This is applied for all routes that are nested under this layout (_protected).
 */
export const loader = async ({ request }: LoaderArgs) => {
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
