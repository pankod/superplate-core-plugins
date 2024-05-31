import { Outlet } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
<%_ if (answers["ui-framework"] === 'antd') { _%>
import {
    ThemedLayoutV2,
    ThemedSiderV2,
} from "@refinedev/antd";
    <%_ } _%>
    <%_ if (answers["ui-framework"] === 'mui') { _%>
import {
    ThemedLayoutV2,
} from "@refinedev/mui";
    <%_ } _%>

import { Header } from "@components/header";
import { authProvider } from "~/authProvider";
<%_ if (answers["ui-framework"] === "no" || answers["ui-framework"] === "tailwindcss") { _%>
import { Layout } from "~/components/layout";
<%_ } _%>

export default function BaseLayout() {
    return (
        <>
             <%_ if (answers["ui-framework"] === "no" || answers["ui-framework"] === "tailwindcss") { _%>
                <Layout>
                    <Outlet />
                </Layout>
            <%_ } else { _%>
                <ThemedLayoutV2
                    Header={() => <Header sticky />}
                    <%_ if (answers["ui-framework"] === 'antd') { _%>
                    Sider={(props) => <ThemedSiderV2 {...props} fixed />}
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
export async function loader({ request }: LoaderFunctionArgs) {
    const { authenticated, redirectTo } = await authProvider.check(request);

    if (!authenticated) {
        throw redirect(redirectTo ?? "/login");
    }

    return {};
}