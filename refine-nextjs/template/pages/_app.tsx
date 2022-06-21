import React from "react";
import { AppProps } from "next/app";
import Link from "next/link";
<%_ if (answers["partytown-builder"] === 'partytown-builder') { _%>
import Head from "next/head";
<%_ } _%>
import { Refine, <%- (_app.refineImports || []).join("\n,") _%> } from '@pankod/refine-core';
<%_ if (answers.uiFramework === 'antd') { _%>
    import { <%- (_app.refineAntdImports || []).join("\n,") _%> } from '@pankod/refine-antd';
<%_ } _%>
<%_ if (answers.uiFramework === 'mui') { _%>
    import { <%- (_app.refineMuiImports || []).join("\n,") _%> } from '@pankod/refine-mui';
<%_ } _%>
import routerProvider from "@pankod/refine-nextjs-router";
<%_ if (answers["partytown-builder"] === 'partytown-builder') { _%>
    import { Partytown } from '@builder.io/partytown/react';
    <%_ } _%>
<%- (_app.import || []).join("\n") _%>

<%- (_app.localImport || []).join("\n") _%>

<%
    var top = _app.wrapper.map(wrapper => wrapper[0] || "");
    var bottom = _app.wrapper.map(wrapper => wrapper[1] || "").reverse();
%>

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    <%- (_app.innerHooks || []).join("\n") %>
    <%- (_app.inner || []).join("\n") %>
    return (
        <%- top.join("\n") %>
        <Refine 
            routerProvider={{...routerProvider, Link}}
            <%- (_app.refineProps || []).join("\n") %>
        >

            <%_ if (answers["partytown-builder"] === 'partytown-builder') { _%>
                <Head>
                    <Partytown debug={true} forward={['dataLayer.push']} />
                </Head>
            <%_ } _%>

            <Component {...pageProps} />
        </Refine>
        <%- bottom.join("\n") %>
      );
};


<%_ if (i18n !== 'no') { _%>
export default appWithTranslation(MyApp);
<%_ } else {_%>
export default MyApp;
<%_ } _%>
