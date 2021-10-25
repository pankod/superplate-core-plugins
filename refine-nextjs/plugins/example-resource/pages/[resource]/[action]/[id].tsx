export { NextRouteComponent as default } from "@pankod/refine-nextjs-router";
import { checkAuthentication } from "@pankod/refine-nextjs-router";

import { GetServerSideProps } from "next";

<%_ if (answers["auth-provider"] !== 'none') { _%>
import { authProvider } from "src/authProvider";
<%_ } _%>

export const getServerSideProps: GetServerSideProps = async (context) => {
    <%_ if (answers["auth-provider"] !== 'none') { _%>

    const { isAuthenticated, redirect } = await checkAuthentication(
        authProvider,
        context,
    );

    if (!isAuthenticated) {
        return { redirect };
    }
    
    <%_ } _%>

    return {
        props: {},
    };
};
