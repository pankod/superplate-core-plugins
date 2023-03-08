import React from "react";
import { AppProps } from "next/app";
import type { NextPage } from "next";
import { Refine, <%- (_app.refineImports || []).join("\n,") _%> } from '@refinedev/core';
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
import routerProvider from "@refinedev/nextjs-router";

<%- (_app.import || []).join("\n") _%>

<%- (_app.localImport || []).join("\n") _%>

<%- (_app.relativeImport || []).join("\n") _%>

<%- (_app.afterImport || []).join("\n") _%>

<%
    var top = _app.wrapper.map(wrapper => wrapper[0] || "");
    var bottom = _app.wrapper.map(wrapper => wrapper[1] || "").reverse();
%>

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
     layout?: string;
 };

 type AppPropsWithLayout = AppProps & {
     Component: NextPageWithLayout;
 };

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
    const RenderLayout = ({ children }: { children: JSX.Element }) => {
        if (!Component.layout) {
            return <Layout Header={Header}>{children}</Layout>;
        }

        return <React.Fragment>{children}</React.Fragment>;
    };

    <%- (_app.innerHooks || []).join("\n") %>
    <%- (_app.inner || []).join("\n") %>
    return (
        <%- top.join("\n") %>
        <Refine 
            routerProvider={routerProvider}
            <%- (_app.refineProps || []).join("\n") %>
        >
            <RenderLayout>
                <Component {...pageProps} />
            </RenderLayout>
        </Refine>
        <%- bottom.join("\n") %>
      );
};


<%_ if (answers[`i18n-${answers["ui-framework"]}`] !== 'no') { _%>
export default appWithTranslation(MyApp);
<%_ } else {_%>
export default MyApp;
<%_ } _%>
