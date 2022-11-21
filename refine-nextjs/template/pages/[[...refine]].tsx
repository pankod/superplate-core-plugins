import { GetServerSideProps } from "next";
import { NextRouteComponent /*, handleRefineParams */ } from "@pankod/refine-nextjs-router";
<%_ if (answers["auth-provider"] !== 'none' || ['data-provider-strapi-graphql', 'data-provider-supabase', 'data-provider-strapi-v4', 'data-provider-strapi'].includes(answers["data-provider"])) { _%>
    import { checkAuthentication } from "@pankod/refine-nextjs-router";

    import { authProvider } from "src/authProvider";
<%_ } _%>

<%_ if (answers[`i18n-${answers["ui-framework"]}`] !== 'no') { _%>
    import { serverSideTranslations } from "next-i18next/serverSideTranslations";
<%_ } _%>

export const getServerSideProps: GetServerSideProps = async (context) => {
    // const { resource, action, id } = handleRefineParams(context.params?.refine);

    <%_ if (answers["auth-provider"] !== 'none' || ['data-provider-strapi-graphql', 'data-provider-supabase', 'data-provider-strapi-v4', 'data-provider-strapi'].includes(answers["data-provider"])) { _%>

        const { isAuthenticated, ...props } = await checkAuthentication(
            authProvider,
            context,
        );

        <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== 'no') { _%>
        const i18nProps = (await serverSideTranslations(context.locale ?? "en", ["common"]))

                if (!isAuthenticated) {
                    return { props: { ...props, ...i18nProps } };
                }

        <%_ } else { _%>
            if (!isAuthenticated) {
                return props;
            }
        <%_ } _%>
    
    <%_ } _%>

    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== 'no') { _%>
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

export default NextRouteComponent;

/**
 * To define a custom initial route for refine to redirect and start with:
 *
 * Bind the `initialRoute` value to the `NextRouteComponent` like the following:
 *
 * export default NextRouteComponent.bind({ initialRoute: "/posts" });
 *
 **/
