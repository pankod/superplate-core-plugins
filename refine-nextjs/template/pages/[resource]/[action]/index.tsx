import { GetServerSideProps } from "next";
export { NextRouteComponent as default } from "@pankod/refine-nextjs-router";
<%_ if (answers["auth-provider"] !== 'none' || answers["data-provider"] == 'data-provider-strapi-graphql' || answers["data-provider"] == 'supabase-data-provider') { _%>
import { checkAuthentication } from "@pankod/refine-nextjs-router";

import { authProvider } from "src/authProvider";
<%_ } _%>

<%_ if (i18n !== 'no') { _%>
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
<%_ } _%>

export const getServerSideProps: GetServerSideProps = async (context) => {
    <%_ if (answers["auth-provider"] !== 'none' || answers["data-provider"] == 'data-provider-strapi-graphql' || answers["data-provider"] == 'supabase-data-provider') { _%>

    const { isAuthenticated, ...props } = await checkAuthentication(
        authProvider,
        context,
    );

    if (!isAuthenticated) {
        return props;
    }
    
    <%_ } _%>

    <%_ if (i18n !== 'no') { _%>
    return {
        props: {
            ...(await serverSideTranslations(context.locale ?? "en", [
                "common",
            ])),
        },
    };
    <%_ } else {_%>
    return {
        props: {},
    };
    <%_ } _%>
};
