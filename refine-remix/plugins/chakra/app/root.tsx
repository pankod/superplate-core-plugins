import React, { useContext, useEffect } from 'react'
import { withEmotionCache } from '@emotion/react'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import { MetaFunction, LinksFunction } from '@remix-run/node' // Depends on the runtime you choose
import { Refine, GitHubBanner, <%- (_app.refineImports || []).join("\n,") _%> } from '@refinedev/core';
<%_ if (answers["ui-framework"] === 'chakra') { _%>
    import {ChakraProvider} from "@chakra-ui/react";
    import {  RefineThemes, <%- (_app.refineChakraImports || []).join("\n,") _%> } from '@refinedev/chakra-ui';
<%_ } _%>
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider, { UnsavedChangesNotifier } from "@refinedev/remix-router";


import { ServerStyleContext, ClientStyleContext } from './context'

<%- (_app.import || []).join("\n") _%>

<%- (_app.localImport || []).join("\n") _%>

<%- (_app.relativeImport || []).join("\n") _%>

<%- (_app.afterImport || []).join("\n") _%>

export const meta: MetaFunction = () => ([
  {
    title: 'New Remix App',
  }
]);

<%
    var top = _app.wrapper.map(wrapper => wrapper[0] || "");
    var bottom = _app.wrapper.map(wrapper => wrapper[1] || "").reverse();
%>

export let links: LinksFunction = () => {
  return [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&display=swap'
    },
  ]
}

interface DocumentProps {
  children: React.ReactNode;
}

const Document = withEmotionCache(
  ({ children }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        (emotionCache.sheet as any)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData?.reset();
    }, []);

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(' ')}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
);

export default function App() {
  <%- (_app.innerHooks || []).join("\n") %>
  <%- (_app.inner || []).join("\n") %>

  return (
    <Document>
      <GitHubBanner />
      {/* You can change the theme colors here. example: theme={RefineThemes.Magenta} */}
      <ChakraProvider theme={RefineThemes.<%= selectedTheme %>}>
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
      </ChakraProvider>
    </Document>
  );
}

<%- (_app.loader || []).join("\n,") _%>
