import { <%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>CreateInferencer } from "@refinedev/inferencer/<%- (_app.inferencer.folder || "") _%>";
import { GetServerSideProps } from "next";
<%_ if (answers["auth-provider"] !== 'none' || answers["data-provider"] === 'data-provider-supabase' || answers["data-provider"] === 'data-provider-strapi-v4' || answers["data-provider"] === 'data-provider-appwrite') { _%>
import { authProvider } from "src/authProvider";
<%_ } _%>
<%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
<%_ } _%>

export default function BlogPostCreate() {
    return <<%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>CreateInferencer 
<%_ if (answers["data-provider"] === 'data-provider-appwrite') { _%>
fieldTransformer={(field: any) => {
  if (["$permissions", "$updatedAt"].includes(field.key)) {
    return false;
  }

  if (field.key === "$createdAt") {
    field.key = "created_at";
    field.title = "Created At";
  }

  return field;
}}
<%_ } _%>
<%_ if (answers["data-provider"] === 'data-provider-strapi-v4') { _%>
fieldTransformer={(field: any) => {
  if (["locale", "updatedAt", "publishedAt"].includes(field.key)) {
    return false;
  }

  return field;
}}
<%_ } _%>
/>;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
    <%_ if (answers["auth-provider"] !== 'none' || answers["data-provider"] === 'data-provider-supabase' || answers["data-provider"] === 'data-provider-strapi-v4' || answers["data-provider"] === 'data-provider-appwrite') { _%>
    const { authenticated, redirectTo } = await authProvider.check(context);
    <%_ } _%>

    <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
    const translateProps = await serverSideTranslations(
        context.locale ?? "en",
        ["common"],
    );
    <%_ } _%>

    <%_ if (answers["auth-provider"] !== 'none' || answers["data-provider"] === 'data-provider-supabase' || answers["data-provider"] === 'data-provider-strapi-v4' || answers["data-provider"] === 'data-provider-appwrite') { _%>
    if (!authenticated) {
        return {
            props: {
                <%_ if (answers[`i18n-${answers["ui-framework"]}`] !== "no") { _%>
                ...translateProps,
                <%_ } _%>
            },
            redirect: {
                destination: `${redirectTo}?to=${encodeURIComponent(
          "/blog_posts"
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
