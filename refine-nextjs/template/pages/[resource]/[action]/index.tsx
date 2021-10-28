import { GetServerSideProps } from "next";
export { NextRouteComponent as default } from "@pankod/refine-nextjs-router";
<%_ if (answers["auth-provider"] !== 'none' || answers.dataProvider == 'strapi-graphql-data-provider' || answers.dataProvider == 'supabase-data-provider') { _%>
import { checkAuthentication } from "@pankod/refine-nextjs-router";

import { authProvider } from "src/authProvider";
<%_ } _%>

export const getServerSideProps: GetServerSideProps = async (context) => {
    <%_ if (answers["auth-provider"] !== 'none' || answers.dataProvider == 'strapi-graphql-data-provider' || answers.dataProvider == 'supabase-data-provider') { _%>

    const { isAuthenticated, ...props } = await checkAuthentication(
        authProvider,
        context,
    );

    if (!isAuthenticated) {
        return props;
    }
    
    <%_ } _%>

    return {
        props: {},
    };
};
