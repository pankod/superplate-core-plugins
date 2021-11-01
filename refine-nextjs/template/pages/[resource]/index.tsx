import { GetServerSideProps } from "next";
export { NextRouteComponent as default } from "@pankod/refine-nextjs-router";
<%_ if (answers["auth-provider"] !== 'none' || answers.dataProvider == 'strapi-graphql-data-provider' || answers.dataProvider == 'supabase-data-provider') { _%>
import { checkAuthentication } from "@pankod/refine-nextjs-router";

import { authProvider } from "src/authProvider";
<%_ } _%>

<%_ if (i18n === 'i18n') { _%>
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
<%_ } _%>

export const getServerSideProps: GetServerSideProps = async (context) => {
    <%_ if (answers["auth-provider"] !== 'none' || answers.dataProvider == 'strapi-graphql-data-provider' || answers.dataProvider == 'supabase-data-provider') { _%>

    const { isAuthenticated, ...props } = await checkAuthentication(
        authProvider,
        context,
    );

    <%_ if (i18n === 'i18n') { _%>
    const i18nProps = (await serverSideTranslations(context.locale ?? "en", ["common"]))

            if (!isAuthenticated) {
                return { props: { ...props, ...i18nProps } };
            }

    <%_ } else { _%>
    return props;
    <%_ } _%>
    
    <%_ } _%>

    <%_ if (i18n === 'i18n') { _%>
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
