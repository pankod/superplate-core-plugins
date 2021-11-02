import { GetServerSideProps } from "next";
export { NextRouteComponent as default } from "@pankod/refine-nextjs-router";
import { checkAuthentication } from "@pankod/refine-nextjs-router";

<%_ if (i18n === 'i18n') { _%>
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
<%_ } _%>

import { API_URL } from "src/constants";
import strapiAuthProvider from "src/authProvider";


export const getServerSideProps: GetServerSideProps = async (context) => {
  const { authProvider } = strapiAuthProvider(API_URL);
  const { isAuthenticated, ...props } = await checkAuthentication(
    authProvider,
    context
  );

  <%_ if (i18n === 'i18n') { _%>
    const i18nProps = (await serverSideTranslations(context.locale ?? "en", ["common"]))

            if (!isAuthenticated) {
                return { props: { ...props, ...i18nProps } };
            }

    <%_ } else { _%>
      if (!isAuthenticated) {
        return props;
    }
    
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
