import { GetServerSideProps } from "next";
export { NextRouteComponent as default } from "@pankod/refine-nextjs-router";
<%_ if (answers["auth-provider"] !== 'none') { _%>
import { checkAuthentication } from "@pankod/refine-nextjs-router";
<%_ } _%>

<%_ if (answers["auth-provider"] !== 'none' && answers.dataProvider === 'custom-json-rest-data-provider') { _%>
import dataProvider from "@pankod/refine-simple-rest";
const API_URL = "https://api.fake-rest.refine.dev";
<%_ } else if (answers["auth-provider"] !== 'none' && answers.dataProvider === 'nestjsx-crud-data-provider') {_%>
import dataProvider from "@pankod/refine-nestjsx-crud";
const API_URL = "https://api.nestjsx-crud.refine.dev"; 
<%_ } _%>

<%_ if (answers["auth-provider"] !== 'none') { _%>
import { authProvider } from "src/authProvider";
<%_ } _%>

export const getServerSideProps: GetServerSideProps = async (context) => {
    <%_ if (answers["auth-provider"] !== 'none') { _%>

    const { isAuthenticated, ...props } = await checkAuthentication(
        authProvider,
        context,
    );

    if (!isAuthenticated) {
        return props;
    }

    const { query } = context;

    try {
         const data = await dataProvider(API_URL).getList({
             resource: query["resource"] as string,
         });
 
         return {
             props: {
                 pageData: {
                     list: data,
                 },
             },
         };
     } catch (error) {
         return { props: {} };
     }

    <%_ } else { _%>
        return {
            props: {},
        };
    <%_ } _%>

};
