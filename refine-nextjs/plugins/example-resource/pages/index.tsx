export { NextRouteComponent as default } from "@pankod/refine-nextjs-router";
import { checkAuthentication } from "@pankod/refine-nextjs-router";

import { GetServerSideProps } from "next";

<%_ if (answers.dataProvider === 'custom-json-rest-data-provider') { _%>
import dataProvider from "@pankod/refine-simple-rest";
const API_URL = "https://api.fake-rest.refine.dev";
<%_ } else { _%>
import dataProvider from "@pankod/refine-nestjsx-crud";
const API_URL = "https://api.nestjsx-crud.refine.dev"; 
<%_ } _%>

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
