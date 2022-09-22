import { GetServerSideProps } from "next";
import { NextRouteComponent, handleRefineParams } from "@pankod/refine-nextjs-router";
<%_ if (answers["auth-provider"] !== 'none') { _%>
import { checkAuthentication } from "@pankod/refine-nextjs-router";
<%_ } _%>

<%_ if (answers["data-provider"] === 'data-provider-custom-json-rest') { _%>
import dataProvider from "@pankod/refine-simple-rest";
    const API_URL = "https://api.fake-rest.refine.dev";
<%_ } else if (answers["data-provider"] === 'data-provider-nestjsx-crud') { _%>
import dataProvider from "@pankod/refine-nestjsx-crud";
    const API_URL = "https://api.nestjsx-crud.refine.dev"; 
<%_ } _%>

<%_ if (answers["auth-provider"] !== 'none') { _%>
import { authProvider } from "src/authProvider";
<%_ } _%>

<%_ if (answers[`i18n-${answers["ui-framework"]}`] !== 'no') { _%>
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
<%_ } _%>

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { resource, action, id } = handleRefineParams(context.params?.refine);

    <%_ if (answers["auth-provider"] !== 'none') { _%>

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

    try {
        if (resource && action === "show" && id) {
            const data = await dataProvider(API_URL).getOne({
                resource: resource.slice(resource.lastIndexOf("/") + 1),
                id,
            });

            return {
                props: {
                    initialData: data,
                    <%_ if(answers[`i18n-${answers["ui-framework"]}`] !== 'no') { _%>
                        ...i18nProps
                        <%_ } _%>
                },
            };
        } else if (resource && !action && !id) {
            const data = await dataProvider(API_URL).getList({
                resource: resource.slice(resource.lastIndexOf("/") + 1),
            });

            return {
                props: {
                    initialData: data,
                    <%_ if(answers[`i18n-${answers["ui-framework"]}`] !== 'no') { _%>
                        ...i18nProps
                        <%_ } _%>
                },
            };
        }
    } catch (error) {
    return {
        props: {
              <%_ if(answers[`i18n-${answers["ui-framework"]}`] !== 'no') { _%>
                ...i18nProps
            <%_ } _%>
         } };
     }

    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== 'no') { _%>
    return {
        props: {
            ...i18nProps,
        },
    };
    <%_ } else { _%>
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

