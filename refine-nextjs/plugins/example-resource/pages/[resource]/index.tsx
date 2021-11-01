import { GetServerSideProps } from "next";
export { NextRouteComponent as default } from "@pankod/refine-nextjs-router";
<%_ if (answers["auth-provider"] !== 'none') { _%>
import { checkAuthentication } from "@pankod/refine-nextjs-router";
<%_ } _%>

<%_ if (answers["auth-provider"] !== 'none' && answers.dataProvider === 'custom-json-rest-data-provider') { _%>
import dataProvider from "@pankod/refine-simple-rest";
    const API_URL = "https://api.fake-rest.refine.dev";
<%_ } else if (answers["auth-provider"] !== 'none' && answers.dataProvider === 'nestjsx-crud-data-provider') { _%>
import dataProvider from "@pankod/refine-nestjsx-crud";
    const API_URL = "https://api.nestjsx-crud.refine.dev"; 
<%_ } _%>

<%_ if (answers["auth-provider"] !== 'none') { _%>
import { authProvider } from "src/authProvider";
<%_ } _%>

<%_ if (i18n === 'i18n') { _%>
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
<%_ } _%>

export const getServerSideProps: GetServerSideProps = async (context) => {
    <%_ if (answers["auth-provider"] !== 'none') { _%>

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


    const { query } = context;

        try {
            const data = await dataProvider(API_URL).getList({
                resource: query["resource"] as string,
            });

            return {
                props: {
                    pageData: data,
                    
                 <%_ if(i18n === 'i18n') { _%>
                ...i18nProps
                <%_ } _%>
             },
         };
     } catch (error) {
    return {
        props: {
              <%_ if(i18n === 'i18n') { _%>
                ...i18nProps
            <%_ } _%>
         } };
     }

    <%_ } else if (i18n === 'i18n') { _%>
    return {
        props: {
            ...(await serverSideTranslations(context.locale ?? "en", [
                "common",
            ])),
        },
    };
    <%_ } else { _%>
    return {
        props: {},
    };
    <%_ } _%>

};
