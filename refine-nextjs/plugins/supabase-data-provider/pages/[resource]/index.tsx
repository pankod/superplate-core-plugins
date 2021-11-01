import { GetServerSideProps } from "next";
export { NextRouteComponent as default } from "@pankod/refine-nextjs-router";
import { checkAuthentication } from "@pankod/refine-nextjs-router";
import { dataProvider } from "@pankod/refine-supabase";
import nookies from "nookies";

<%_ if (i18n === 'i18n') { _%>
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
<%_ } _%>

import { authProvider } from "src/authProvider";
import { supabaseClient } from "src/utility";

export const getServerSideProps: GetServerSideProps = async (context) => {
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
        const { token } = nookies.get(context);
        await supabaseClient.auth.setAuth(token);

        const data = await dataProvider(supabaseClient).getList({
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
        return { props: {
            <%_ if(i18n === 'i18n') { _%>
                ...i18nProps
            <%_ } _%>
        } };
    }
};
