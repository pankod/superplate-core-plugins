import React from 'react';
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
<%_ if (answers["ui-framework"] === 'mui') { _%>
    import GlobalStyles from "@mui/material/GlobalStyles";
    import CssBaseline from "@mui/material/CssBaseline";
    import { <%- (_app.refineMuiImports || []).join("\n,") _%> } from '@refinedev/mui';
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


interface DocumentProps {
    children: React.ReactNode;
    title?: string;
  }
  
  const Document = withEmotionCache(({ children, title }: DocumentProps, emotionCache) => {
    const clientStyleData = React.useContext(ClientStyleContext);
  
    // Only executed on client
    useEnhancedEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        // eslint-disable-next-line no-underscore-dangle
        (emotionCache.sheet as any)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData.reset();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          {title ? <title>{title}</title> : null}
          <Meta />
          <Links />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <meta name="emotion-insertion-point" content="emotion-insertion-point" />
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
});


// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
    <%- (_app.innerHooks || []).join("\n") %>
    <%- (_app.inner || []).join("\n") %>
    return (
      <Document>
        <GitHubBanner />
          <RefineKbarProvider>

          
<%- top.join("\n") %>
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
            }}
            >
              <Outlet />
          <UnsavedChangesNotifier />
                        <RefineKbar />
            </Refine>
            <%- bottom.join("\n") %>
            </RefineKbarProvider>
      </Document>
    );
  }

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css",
    },
  ];
}


<%- (_app.loader || []).join("\n,") _%>
