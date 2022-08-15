import { GetServerSideProps } from "next";
export { RemixRouteComponent as default } from "@pankod/refine-remix-router";
import { checkAuthentication } from "@pankod/refine-nextjs-router";

<%_ if (answers[`i18n-${answers["ui-framework"]}`] !== 'no') { _%>
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
<%_ } _%>

import { authProvider } from "src/authProvider";

export const getServerSideProps: GetServerSideProps = async (context) => {
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