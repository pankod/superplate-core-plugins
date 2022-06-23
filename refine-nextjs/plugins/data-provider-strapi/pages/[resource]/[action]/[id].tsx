import { GetServerSideProps } from "next";
export { NextRouteComponent as default } from "@pankod/refine-nextjs-router";
import { checkAuthentication } from "@pankod/refine-nextjs-router";

<%_ if (answers[`i18n-${answers["ui-framework"]}`] !== 'no') { _%>
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

  if (!isAuthenticated) {
    return props;
  }

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
