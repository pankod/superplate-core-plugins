import { Outlet } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
<%_ if (answers["ui-framework"] === 'antd') { _%>
import {
    ThemedLayout,
    <%_ if (selectedSvg || selectedIcon) { _%>
    ThemedTitle,
    <%_ } _%>
} from "@refinedev/antd";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mui') { _%>
import {
    ThemedLayout,
    <%_ if (selectedSvg || selectedIcon) { _%>
    ThemedTitle,
    <%_ } _%>
} from "@refinedev/mui";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mantine') { _%>
import {
    ThemedLayout,
    <%_ if (selectedSvg || selectedIcon) { _%>
    ThemedTitle,
    <%_ } _%>
} from "@refinedev/mantine";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'chakra') { _%>
import {
    ThemedLayout,
    <%_ if (selectedSvg || selectedIcon) { _%>
    ThemedTitle,
    <%_ } _%>
} from "@refinedev/chakra-ui";
<%_ } _%>

import { Header } from "@components/header";
import { authenticator } from "~/utils/auth.server";
<%_ if (selectedSvg && answers["ui-framework"] !== "no" ) { _%>
import { AppIcon } from "@components/app-icon";
<%_ } _%>

export default function BaseLayout() {
    return (
        <>
             <%_ if (answers["ui-framework"] === 'no') { _%>
                <Outlet />
            <%_ } else { _%>
                <ThemedLayout
                    Header={Header}
                    <%_ if (selectedSvg || selectedIcon) { _%>
                    Title={({ collapsed }) => (
                        <ThemedTitle
                            collapsed={collapsed}
                        <%_ if (selectedTitle) { _%>
                            text="<%= selectedTitle %>"
                        <%_ } _%>
                        <%_ if (selectedSvg) { _%>
                            icon={<AppIcon />}
                        <%_ } _%>
                        />
                    )}
                    <%_ } _%>
                >
                    <Outlet />
                </ThemedLayout>
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
