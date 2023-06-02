import { <%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>ShowInferencer } from "@refinedev/inferencer/<%- (_app.inferencer.folder || "") _%>";
import { GetServerSideProps } from "next";
<%_ if (_app.isAuthProviderCheck) { _%>
import { authProvider } from "src/authProvider";
<%_ } _%>
<%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
<%_ } _%>

<%_ if (_app.isNextAuthCheck) { _%>
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]";
<%_ } _%>

<%_ if (answers["data-provider"] === 'data-provider-hasura') { _%>
import { inferencerPredefinedMeta } from "src/inferencerPredefinedMeta";
<%_ } _%>

export default function BlogPostShow() {
    return <<%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>ShowInferencer 
<%_ if (answers["data-provider"] === 'data-provider-appwrite') { _%>
fieldTransformer={(field) => {
  if (["$permissions", "$updatedAt", "$createdAt"].includes(field.key)) {
    return false;
  }
  return field;
}}
<%_ } _%>
<%_ if (answers["data-provider"] === 'data-provider-strapi-v4') { _%>
fieldTransformer={(field) => {
  if (["locale", "updatedAt", "publishedAt"].includes(field.key)) {
    return false;
  }

  return field;
}}
<%_ } _%>
<%_ if (answers["data-provider"] === 'data-provider-hasura') { _%>
meta={inferencerPredefinedMeta}
<%_ } _%>
/>;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {

  <%_ if (_app.isNextAuthCheck) { _%>
      const session = await getServerSession(
        context.req,
        context.res,
        authOptions,
    );
    <%_ } _%>
    
    <%_ if (_app.isAuthProviderCheck) { _%>
    const { authenticated, redirectTo } = await authProvider.check(context);
    <%_ } _%>

    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
    const translateProps = await serverSideTranslations(
        context.locale ?? "en",
        ["common"],
    );
    <%_ } _%>

    <%_ if (_app.isNextAuthCheck) { _%>
    if (!session) {
        return {
            props: {
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
                ...translateProps,
                <%_ } _%>
            },
            redirect: {
                destination: `/login?to=${encodeURIComponent("/blog-posts")}`,
                permanent: false,
            },
        };
    }
    <%_ } _%>

    <%_ if (_app.isAuthProviderCheck) { _%>
    if (!authenticated) {
        return {
            props: {
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
                ...translateProps,
                <%_ } _%>
            },
            redirect: {
                destination: `${redirectTo}?to=${encodeURIComponent(
          "/blog-posts"
        )}`,
                permanent: false,
            },
        };
    }
    <%_ } _%>

    return {
        props: {
            <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
            ...translateProps,
            <%_ } _%>
        },
    };
};
