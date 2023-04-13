import { Outlet } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
<%_ if (answers["ui-framework"] === 'antd') { _%>
import {
    ThemedLayout,
    <%_ if (selectedSvg || selectedTitle) { _%>
    ThemedTitle,
    <%_ } _%>
} from "@refinedev/antd";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mui') { _%>
import {
    <%- (_app.themedLayoutTag || "ThemedLayout") %>,
    <%_ if (selectedSvg || selectedTitle) { _%>
    <%- (_app.themedTitleTag || "ThemedTitle") %> ,
    <%_ } _%>
} from "@refinedev/mui";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mantine') { _%>
import {
    ThemedLayout,
    <%_ if (selectedSvg || selectedTitle) { _%>
    ThemedTitle,
    <%_ } _%>
} from "@refinedev/mantine";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'chakra') { _%>
import {
    ThemedLayout,
    <%_ if (selectedSvg || selectedTitle) { _%>
    ThemedTitle,
    <%_ } _%>
} from "@refinedev/chakra-ui";
<%_ } _%>

import { Header } from "@components/header";
import { authProvider } from "~/authProvider";
<%_ if (selectedSvg && answers["ui-framework"] !== "no" ) { _%>
import { AppIcon } from "@components/app-icon";
<%_ } _%>

export default function BaseLayout() {
    return (
        <>
             <%_ if (answers["ui-framework"] === 'no') { _%>
                <Outlet />
            <%_ } else { _%>
                <<%- (_app.themedLayoutTag || "ThemedLayout") %>
                    Header={Header}
                    <%_ if (selectedSvg || selectedTitle) { _%>
                    Title={({ collapsed }) => (
                        <<%- (_app.themedTitleTag || "ThemedTitle") %>
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
                </<%- (_app.themedLayoutTag || "ThemedLayout") %>>
            <%_ } _%>
        </>
    );
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