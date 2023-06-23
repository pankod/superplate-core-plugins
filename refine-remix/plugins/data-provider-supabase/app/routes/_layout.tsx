import { Outlet } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
<%_ if (answers["ui-framework"] === 'antd') { _%>
import {
    ThemedLayoutV2,
    <%_ if (selectedSvg || selectedTitle) { _%>
    ThemedTitleV2,
    <%_ } _%>
    ThemedSiderV2,
} from "@refinedev/antd";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mui') { _%>
import {
    ThemedLayoutV2,
    <%_ if (selectedSvg || selectedTitle) { _%>
    ThemedTitleV2,
    <%_ } _%>
} from "@refinedev/mui";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mantine') { _%>
import {
    ThemedLayoutV2,
    <%_ if (selectedSvg || selectedTitle) { _%>
    ThemedTitleV2,
    <%_ } _%>
} from "@refinedev/mantine";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'chakra') { _%>
import {
    ThemedLayoutV2,
    <%_ if (selectedSvg || selectedTitle) { _%>
    ThemedTitleV2,
    <%_ } _%>
} from "@refinedev/chakra-ui";
<%_ } _%>

import { Header } from "@components/header";
import { authProvider } from "~/authProvider";
<%_ if (selectedSvg && answers["ui-framework"] !== "no" ) { _%>
import { AppIcon } from "@components/app-icon";
<%_ } _%>
<%_ if (answers["ui-framework"] === 'no') { _%>
import { Layout } from "~/components/layout";
<%_ } _%>

export default function BaseLayout() {
    return (
        <>
             <%_ if (answers["ui-framework"] === 'no') { _%>
                <Layout>
                    <Outlet />
                </Layout>
            <%_ } else { _%>
                <ThemedLayoutV2
                    Header={() => <Header sticky />}
                    <%_ if (answers["ui-framework"] === 'antd') { _%>
                    Sider={(props) => <ThemedSiderV2 {...props} fixed />}
                    <%_ } _%>
                    <%_ if (selectedSvg || selectedTitle) { _%>
                    Title={({ collapsed }) => (
                        <ThemedTitleV2
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
                </ThemedLayoutV2>
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