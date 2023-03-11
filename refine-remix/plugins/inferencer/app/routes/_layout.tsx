import { Outlet } from "@remix-run/react";
<%_ if (answers["ui-framework"] === 'antd') { _%>
     import { Layout } from "@refinedev/antd";
 <%_ } _%>
 <%_ if (answers["ui-framework"] === 'mui') { _%>
     import { Layout } from "@refinedev/mui";
 <%_ } _%>
 <%_ if (answers["ui-framework"] === 'mantine') { _%>
     import { Layout } from "@refinedev/mantine";
 <%_ } _%>
 <%_ if (answers["ui-framework"] === 'chakra') { _%>
     import { Layout } from "@refinedev/chakra-ui";
 <%_ } _%>
 import { RefineKbar } from "@refinedev/kbar";

import { Header } from "@components/header";

export default function BaseLayout() {
    return (
        <>
            <Layout Header={Header}>
                <Outlet />
            </Layout>
            <RefineKbar />
        </>
        
    );
}
