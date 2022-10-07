import React from 'react';
import type { MetaFunction } from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import { StylesPlaceholder } from '@mantine/remix';

import { Refine, <%- (_app.refineImports || []).join("\n,") _%> } from '@pankod/refine-core';
<%_ if (answers["ui-framework"] === 'mantine') { _%>
    import { createEmotionCache, <%- (_app.refineMantineImports || []).join("\n,") _%> } from '@pankod/refine-mantine';
<%_ } _%>

import routerProvider from "@pankod/refine-remix-router";

<%- (_app.import || []).join("\n") _%>

<%- (_app.localImport || []).join("\n") _%>

<%- (_app.relativeImport || []).join("\n") _%>

<%- (_app.afterImport || []).join("\n") _%>

<%
    var top = _app.wrapper.map(wrapper => wrapper[0] || "");
    var bottom = _app.wrapper.map(wrapper => wrapper[1] || "").reverse();
%>

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "New Remix + Refine App",
    viewport: "width=device-width,initial-scale=1",
});


createEmotionCache({ key: 'mantine' });



// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
    <%- (_app.innerHooks || []).join("\n") %>
    <%- (_app.inner || []).join("\n") %>
    return (

    <MantineProvider theme={LightTheme} withGlobalStyles withNormalizeCSS>
      <html lang="en">
        <head>
          <StylesPlaceholder />
          <Meta />
          <Links />
        </head>
        <body>
        <%- top.join("\n") %>
                  <Refine
                      routerProvider={routerProvider}
                      <%- (_app.refineProps || []).join("\n") %>
                  >
                    <Outlet />
                  </Refine>
                  <%- bottom.join("\n") %>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </MantineProvider>
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