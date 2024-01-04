import type { MetaFunction } from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from "@remix-run/react";

import { Refine, GitHubBanner, <%- (_app.refineImports || []).join("\n,") _%> } from '@refinedev/core';
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
<%_ if (answers["ui-framework"] === 'antd') { _%>
    import { <%- (_app.refineAntdImports || []).join("\n,") _%> } from '@refinedev/antd';
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mui') { _%>
    import { <%- (_app.refineMuiImports || []).join("\n,") _%> } from '@refinedev/mui';
<%_ } _%>
<%_ if (answers["ui-framework"] === 'mantine') { _%>
    import { <%- (_app.refineMantineImports || []).join("\n,") _%> } from '@refinedev/mantine';
<%_ } _%>
<%_ if (answers["ui-framework"] === 'chakra') { _%>
    import { <%- (_app.refineChakraImports || []).join("\n,") _%> } from '@refinedev/chakra-ui';
<%_ } _%>
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider, { UnsavedChangesNotifier } from "@refinedev/remix-router";

<%- (_app.import || []).join("\n") _%>

<%- (_app.localImport || []).join("\n") _%>

<%- (_app.relativeImport || []).join("\n") _%>

<%- (_app.afterImport || []).join("\n") _%>

<%
    var top = _app.wrapper.map(wrapper => wrapper[0] || "");
    var bottom = _app.wrapper.map(wrapper => wrapper[1] || "").reverse();
%>

export const meta: MetaFunction = () => ([
    {
        title: "New Remix + Refine App",
    }
]);

export default function App() {

    <%- (_app.innerHooks || []).join("\n") %>
    <%- (_app.inner || []).join("\n") %>

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
            <GitHubBanner />
            <RefineKbarProvider>
                <%- top.join("\n") %>
                    <DevtoolsProvider>
                        <Refine
                            routerProvider={routerProvider}
                            <%- (_app.refineProps || []).join("\n") %>
                            <%_ if (answers["inferencer"] === 'inferencer' || answers["inferencer-headless"] === 'inferencer-headless') { _%>
                            resources={[
                                <%_ if (answers["data-provider"] === 'data-provider-strapi-v4') { _%>
                                {
                                    name: "blog-posts",
                                    list: "/blog-posts",
                                    create: "/blog-posts/create",
                                    edit: "/blog-posts/edit/:id",
                                    show: "/blog-posts/show/:id",
                                    meta: {
                                        canDelete: true,
                                    },
                                },
                                <%_ } else { _%>
                                {
                                    name: "blog_posts",
                                    list: "/blog-posts",
                                    create: "/blog-posts/create",
                                    edit: "/blog-posts/edit/:id",
                                    show: "/blog-posts/show/:id",
                                    meta: {
                                        canDelete: true,
                                    },
                                },
                                <%_ } _%>
                                {
                                    name: "categories",
                                    list: "/categories",
                                    create: "/categories/create",
                                    edit: "/categories/edit/:id",
                                    show: "/categories/show/:id",
                                    meta: {
                                        canDelete: true,
                                    },
                                }
                            ]}
                            <%_ } _%>
                            options={{
                                syncWithLocation: true,
                                warnWhenUnsavedChanges: true,
                                useNewQueryKeys: true,
                                <%_ if (typeof projectId !== 'undefined' && projectId !== '') { _%>
                                    projectId: "<%= projectId %>",
                                <%_ } _%>
                                <%- (_app.refineOptions || []).join("\n") %>
                            }}
                        >
                            <>
                            <Outlet />
                            <UnsavedChangesNotifier />
                            <RefineKbar />
                            </>
                        </Refine>
                        <DevtoolsPanel />
                    </DevtoolsProvider>
                <%- bottom.join("\n") %>
            </RefineKbarProvider>
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
            </body>
        </html>
    );
}

export function links() {
    return [
        <%- (_app.styleImport || []).join("\n,") _%>
    ];
};

<%- (_app.loader || []).join("\n,") _%>
